(ns misaki.util.seq-test
  (:require
    [midje.sweet     :refer :all]
    [misaki.util.seq :refer :all]))

(fact "neighbors should work fine."
  (neighbors #(= 1 %) [1 2 3]) => [nil 2]
  (neighbors #(= 2 %) [1 2 3]) => [1   3]
  (neighbors #(= 3 %) [1 2 3]) => [2   nil]
  (neighbors #(= 4 %) [1 2 3]) => [nil nil]
  (neighbors #(= 1 %) [])      => [nil nil])
