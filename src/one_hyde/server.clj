(ns one-hyde.server
  (:use
    one-hyde.core
    watchtower.core
;    hiccup.page-helpers
    [compojure.core :only [defroutes]]
    [compojure.route :only [files]]
    [ring.adapter.jetty :only [run-jetty]]))

(defn print-result
  "Print compile result"
  [result]
  (print " ... ")
  (if result
    (println "\033[36mDONE\033[0m")
    (println "\033[31mFAIL\033[0m")))

(defn do-compile
  "Compile templte file and print status"
  [#^java.io.File file]
  (if (layout-file? file)
    (do (print " * compiling all templates:")
        (print-result (compile-all-templates)))
    (do (print " * compiling:" (.getName file))
        (print-result (compile-template (file->template-name file))))))

(defn start-watcher
  "Start watchtower watcher to compile changed templates"
  []
  (watcher
    [*template-dir*]
    (rate 50)
    (file-filter ignore-dotfiles)
    (file-filter (extensions :clj))
    (on-change #(doseq [file %] (do-compile file)))))

(defroutes handler (files "/"))

(defn -main
  "main"
  [& [option]]
  (case option
    "compile" (compile-all-templates)

    (let [port (Integer/parseInt (get (System/getenv) "PORT" "8080"))]
      (start-watcher)
      (run-jetty handler {:port port}))))

