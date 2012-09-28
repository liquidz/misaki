(ns misaki.util.sequence
  "Sequence utility"
  (:use [clj-time.core :only [after? before?]]))

; =sort-by-date
(defn sort-by-date
  "Sort post list with org.joda.time.DateTime"
  ([posts]
   (sort-by-date :desc :date posts))
  ([f posts]
   (sort-by-date :desc f posts))
  ([order-key f posts]
   (let [f? (if (= :inc order-key) before? after?)]
     (sort #(f? (f %) (f %2)) posts))))

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
  ([pred coll] (find-first pred coll nil))
  ([pred coll default-value]
   {:pre [(or (fn? pred) (keyword? pred))
          (sequential? coll)]}
   (let [x (first coll)]
     (cond
       (= () coll) default-value
       (pred x)    x
       :else       (recur pred (rest coll) default-value)))))


; =some-with-default-value
(defn some-with-default-value
  "`some` function which returns specified default value if not matched."
  [pred coll default-value]
  (-> (some pred coll)
      (or default-value)))


; =get-prev-next
(defn get-prev-next
  "Get previous and next element from a sequence."
  [pred coll & {:keys [default] :or {default [nil nil]}}]
  {:pre [(fn? pred) (sequential? coll)
         (sequential? default) (= 2 (count default))]}
  (let [[prev* next*] default
        coll*         (partition 3 1 (flatten (list prev* coll next*)))
        [prev _ next] (find-first #(pred (second %)) coll* [prev* nil next*])]
    [prev next]))

