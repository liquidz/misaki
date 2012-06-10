(ns misaki.test.template
  (:use [misaki template config]
        [hiccup.core :only [html]]
        misaki.test.common
        clojure.test)
  (:require [clojure.java.io :as io]))

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
    (let [file   (io/file (str *template-dir* "template.test.html.clj"))
          option (parse-template-option file)]
      (are [x y] (= x y)
        "default title" (:title option)
        "hello"         (:test option)))))
