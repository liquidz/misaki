(ns misaki.config
  (:require
    [misaki.loader :refer [load-functions]]
    [clojure.tools.reader.edn :as edn]
    [clojure.string :as str]))

(def ^:dynamic *configurator-ns-prefix*
  "misaki.configurator")
(def ^:dynamic *config-filename* "_config.clj")
(def ^:dynamic *config* {})

(def DEFAULT_CONFIG
  {:configurators []
   :inputters     [:watch-directory]
   :outputters    [:text :file]
   :filters       {:after [:delete-last-ext]}})

(defn- load-configurator
  [name]
  (load-functions *configurator-ns-prefix* name))

(defn load-config
  []
  (->> *config-filename*
       slurp
       edn/read-string
       (merge DEFAULT_CONFIG)))

(defn run-configurators
  [config]
  (let [configurator-names (-> config :configurators)
        configurators (map (comp :-main load-configurator) configurator-names)]

    (reduce
      (fn [res f] (f res))
      config
      configurators)))
