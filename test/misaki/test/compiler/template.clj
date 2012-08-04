(ns misaki.test.compiler.template
  (:use [misaki.compiler.default template config]
        [hiccup.core :only [html]]
        misaki.test.compiler.common
        clojure.test)
  (:require
    [clojure.string :as str]
    [clojure.java.io :as io]))

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

;;; load-template-data
(deftest* load-template-data-test
  (letfn [(del-crln [s] (str/replace s #"[\r\n]" ""))]
    (testing "Single template"
      (let [file (io/file (str *layout-dir* "div.clj"))
            [data :as res] (load-template-data file)]
        (are [x y] (= x y)
          true (seq? res)
          1    (count res)
          true (vector? data)
          2    (count data)
          "; @title div title[:div contents]" (-> data first del-crln)
          "div title" (-> data second :title))))

    (testing "Template with layout"
      (let [file (io/file (str *template-dir* "index.html.clj"))
            [parent child :as res] (load-template-data file)]
        (are [x y] (= x y)
          true (seq? res)
          2    (count res)
          ; parent
          "; @format html5(defn paragraph [x] [:p x])[:head [:title (:title site)]][:body contents]"
            (-> parent first del-crln)
          "html5" (-> parent second :format)
          ; child
          "; @layout default; @title  index; @test   hello; dummy   dummy[:h1 (:title site)](paragraph \"world\")"
            (-> child first del-crln)
          "index" (-> child second :title))))))

;;; load-template
(deftest* load-template-test
  (testing "Load single template"
    (let [f (load-template (io/file (str *template-dir* "single.html.clj")))]
      (are [x y] (= x y)
        "<h1>single</h1>"
        (html (apply-template f '("")))

        "<h1>dummy</h1>"
        (html (apply-template f (with-meta '("") {:title "dummy"}))))))

  (testing "Load layouted template"
    (let [f (load-template (io/file (str *template-dir* "index.html.clj")))]
      (are [x y] (= x y)
        "<head><title>index</title></head><body><h1>index</h1><p>world</p></body>"
        (html (apply-template f '("")))

        "<head><title>dummy</title></head><body><h1>dummy</h1><p>world</p></body>"
        (html (apply-template f (with-meta '("") {:title "dummy"}))))))

  (testing "Load layouted template with NOT allow-layout flag"
    (let [f (load-template (io/file (str *template-dir* "index.html.clj")) false)]
      (are [x y] (= x y)
        "<h1>index</h1><p>world</p>"
        (html (apply-template f '("")))

        "<h1>dummy</h1><p>world</p>"
        (html (apply-template f (with-meta '("") {:title "dummy"})))))))

