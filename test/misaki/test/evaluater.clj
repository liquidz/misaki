(ns misaki.test.evaluater
  (:use [misaki config evaluater loader]
        misaki.test.common
        [hiccup.core :only [html]])
  (:use [clojure.test])
  (:require [clojure.java.io :as io]))

(deftest* def?-test
  (are [x y] (= x (def? y))
    true  '(defn x [] nil)
    true  '(def x 10)
    false '[defn x [] nil]
    false '(a def x 10)))

(deftest* wrap-as-function-test
  (let [s '(list "hello" (def x 1) 123) f (wrap-as-function s)]
    (is (= 'do (first f)))
    (is (= '(def x 1) (second f)))
    (is (= 'clojure.core/fn (first (nth f 2))))))

(deftest* evaluate-template-test
  (testing "evaluate single template"
    (let [file (io/file (str *template-dir* "loader.test01.html.clj"))
          tmpl (load-template file)
          f    (evaluate-template tmpl)]
      (are [x y] (= x y)
        "hello" (-> f meta :title)
        "bar" (-> f meta :foo)
        (list 123 "world" [:p "seq"]) (f '()))))

  (testing "evalute multiple templates"
    (let [file (io/file (str *template-dir* "loader.test_son.html.clj"))
          tmpl (load-template file)
          f    (evaluate-template tmpl)
          f2   (evaluate-template tmpl :allow-layout? false)]
      (are [x y] (= x y)
        "true" (-> f meta :son)
        "true" (-> f meta :child)
        "true" (-> f meta :parent)
        "son"  (-> f meta :title)
        "loader.test_child" (-> f meta :layout)
        "<div><p>hello</p></div>" (html (f '())))

      (are [x y] (= x y)
        "son"  (-> f2 meta :title)
        "loader.test_child" (-> f2 meta :layout)
        "hello" (html (f2 '())))))

  (testing "evalute multiple templates with function"
    (let [file (io/file (str *template-dir* "loader.test_fn.html.clj"))
          tmpl (load-template file)
          f    (evaluate-template tmpl)
          f2   (evaluate-template tmpl :allow-layout? false)]

      (are [x y] (= x y)
        "true" (-> f meta :son)
        "true" (-> f meta :child)
        "true" (-> f meta :parent)
        "son"  (-> f meta :title)
        "loader.test_child" (-> f meta :layout)
        "<div><p>11</p></div>" (html (f '())))

      (are [x y] (= x y)
        "son"  (-> f2 meta :title)
        "loader.test_child" (-> f2 meta :layout)
        "11" (html (f2 '()))))))
