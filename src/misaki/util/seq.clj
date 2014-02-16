(ns misaki.util.seq)

(defn neighbors
  [pred ls]
  (loop [pairs (partition 3 1 (concat [nil] ls [nil]))]
    (if (seq pairs)
      (let [[left cur right] (first pairs)]
        (if (pred cur)
          [left right]
          (recur (rest pairs))))
      [nil nil])))
