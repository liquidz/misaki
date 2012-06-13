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

;;; parse-template-option
(deftest* parse-template-option-test
  (testing "Parse template option from String"
    (let [datas [";@layout hello\n;@title wor ld\n@dummy:xxx"
                 "; @layout hello\n;@title wor ld\n@dummy:xxx"
                 "; @layout  hello\n;@title wor ld\n@dummy:xxx"
                 "; @layout   hello\n;@title wor ld\n@dummy:xxx"
                 ";; @layout   hello\n;@title wor ld\n@dummy:xxx"]]
      (doseq [data datas]
        (let [option (parse-template-option data)]
          (are [x y] (= x y)
            "hello"  (:layout option)
            "wor ld" (:title option))
          (is (not (contains? option :dummy)))))))

  (testing "Parse template option from File"
    (let [file   (io/file (str *template-dir* "index.html.clj"))
          option (parse-template-option file)]
      (are [x y] (= x y)
        "index"   (:title option)
        "hello"   (:test option)
        "default" (:layout option)
        nil       (:dummy option)))))

;;; apply-template
(deftest apply-template-test
  (let [f    (with-meta (partial map inc) {:a "a"})
        data (with-meta '(1 2 3) {:b "b"})
        res  (apply-template f data)]
    (are [x y] (= x y)
      '(2 3 4) res
      "a"      (:a (meta res))
      "b"      (:b (meta res)))))

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

