(ns misaki.test.sequence
  (:use [misaki core]
        [misaki.util sequence]
        [clj-time.core :only [date-time]]
        misaki.test.common
        clojure.test)
  (:require [clojure.java.io :as io]))

;;; sort-by-date
(deftest* sort-by-date-test
  (testing "sort date desc"
    (let [[p1 p2 p3] (sort-by-date (get-posts))]
      (are [x y] (= x y)
        ; title
        "bar" (:title p1)
        "foo" (:title p2)
        "baz" (:title p3)
        ; date
        (date-time 2022 2 2) (:date p1)
        (date-time 2011 1 1) (:date p2)
        (date-time 2000 1 1) (:date p3))))

  (testing "sort date inc"
    (let [[p1 p2 p3] (sort-by-date :inc (get-posts))]
      (are [x y] (= x y)
        ; title
        "baz" (:title p1)
        "foo" (:title p2)
        "bar" (:title p3)
        ; date
        (date-time 2000 1 1) (:date p1)
        (date-time 2011 1 1) (:date p2)
        (date-time 2022 2 2) (:date p3)))))

;;; sort-alphabetically
(deftest sort-alphabetically-test
  (testing "sort list inc"
    (let [[a b c] (sort-alphabetically '("b" "a" "c"))]
      (are [x y] (= x y)
        "a" a
        "b" b
        "c" c)))

  (testing "sort map"
    (let [[a b c] (sort-alphabetically :text (list {:num 2 :text "b"}
                                                   {:num 1 :text "a"}
                                                   {:num 3 :text "c"}))]
      (are [x y] (= x y)
        "a" (:text a)
        "b" (:text b)
        "c" (:text c)
        1   (:num a)
        2   (:num b)
        3   (:num c))))

  (testing "sort list desc"
    (let [[a b c] (sort-alphabetically :desc identity '("b" "a" "c"))]
      (are [x y] (= x y)
        "c" a
        "b" b
        "a" c))))
