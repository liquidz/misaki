(ns misaki.config
  "Configuration manager library."
  (:require
    [misaki.loader            :refer [load-functions]]
    [clojure.tools.reader.edn :as edn]
    [clojure.string           :as str]))

(def ^{:dynamic true :doc "Default configuration filename."}
  *config-filename* "_config.clj")
(def ^{:dynamic true :doc "Current configration map."}
  *config* {})

(def ^{:doc "Default configuration map."}
  DEFAULT_CONFIG
  {;:configurators []
   ;:input     [:watch-directory]
   ;:output    [:text :file]
   ;:filters       {:after [:remove-last-ext]}
   ;:rate          50

   :setup  [:welcome]
   :input  []
   :output [:print-errors]
   :route {}
   :rate   50
   })

(defn uniq-conj
  [col1 col2]
  (let [diff (remove (set col1) col2)]
    (if (seq diff)
      (apply conj col1 diff)
      col1)))

(defn merge-config
  [base m]
  (reduce
    (fn [res [k v]]
      (update-in res [k]
                 #(if (sequential? %)
                    (uniq-conj (or % ()) v)
                    v)))
    base
    m))

(defn load-config
  "Load misaki's config file from *config-filename*."
  []
  (->> *config-filename*
       slurp
       edn/read-string
       (merge-config DEFAULT_CONFIG)))


