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
      (load-config) => (update-in DEFAULT_CONFIG [:setup] #(conj % :for-test))))
  (fact ""
    (stubbing [slurp "{:route {:x [:y :z]}}"]
              (load-config) => (update-in DEFAULT_CONFIG [:route] #(assoc % :x [:y :z]))
              )
    )
  )

(fact "uniq-conj should work fine."
  (uniq-conj [1 2] [3]) => [1 2 3]
  (uniq-conj [1 2] [2 3]) => [1 2 3]
  (uniq-conj [1 2] [1 2]) => [1 2]
  (uniq-conj [1 2] [1 2 3]) => [1 2 3])

(fact "merge-config should work fine."
  (let [m {:a [:b] :s "s" :m {:x 1}}]
    (merge-config m {:a [:b]}) => m
    (merge-config m {:a [:c]}) => (assoc m :a [:b :c])
    (merge-config m {:a [:c :d]}) => (assoc m :a [:b :c :d]);{:a [:b :c :d] :s "s"}
    (merge-config m {:a [:b :c]}) => (assoc m :a [:b :c]);{:a [:b :c] :s "s"}
    (merge-config m {:x [:y]}) => (assoc m :x [:y]);{:a [:b] :x [:y] :s "s"}
    (merge-config m {:s "x"}) => (assoc m :s "x");{:a [:b] :s "x"}
    (merge-config m {:m {:y 2}}) => (assoc m :m {:x 1 :y 2})
    )
  )

(fact "parse-config-args should work fine."
  (parse-config-args :foo)       => {:name :foo :args []}
  (parse-config-args [:foo])     => {:name :foo :args []}
  (parse-config-args [:foo 1 2]) => {:name :foo :args [1 2]})
