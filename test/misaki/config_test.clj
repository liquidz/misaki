(ns misaki.config-test
  (:require
    [conjure.core  :refer :all]
    [midje.sweet   :refer :all]
    [misaki.config :refer :all]))

;(facts "load-user-config should work fine."
;  (fact "default value"
;    (stubbing [slurp "{}"]
;      (load-config) => DEFAULT_CONFIG))
;
;  (fact "overwrite default value"
;    (stubbing [slurp "{:configurators [:for-test]}"]
;      (load-config) => (assoc DEFAULT_CONFIG :configurators [:for-test]))))

(facts "merge-config should work fine."
  (fact "+config"
    (let [m {:+ {:a [:b] :s "s"}}]
      (merge-config m {:+ {:a [:c]}}) => {:+ {:a [:b :c] :s "s"}}
      (merge-config m {:+ {:a [:b]}}) => {:+ {:a [:b] :s "s"}}
      (merge-config m {:+ {:x [:y]}}) => {:+ {:a [:b] :x [:y] :s "s"}}
      (merge-config m {:+ {:s "t"}})  => {:+ {:a [:b] :s "t"}}))

  (fact "-config"
    (let [m {:+ {:a [:b :c] :s "s"}}]
      (merge-config m {:- {:a [:b]}})    => {:+ {:a [:c] :s "s"}}
      (merge-config m {:- {:a [:b :c]}}) => {:+ {:a [] :s "s"}}
      (merge-config m {:- {:a [:x]}})    => {:+ {:a [:b :c] :s "s"}}
      (merge-config m {:- {:s nil}})     => {:+ {:a [:b :c] :s nil}})))
