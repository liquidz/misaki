(ns misaki.server
  "Development server

  Listen *port* to publish developing blog,
  and watch template updates.
  "
  (:use
    [misaki core config template]
    [misaki.util.file     :only [find-clj-files normalize-path has-extension? file?]]
    [misaki.util.string   :only [msec->string]]
    [text-decoration.core :only [cyan red bold]]
    watchtower.core
    [compojure.core       :only [routes]]
    [compojure.route      :only [files]]
    [ring.adapter.jetty   :only [run-jetty]]))

; =elapsing
(defmacro elapsing
  [& body]
  `(let [start-time# (System/currentTimeMillis)
         ~'get-elapsed-time (fn [] (- (System/currentTimeMillis) start-time#))]
     ~@body))

; =get-result-text
(defn- get-result-text
  [result & optional-string]
  (case result
    true  (cyan (apply str "DONE" optional-string))
    false (red (apply str "FAIL" optional-string))
    (cyan "SKIP")))

; =print-result
(defmacro print-compile-result
  "Print colored compile result."
  [#^String message, compile-sexp]
  `(do
     (println (str " * Compiling " (bold ~message)))
     (flush)
     (elapsing
       (let [result#  ~compile-sexp
             elapsed# (msec->string (~'get-elapsed-time))]
       (println "  " (get-result-text result# " in " elapsed#))))))


;; ## Dev Compiler

; =do-all-compile
(defn do-all-compile
  "Compile all templates"
  []
  (let [tmpls (remove layout-file? (find-clj-files *template-dir*))
        tags  (get-tags)]
    (if *detailed-log*
      (do (doseq [file tmpls]
            (print-compile-result (.getName file) (compile-template file)))
          (doseq [{tag-name :name} tags]
            (print-compile-result (str tag-name " tag") (compile-tag tag-name))))
      (do (print-compile-result "all templates" (every? #(compile-template %) tmpls))
          (print-compile-result "all tags"      (every? #(compile-tag (:name %)) tags))))
    (print-compile-result "clojurescripts" (compile-clojurescripts))))

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
      ;(print-compile-result "template" (compile-template file))
      (print-compile-result (.getName file) (compile-template file))
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
            (println " * starting server: " (cyan (str "http://localhost:" *port* *url-base*)))
            (run-jetty
              (routes (files *url-base* {:root *public-dir*}))
              {:port *port*}))))))

