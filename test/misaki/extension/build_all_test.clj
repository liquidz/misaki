(ns misaki.extension.build-all-test
  (:require
    [misaki.extension.build-all :refer :all]
    [misaki.core   :refer [build-all]]
    [misaki.status :refer [add-status BUILD_ALL_STATUS]]
    [conjure.core  :refer :all]
    [midje.sweet   :refer :all]))

(fact "build-all extension should work fine."
  (stubbing [build-all true]
    (-main {}) => true
    (-main (add-status {} BUILD_ALL_STATUS)) => nil))

