(ns misaki.output-test
  (:require
    [misaki.output :refer :all]
    [midje.sweet   :refer :all]
    [conjure.core  :refer :all]))

(def ^{:private true}
  sample-data (atom {}))
(def ^{:private true}
  sample-outputs (list #(reset! sample-data (assoc @sample-data :a %))
                       #(reset! sample-data (assoc @sample-data :b %))))

(fact "run-output-extensions should work fine."
  (stubbing [get-output-extensions sample-outputs]
    @sample-data => {}
    (run-output-extensions 1)
    @sample-data => {:a 1 :b 1}))
