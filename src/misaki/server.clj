(ns misaki.server
  "misaki: Development server"
  (:use
    [misaki core config]
    [misaki.util.file :only [add-path-slash has-extension?]]
    watchtower.core
    [cljs.closure :only [build]]
    [compojure.core :only [routes]]
    [compojure.route :only [files]]
    [ring.adapter.jetty :only [run-jetty]])
  (:require [clojure.java.io :as io]))

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

(defn do-cljs-compile
  "Compile clojurescript file and print status"
  []
  (try
    ; make directory if not exists
    (let [parent-dir (.getParentFile (io/file (:output-to *cljs-compile-options*)))]
      (if-not (.exists parent-dir)
        (.mkdir parent-dir)))
    ; build clojurescript
    (build (:src-dir *cljs-compile-options*)
           *cljs-compile-options*)
    (catch Exception e
      (.printStackTrace e) false))
  true)

; =do-compile
(defn do-compile
  "Compile templte file and print status"
  [#^java.io.File file]

  (cond
    ; clojurescript
    (has-extension? ".cljs" file)
    (do (print " * compiling clojurescript:")
      (print-result (do-cljs-compile)))

    ; layout or config
    (or (layout-file? file) (config-file? file))
    (do-all-compile)

    ; else
    :else
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
    (file-filter (extensions :cljs))
    (on-change #(doseq [file %]
                  ; use `wrap-config` to apply config file updates
                  (with-config (do-compile file))))))

;; ## main

; =main
(defn -main [& [dir]]
;  (binding [*base-dir* (str "./" (add-path-slash dir))]
  (binding [*base-dir* (add-path-slash dir)]
    (with-config
      (start-watcher)
      (run-jetty
        (routes (files "/" {:root *public-dir*}))
        {:port 8080}))))

