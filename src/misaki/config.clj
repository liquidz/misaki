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
  {:configurators []
   :input     [:watch-directory]
   :output    [:text :file]
   :filters       {:after [:remove-last-ext]}
   :rate          50}
  #_{:+ {:setup [:welcome]
         :input []
         :output []
         :filter.before []
         :filter.after  []
         :rate 50 }}
  )

(defn load-config
  "Load misaki's config file from *config-filename*."
  []
  (->> *config-filename*
       slurp
       edn/read-string
       (merge DEFAULT_CONFIG)))

;(defn load-user-config
;  "Load misaki's config file from *config-filename*."
;  []
;  (->> *config-filename*
;       slurp
;       edn/read-string))

(defn- +config
  [base m]
  (update-in
    base [:+]
    (fn [+base]
      (reduce
        (fn [res [k v]]
          (update-in
            res [k]
            #(if (sequential? %)
               (if (some (set v) %) % (apply conj (or % ()) v))
               v)))
        +base
        m))))

(defn- -config
  [base m]
  (update-in
    base [:+]
    (fn [+base]
      (reduce
        (fn [res [k v]]
          (update-in
            res [k]
            #(if (sequential? %) (remove (set v) %))))
        +base
        m))))

(defn merge-config
  [base m]
  (-> base
      (+config (:+ m))
      (-config (:- m))))

