(ns misaki.test.template
  (:use [misaki template config]
        [hiccup.core :only [html]]
        misaki.test.common
        clojure.test)
  (:require [clojure.java.io :as io]))

;;; parse-tag-string
(deftest parse-tag-string-test
  (are [x y] (= x y)
    ()         (parse-tag-string nil)
    ()         (parse-tag-string "")
    ()         (parse-tag-string " ,  ,")
    '("a")     (map :name (parse-tag-string "a"))
    '("a" "b") (map :name (parse-tag-string "a, b"))
    '("a" "b") (map :name (parse-tag-string "a  b"))))

(deftest* load-template-test
  ;; single template
  (testing "Load single template"
    (let [f (load-template (str *template-dir* "template.test.html.clj"))]
      (are [x y] (= x y)
        "<p>default title</p>"
        (html (apply-template f '("")))

        "<p>a</p>"
        (html (apply-template f (with-meta '("") {:title "a"}))))))

  (testing "Load layouted template"
    (let [f (load-template (str *template-dir* "template.test_child.html.clj"))]
      (are [x y] (= x y)
        "<div><p>default title</p><p>11</p><p>true</p></div>"
        (html (apply-template f '("")))

        "<div><p>a</p><p>11</p><p>true</p></div>"
        (html (apply-template f (with-meta '("") {:title "a"}))))))

  (testing "Load layouted template with NOT allow-layout flag"
    (let [f (load-template (str *template-dir* "template.test_child.html.clj") false)]
      (are [x y] (= x y)
        "<p>default title</p><p>11</p><p>true</p>"
        (html (apply-template f '("")))

        "<p>a</p><p>11</p><p>true</p>"
        (html (apply-template f (with-meta '("") {:title "a"})))))))

