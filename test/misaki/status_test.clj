(ns misaki.status-test
  (:require
    [midje.sweet   :refer :all]
    [misaki.status :refer :all]))

(fact "add-status should work fine."
  (add-status {} 1) => {:status #{1}}
  (add-status {:status #{1}} 1) => {:status #{1}}
  (add-status {:status #{1}} 2) => {:status #{1 2}})

(fact "status-contains? should work fine."
  (status-contains? {:status #{1}} 1) => true
  (status-contains? {:status #{1}} 2) => false)

(fact "building-all? should work fine."
  (building-all? {:status #{BUILD_ALL_STATUS}}) => true
  (building-all? {:status #{}})                 => false)
