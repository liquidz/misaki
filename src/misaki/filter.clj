(ns misaki.filter
  (:require
    [misaki.config :refer [*config*]]
    [misaki.loader :refer [load-functions]]
    [clojure.string :as str]))

(def ^:dynamic *filter-ns-prefix*
  "misaki.filter")

(defn- load-filter
  [filter-name]
  (load-functions *filter-ns-prefix* filter-name))

(defn- run-filters
  [filter-key edn]
  (let [filter-names (-> *config* :filters filter-key)
        filters (map (comp :run load-filter) filter-names)]
    (reduce
      (fn [res f] (f res))
      edn
      filters)))

(def run-before-filters (partial run-filters :before))
(def run-after-filters (partial run-filters :after))
