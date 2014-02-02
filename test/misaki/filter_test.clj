(ns misaki.filter-test
  (:require
    [misaki.filter :refer :all]
    [conjure.core  :refer :all]
    [midje.sweet   :refer :all]))

(def ^{:private true}
  sample-filters (list #(assoc % :a 1)
                       #(assoc % :b 2)))

(fact "apply-filters should work fine."
  (stubbing [get-filters sample-filters]
    (apply-filters {})     => {:a 1 :b 2}
    (apply-filters {:c 3}) => {:a 1 :b 2 :c 3}))

