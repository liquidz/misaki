(ns misaki.filter.test)

(defn -run
  [edn]
  (assoc edn :b 10))

