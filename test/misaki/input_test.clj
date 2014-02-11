(ns misaki.input-test
  (:require
    [misaki.input    :refer :all]
    [midje.sweet     :refer :all]
    [conjure.core    :refer :all])
  (:refer-clojure :exclude [empty?]))


(fact "add! and get! should work fine."
  (add! {:a 1}) => [{:a 1}]
  (add! {:b 2}) => [{:a 1} {:b 2}]
  (get!)        => {:a 1}
  (get!)        => {:b 2}
  (get!)        => nil)

(fact "empty? should work fine."
  (empty?)                    => true
  (do (add! {:a 1}) (empty?)) => false
  (do (get!) (empty?))        => true)


(def ^{:private true}
  sample-inputs (list (fn [_] (list {:a 1}))
                      (fn [_] (list {:b 2} {:c 3}))))

(fact "get-all should work fine."
  (stubbing [get-input-extensions sample-inputs]
    (get-all) => [{:a 1} {:b 2} {:c 3}]))
