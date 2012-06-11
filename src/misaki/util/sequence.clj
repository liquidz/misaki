(ns misaki.util.sequence
  "misaki: sequence utility"
  (:use [clj-time.core :only [after?]]))

; =sort-by-date
(defn sort-by-date
  "Sort post list with org.joda.time.DateTime"
  [posts]
  (sort #(after? (:date %) (:date %2)) posts))

; =sort-alphabetically
(defn sort-alphabetically
  "Sort list alphabetically."
  ([ls]   (sort-alphabetically identity ls))
  ([f ls] (sort #(neg? (.compareTo (f %) (f %2))) ls)))


(defn map-value [f m]
  (into {} (for [[k v] m]
             [k (if (map? v) (map-value f v) (f v))])))
