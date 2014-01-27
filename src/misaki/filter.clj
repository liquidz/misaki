(ns misaki.filter
  (:require
    [misaki.config :refer [*config*]]
    [misaki.loader :refer [load-functions-memo]]
    [clojure.string :as str]))

(def ^:dynamic *filter-ns-prefix*
  "misaki.filter")

(defn- load-filter
  [filter-name]
  (load-functions-memo *filter-ns-prefix* filter-name))

(defn- run-filters
  [filter-key edn]

  (let [filter-names (-> *config* :filters filter-key)
        filters (map #(get (load-filter %) '-main nil) filter-names)
        filters (filter (comp not nil?) filters)]
    (reduce
      (fn [res f] (f res))
      edn
      filters)))

(def run-before-filters (partial run-filters :before))
(def run-after-filters (partial run-filters :after))
