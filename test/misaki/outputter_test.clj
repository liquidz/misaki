(ns misaki.outputter-test
  (:require
    [misaki.outputter :refer :all]
    [midje.sweet      :refer :all]
    [conjure.core     :refer :all]))

(def ^{:private true}
  sample-data (atom {}))
(def ^{:private true}
  sample-outputter (list #(reset! sample-data (assoc @sample-data :a %))
                         #(reset! sample-data (assoc @sample-data :b %))))

(fact "run-outputters should work fine."
  (stubbing [get-outputters sample-outputter]
    @sample-data => {}
    (run-outputters 1)
    @sample-data => {:a 1 :b 1}))
