(ns misaki.setup.local-server
  "Setup extension for running local server."
  (:require
    [compojure.core     :refer [routes]]
    [compojure.route    :refer [files]]
    [ring.adapter.jetty :refer [run-jetty]]))

(def ^{:private true} DEFAULT_PUBLIC_DIR ".")
(def ^{:private true} DEFAULT_LOCAL_SERVER_CONF {:url-base "/" :port 8080})

(defn local-server-conf
  "Configuration for local server."
  [conf]
  (let [public-dir   (:public-dir conf DEFAULT_PUBLIC_DIR)
        local-server (:local-server conf {})]
    (assoc conf
           :public-dir public-dir
           :local-server (merge DEFAULT_LOCAL_SERVER_CONF local-server))))

(defn -main
  "Run local server."
  [conf]
  (let [conf (-> conf :+ local-server-conf)]
    (.start
      (Thread.
        #(run-jetty
           (routes (files (-> conf :local-server :url-base)
                          {:root (:public-dir conf)}))
           {:port (-> conf :local-server :port)}))))
  conf)

