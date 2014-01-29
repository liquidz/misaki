(ns misaki.config
  (:require
    [misaki.loader :refer [load-functions]]
    [clojure.tools.reader.edn :as edn]
    [clojure.string :as str]))

(def ^:dynamic *configure-ns-prefix*
  "misaki.configure")
(def ^:dynamic *config-filename* "_config.clj")
(def ^:dynamic *config* {})

(def DEFAULT_CONFIG
  {:configures []
   :inputters  [:watch-directory]
   :outputters [:text :file]
   :filters    {:after [:delete-last-ext]}})

(defn- load-configure
  [configure-name]
  (load-functions *configure-ns-prefix* configure-name))

(defn load-config
  []
  (->> *config-filename*
       slurp
       edn/read-string
       (merge DEFAULT_CONFIG)))

(defn run-configures
  [config]
  (let [configure-names (-> config :configures)
        configures (map (comp :run load-configure) configure-names)]

    (reduce
      (fn [res f] (f res))
      config
      configures)))
