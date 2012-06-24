(ns misaki.test.evaluator
  (:use [misaki config evaluator template]
        misaki.test.common
        [hiccup.core :only [html]])
  (:use [clojure.test])
  (:require [clojure.java.io :as io]))

;;; def?
(deftest* def?-test
  (are [x y] (= x (def? y))
    true  '(defn x [] nil)
    true  '(def x 10)
    false '[defn x [] nil]
    false '(a def x 10)))

;;; wrap-as-function
(deftest* wrap-as-function-test
  (let [s '(list "hello" (def a 1) 123) f (wrap-as-function s)]
    (are [x y] (= x y)
      (first f) 'do
      (first (second f)) 'clojure.core/use
      (nth f 2) '(def a 1)
      (first (nth f 3)) 'clojure.core/fn)))

;;; evaluate
(deftest evaluate-test
  (testing "default evaluate"
    (let [f (evaluate "(apply + (vals site))")]
      ; f => (fn [site & contents] (list (apply + site)))
      (is (= '(6) (apply-template f (with-meta '("") {:a 1 :b 2 :c 3}))))))

  (testing "custom evaluate"
    (binding [*eval-functions* [#(str % "!") #(str % "?")]]
      (is (= "hello!?" (evaluate "hello"))))))
