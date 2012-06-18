(ns misaki.util.sequence
  "Sequence utility"
  (:use [clj-time.core :only [after? before?]]))

; =sort-by-date
(defn sort-by-date
  "Sort post list with org.joda.time.DateTime"
  ([posts]
   (sort-by-date :desc posts))
  ([order posts]
   (let [f? (if (= :inc order) before? after?)]
     (sort #(f? (:date %) (:date %2)) posts))))

; =sort-alphabetically
(defn sort-alphabetically
  "Sort list alphabetically."
  ([ls]   (sort-alphabetically :inc identity ls))
  ([f ls] (sort-alphabetically :inc f ls))
  ([order f ls]
   (let [f? (if (= :desc order) pos? neg?)]
     (sort #(f? (compare (f %) (f %2))) ls))))

