(ns misaki.config-test
  (:require
    [conjure.core  :refer :all]
    [midje.sweet   :refer :all]
    [misaki.config :refer :all]))

(facts "load-config should work fine."
  (fact "default value"
    (stubbing [slurp "{}"]
      (load-config) => DEFAULT_CONFIG))

  (fact "overwrite default value"
    (stubbing [slurp "{:configurators [:for-test]}"]
      (load-config) => (assoc DEFAULT_CONFIG :configurators [:for-test]))))

(def sample-configurators
  (list #(assoc % :a 1)
        #(assoc % :b 2)))

(fact "run-configurators should work fine."
  (stubbing [load-configurators sample-configurators]
    (run-configurators {}) => {:a 1 :b 2}
    (run-configurators {:c 3}) => {:a 1 :b 2 :c 3}))
