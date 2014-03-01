(ns misaki.core-test
  (:require
    [conjure.core  :refer :all]
    [midje.sweet   :refer :all]
    [misaki.core   :refer :all]
    [misaki.route  :refer [apply-route]]
    [misaki.status :refer [building-all?]]
    [misaki.input  :refer [get-all]]
    [misaki.output :refer [run-output-extensions]]))

(facts "build should work fine."
  (stubbing [apply-route identity
             run-output-extensions identity]
    (let [m   {:a 1}
          res (build m)]

      (fact "base data should be passed."
        (doseq [k (keys m)]
          (contains? res k) => true))

      (fact "transaction id should be unique."
        (contains? res :TID) => true
        (not= (:TID res) (-> m build :TID)) => true)
      )))

(facts "build-all should work fine."
  (let [res  (atom [])
        data [{:a 1} {:b 2}]]
    (stubbing [get-all data
               apply-route identity
               run-output-extensions (partial swap! res conj)]

      ;; do build-all
      (build-all)

      (fact "base data should be passed."
        (count @res) => (count data)
        (doseq [k (-> data first keys)]
          (-> @res first (contains? k)) => true)
        (doseq [k (-> data second keys)]
          (-> @res second (contains? k)) => true)
        )

      (fact "building all status should be setted."
        (doseq [res @res]
          (building-all? res) => true)
        )

      (fact "all transaction id are identical with building all resources."
        (doseq [res @res]
          (contains? res :TID) => true)
        (= (-> @res first :TID) (-> @res second :TID)) => true)
      )))
