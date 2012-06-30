(ns misaki.server
  "Development server

  Listen *port* to publish developing blog,
  and watch template updates.
  "
  (:use
    [misaki core config template]
    [misaki.util.file   :only [add-path-slash has-extension? file?]]
    [misaki.util.string :only [blue red]]
    watchtower.core
    [compojure.core     :only [routes]]
    [compojure.route    :only [files]]
    [ring.adapter.jetty :only [run-jetty]]))

; =print-result
(defn print-compile-result
  "Print colored compile result."
  [#^String message, result]
  (let [text (case result
               true  (blue "DONE")
               false (red "FAIL")
               (blue "SKIP"))]
    (println (str " * compiling " message ": ... " text))))

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
  (binding [*base-dir* (add-path-slash dir)]
    (with-config
      (if (contains? (set args) "--compile")
        ; compile all only if '--compile' option is specified
        (do-all-compile)
        ; start watching and server
        (do (start-watcher)
            (run-jetty
              (routes (files "/" {:root *public-dir*}))
              {:port *port*}))))))

