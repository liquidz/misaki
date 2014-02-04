(ns misaki.filter
  "Filtering map data library."
  (:require
    [misaki.config :refer [*config*]]
    [misaki.loader :refer [load-functions]]))

(def ^{:dynamic true :doc "Filter's namespace prefix."}
  *filter-ns-prefix*
  "misaki.filter")

(defn get-filters
  "Load filter's public functions."
  [filter-key]
  (->> *config* filter-key
       (map (comp :-main (partial load-functions *filter-ns-prefix*)))
       (filter (comp not nil?))))

(defn apply-filters
  "Apply filter function to specified map data.

   @filter-key: `:before` or `:after`"
  ([edn] (apply-filters :filter.before edn))
  ([filter-key edn]
   (reduce #(%2 %1) edn (get-filters filter-key))))

(def ^{:doc "Alias to `#(apply-filters :before)`"}
  apply-before-filters (partial apply-filters :filter.before))
(def ^{:doc "Alias to `#(apply-filters :after)`"}
  apply-after-filters (partial apply-filters :filter.after))

