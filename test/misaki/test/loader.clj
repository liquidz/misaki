(ns misaki.test.new_loader
  (:use [misaki config loader]
        misaki.test.common
        [hiccup.core :only [html]])
  (:use [clojure.test])
  (:require [clojure.java.io :as io]))

(deftest* parse-tag-test
  (let [tags (parse-tag "aa bb")]
    (are [x y] (= x y)
      "aa" (-> tags first :name)
      "bb" (-> tags second :name)
      "/tag/aa.html" (-> tags first :url)
      "/tag/bb.html" (-> tags second :url))))

(deftest* parse-template-option-test
  (testing "parse template option from java.io.File"
    (let [file   (io/file (str *template-dir* "loader.test01.html.clj"))
          option (parse-template-option file)]
      (are [x y] (= x y)
        "hello" (:title option)
        "bar"   (:foo option)
        nil     (:dummy option))))

  (testing "parse template option from String"
    (let [datas [";@layout hello\n;@title wor ld\n@dummy:xxx"
                 "; @layout hello\n;@title wor ld\n@dummy:xxx"
                 "; @layout  hello\n;@title wor ld\n@dummy:xxx"
                 "; @layout   hello\n;@title wor ld\n@dummy:xxx"
                 ";; @layout   hello\n;@title wor ld\n@dummy:xxx"]]
      (doseq [option (map parse-template-option datas)]
        (are [x y] (= x y)
          "hello"  (:layout option)
          "wor ld" (:title option)
          nil      (:dummy option))))))

(deftest* read-template-sexp-test
  (testing "read template s-exp from java.io.File"
    (let [file (io/file (str *template-dir* "loader.test01.html.clj"))
          sexp (read-template-sexp file)]
      (is '(123 "world" [:p "seq"])
          sexp)))

  (testing "read template s-exp from String"
    (let [data "123 \"world\" [:p \"seq\"]"
          sexp (read-template-sexp data)]
      (is '(123 "world" [:p "seq"])
          sexp))))

(deftest* parse-template-test
  (let [file (io/file (str *template-dir* "loader.test_son.html.clj"))
        res  (load-template file)]
    (are [x y] (= x y)
      3 (count res)

      '(list "hello") (nth res 2)
      '(list [:p content]) (nth res 1)
      '(list [:div content]) (nth res 0)

      "son" (-> (nth res 2) meta :title)
      "child" (-> (nth res 1) meta :title)
      "parent" (-> (nth res 0) meta :title)

      "loader.test_child" (-> (nth res 2) meta :layout)
      "loader.test_parent" (-> (nth res 1) meta :layout)
      nil (-> (nth res 0) meta :layout))))

