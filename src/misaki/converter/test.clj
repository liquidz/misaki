(ns misaki.converter.test
  (:require
    [clojure.string :as str]))

(defn -types
  []
  (list :txt))

(defn -config
  [edn]
  (assoc edn
         :converter "test"))

(defn -run
  [edn]
  (assoc edn
         :a (inc (:a edn))))

