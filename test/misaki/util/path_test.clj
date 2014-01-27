(ns misaki.util.path-test
  (:require
    [midje.sweet  :refer :all]
    [misaki.util.path :refer :all]))


(fact "path/join should work fine."
  (join "a" "b") => (str "a" separator "b"))
