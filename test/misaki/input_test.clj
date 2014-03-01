(ns misaki.input-test
  (:require
    [misaki.config :refer [*config*]]
    [misaki.input  :refer :all]
    [midje.sweet   :refer :all]
    [conjure.core  :refer :all])
  (:refer-clojure :exclude [empty?]))

(fact "clear! shoud work fine."
  (clear!)
  (empty?) => true
  (add! {:type 1})
  (empty?) => false
  (clear!)
  (empty?) => true
  )

(fact "add! and get! should work fine."
  (let [r1 {:type 1}
        r2 {:type 2}]
    (clear!)
    (add! r1) => [r1]
    (add! r2) => [r1 r2]
    (get!)    => r1
    (get!)    => r2
    (get!)    => nil)
    )

(fact "empty? should work fine."
  (clear!)
  (empty?)                               => true
  (do (add! {:type 1}) (empty?)) => false
  (do (get!) (empty?))                   => true)


(defn- a-list
  ([_] (a-list _ 1))
  ([_ n] (list {:a n})))
(defn- bc-list
  ([_] (bc-list _ 2 3))
  ([_ n] (bc-list _ n 3))
  ([_ n m] (list {:b n} {:c m})))

(facts "get-all should work fine."
  (stubbing [load-input-function #(first %&)]
    (fact "no args"
      (binding [*config* {:input [a-list bc-list]}]
        (get-all) => [{:a 1} {:b 2} {:c 3}]))
    (fact "with args"
      (binding [*config* {:input [(list a-list 5) (list bc-list 6)]}]
        (get-all) => [{:a 5} {:b 6} {:c 3}])
      (binding [*config* {:input [(list a-list 5) (list bc-list 6 7)]}]
        (get-all) => [{:a 5} {:b 6} {:c 7}]))))
