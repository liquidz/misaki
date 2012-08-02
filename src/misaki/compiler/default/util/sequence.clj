(ns misaki.compiler.default.util.sequence
  "Sequence utility"
  (:use [clj-time.core :only [after? before?]]))

; =sort-by-date
(defn sort-by-date
  "Sort post list with org.joda.time.DateTime"
  ([posts]
   (sort-by-date :desc posts))
  ([order-key posts]
   (let [f? (if (= :inc order-key) before? after?)]
     (sort #(f? (:date %) (:date %2)) posts))))

; =sort-alphabetically
(defn sort-alphabetically
  "Sort list alphabetically."
  ([ls]   (sort-alphabetically :inc identity ls))
  ([f ls] (sort-alphabetically :inc f ls))
  ([order-key f ls]
   (let [f? (if (= :desc order-key) pos? neg?)]
     (sort #(f? (compare (f %) (f %2))) ls))))


; =find-first
(defn find-first
  "Returns the first matched entry for pred, or nil if not matched."
  [pred coll]
  {:pre [(or (fn? pred) (keyword? pred))
         (sequential? coll)]}
  (loop [[x & rst :as ls] coll]
    (cond
      (empty? ls) nil
      (pred x)    x
      :else       (recur rst))))
