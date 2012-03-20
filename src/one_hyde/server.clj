(ns one-hyde.server
  (:use
    watchtower.core
    compojure.core
    [compojure.route :only [files]]
    [ring.adapter.jetty :only [run-jetty]]
    [one-hyde.core :only [*template* file->template-name compile-template]]))

(defn start-watcher []
  (watcher
    [*template*]
    (rate 50)
    (file-filter ignore-dotfiles)
    (file-filter (extensions :clj))
    (on-change #(doseq [file %]
                  (println " * compiling: " (.getName file))
                  (compile-template (file->template-name file))
                  (println " * done")))))

(defroutes handler (files "/"))

(defn -main []
  (let [port (Integer/parseInt (get (System/getenv) "PORT" "8080"))]
    (start-watcher)
    (run-jetty handler {:port port})))

