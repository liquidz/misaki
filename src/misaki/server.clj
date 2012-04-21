(ns misaki.server
  "misaki: Development server"
  (:use
    [misaki core config]
    [misaki.util.file :only [add-path-slash]]
    watchtower.core
    [compojure.core :only [routes]]
    [compojure.route :only [files]]
    [ring.adapter.jetty :only [run-jetty]]))

(defn- blue [s] (str "\033[36m" s "\033[0m"))
(defn- red  [s] (str "\033[31m" s "\033[0m"))

; =print-result
(defn print-result
  "Print colored compile result."
  [result]
  (println " ..." (if result (blue "DONE") (red "FAIL"))))

;; ## Dev Compiler

; =do-all-compile
(defn do-all-compile
  "Compile all templates"
  []
  (print " * compiling all templates:")
  (print-result (compile-all-templates))
  (print " * compiling all tags:")
  (print-result (compile-all-tags)))

; =do-compile
(defn do-compile
  "Compile templte file and print status"
  [#^java.io.File file]

  (if (or (layout-file? file) (config-file? file))
    ; compile all templates if target file is layout or config
    (do-all-compile)
    ; compile target template
    (do (print " * compiling:" (.getName file))
        (print-result (compile-template (file->template-name file)))
        (when (post-file? file)
          ; compile with posts
          (if *compile-with-post*
            (doseq [tmpl-name *compile-with-post*]
              (do-compile (template-name->file tmpl-name))))
          ; compile tag
          (if-let [tags (-> file get-post-options :tag)]
            (doseq [tag tags]
              (print " * compiling tag:" tag)
              (print-result (compile-tag tag))))))))

;; ## Template Watcher

; =start-watcher
(defn start-watcher
  "Start watchtower watcher to compile changed templates"
  []
  ; compile all templates at first
  (do-all-compile)

  (watcher
    [*template-dir*
     (str *public-dir* "_config.clj")]
    (rate 50)
    (change-first? false) ; do not compile each templates at first
    (file-filter ignore-dotfiles)
    (file-filter (extensions :clj))
    (on-change #(doseq [file %]
                  ; use `wrap-config` to apply config file updates
                  (with-config (do-compile file))))))

;; ## main

; =main
(defn -main [& [dir]]
  (binding [*base-dir* (str "./" (add-path-slash dir))]
    (with-config
      (start-watcher)
      (run-jetty
        (routes (files "/" {:root *public-dir*}))
        {:port 8080}))))

