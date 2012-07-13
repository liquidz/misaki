(ns misaki.server
  "Development server

  Listen *port* to publish developing blog,
  and watch template updates.
  "
  (:use
    [misaki core config template]
    [misaki.util.file   :only [normalize-path has-extension? file?]]
    [misaki.util.string :only [blue red]]
    watchtower.core
    [compojure.core     :only [routes]]
    [compojure.route    :only [files]]
    [ring.adapter.jetty :only [run-jetty]]))

; =print-result
(defmacro print-compile-result
  "Print colored compile result."
  [#^String message, compile-sexp]
  `(do
     (print (str " * compiling " ~message ": ... "))
     (flush)
     (println (case ~compile-sexp
                true  (blue "DONE")
                false (red "FAIL")
                (blue "SKIP")))))

;; ## Dev Compiler

; =do-all-compile
(defn do-all-compile
  "Compile all templates"
  []
  (print-compile-result "all templates"  (compile-all-templates))
  (print-compile-result "all tags"       (compile-all-tags))
  (print-compile-result "clojurescripts" (compile-clojurescripts)))

; =do-compile
(defn do-compile
  "Compile templte file and print status"
  [#^java.io.File file]
  {:pre [(file? file)]}
  (cond
    ; clojurescript
    (has-extension? ".cljs" file)
    (print-compile-result "clojurescript" (compile-clojurescripts))

    ; layout or config
    (or (layout-file? file) (config-file? file))
    (do-all-compile)

    ; else
    :else
    (do
      (print-compile-result "template" (compile-template file))
      (when (post-file? file)
        ; compile with posts
        (if *compile-with-post*
          (doseq [tmpl-name *compile-with-post*]
            (do-compile (template-name->file tmpl-name))))
        ; compile tag
        (if-let [tags (-> file parse-template-option :tag)]
          (doseq [{tag-name :name} tags]
            (print-compile-result "tag" (compile-tag tag-name))))))))

;; ## Template Watcher

; =start-watcher
(defn start-watcher
  "Start watchtower watcher to compile changed templates"
  []
  ; compile all templates at first
  (do-all-compile)

  (watcher
    [*template-dir*
     (str *base-dir* *config-file*)]
    (rate 50)
    (change-first? false) ; do not compile each templates at first
    (file-filter ignore-dotfiles)
    (file-filter (extensions :clj :cljs))
    (on-change #(doseq [file %]
                  ; use `wrap-config` to apply config file updates
                  (with-config (do-compile file))))))

;; ## main

; =main
(defn -main [& [dir :as args]]
  (binding [*base-dir* (normalize-path dir)]
    (with-config
      (if (contains? (set args) "--compile")
        ; compile all only if '--compile' option is specified
        (do-all-compile)
        ; start watching and server
        (do (start-watcher)
            (println " * starting server: " (blue (str "http://localhost:" *port* *url-base*)))
            (run-jetty
              (routes (files *url-base* {:root *public-dir*}))
              {:port *port*}))))))

