(ns misaki.filter
  (:require
    [misaki.config :refer [*config*]]
    [misaki.loader :refer [load-functions]]))

(def ^:dynamic *filter-ns-prefix*
  "misaki.filter")

(defn- load-filter
  [filter-name]
  (load-functions *filter-ns-prefix* filter-name))

(defn apply-filters
  ([edn] (apply-filters :before edn))
  ([filter-key edn]
   (let [filter-names (-> *config* :filters filter-key)
         filters (map (comp :-main load-filter) filter-names)]
     (reduce
       (fn [res f] (f res))
       edn
       filters))))

(def apply-before-filters (partial apply-filters :before))
(def apply-after-filters (partial apply-filters :after))

