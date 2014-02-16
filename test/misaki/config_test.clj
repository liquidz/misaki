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
    (stubbing [slurp "{:setup [:for-test]}"]
      (load-config) => (assoc DEFAULT_CONFIG
                              :setup
                              (conj (:setup DEFAULT_CONFIG) :for-test)))))

(fact "uniq-conj should work fine."
  (uniq-conj [1 2] [3]) => [1 2 3]
  (uniq-conj [1 2] [2 3]) => [1 2 3]
  (uniq-conj [1 2] [1 2]) => [1 2]
  (uniq-conj [1 2] [1 2 3]) => [1 2 3])

(fact "merge-config should work fine."
  (let [m {:a [:b] :s "s"}]
    (merge-config m {:a [:b]}) => {:a [:b] :s "s"}
    (merge-config m {:a [:c]}) => {:a [:b :c] :s "s"}
    (merge-config m {:a [:c :d]}) => {:a [:b :c :d] :s "s"}
    (merge-config m {:a [:b :c]}) => {:a [:b :c] :s "s"}
    (merge-config m {:x [:y]}) => {:a [:b] :x [:y] :s "s"}
    (merge-config m {:s "x"}) => {:a [:b] :s "x"}
    )
  )

(fact "parse-config-args should work fine."
  (parse-config-args :foo)       => {:name :foo :args []}
  (parse-config-args [:foo])     => {:name :foo :args []}
  (parse-config-args [:foo 1 2]) => {:name :foo :args [1 2]})
