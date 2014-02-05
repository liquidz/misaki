(ns misaki.setup-test
  (:require
    [conjure.core :refer :all]
    [midje.sweet  :refer :all]
    [misaki.setup :refer :all]))

(def sample-extensions
  (list #(assoc % :a 1)
        #(assoc % :b 2)))

(fact "run-setup-extensions should work fine."
  (stubbing [get-setup-extensions sample-extensions]
    (run-setup-extensions {}) => {:a 1 :b 2}
    (run-setup-extensions {:c 3}) => {:a 1 :b 2 :c 3}))

