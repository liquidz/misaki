(ns misaki2.converter.test
  (:require
    [clojure.string :as str]))

(defn -types
  []
  (list :txt))

(defn -config
  [edn]
  (assoc edn
         :converter "test"))

(defn -main
  [edn]
  (assoc edn
         :a (inc (:a edn))))

