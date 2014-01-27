(ns misaki.loader-test
  (:require
    [midje.sweet  :refer :all]
    [misaki.loader :refer :all]))

(defn  f [] 1)
(defn  g [] 2)
(defn- x [] 3)

(fact "load-functions should work fine."
  (let [fns (load-functions "misaki" "loader-test")]
    (contains? fns :f) => true
    (contains? fns :g) => true
    (contains? fns :x) => false
    (contains? fns :y) => false))

