(ns one-hyde.server
  (:use
    one-hyde.core
    watchtower.core
    [compojure.core :only [defroutes]]
    [compojure.route :only [files]]
    [ring.adapter.jetty :only [run-jetty]])

  (require
    [clj-time.core :as t]
    [clj-time.format :as f])
  )

(defn- blue [s] (str "\033[36m" s "\033[0m"))
(defn- red  [s] (str "\033[31m" s "\033[0m"))

; =print-result
(defn print-result
  "Print compile result"
  [result]
  (println " ..." (if result (blue "DONE") (red "FAIL"))))

; =do-compile
(defn do-compile
  "Compile templte file and print status"
  [#^java.io.File file]
  (if (layout-file? file)
    (do (print " * compiling all templates:")
        (print-result (compile-all-templates)))
    (do (print " * compiling:" (.getName file))
        (print-result (compile-template (file->template-name file))))))

; =start-watcher
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

; =main
(defn -main
  "main"
  [& [option]]
  #_(doseq [s ["2012-03-19" "2012-3-19" "hoge" "2012-1-1"]]
    (println
      (f/parse (f/formatter "YYYY-MM-dd") s)))
  (case option
    "compile" (compile-all-templates)

    (let [port (Integer/parseInt (get (System/getenv) "PORT" "8080"))]
      (start-watcher)
      (run-jetty handler {:port port}))))

