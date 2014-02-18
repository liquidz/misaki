(ns misaki.output-test
  (:require
    [misaki.output :refer :all]
    [midje.sweet   :refer :all]
    [conjure.core  :refer :all]))

(def ^{:private true}
  tmp (atom {}))

(defn- add
  ([m] (add m :a 1))
  ([m k] (add m k 1))
  ([m k n] (reset! tmp (assoc (merge @tmp m) k n))))

(defn- inc-key
  [m k]
  (reset! tmp (assoc (merge @tmp m) k (inc (k m 0)))))

(def ^{:private true}
  outputs (list add
                (list add :b)
                (list add :c 2)))

(facts "run-output-extensions should work fine."
  (fact "hash map"
    (stubbing [load-output-functions identity]
      @tmp => {}
      (run-output-extensions {:output outputs :x 10})
      (dissoc @tmp :output) => {:a 1 :b 1 :c 2 :x 10}
      (reset! tmp {}))
    )
  (fact ""
    (stubbing [load-output-functions identity]
              @tmp => {}
      (run-output-extensions
        [{:output [[inc-key :x]] :a 1}
         {:output [[inc-key :y]] :y 10}])
              (dissoc @tmp :output) => {:a 1 :x 1 :y 11}
              )
    )
  )
