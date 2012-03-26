(ns one-hyde.test.core
  (:use [one-hyde core transform config]
        [hiccup.core :only [html]])
  (:use [clojure.test])
  (:require [clojure.java.io :as io]))

;;; LAYOUT
(defmacro with-test-dir [& body]
  `(binding [*base-dir* "./test/"]
     (with-config ~@body)))

(deftest get-layout-test
  (with-test-dir
    (testing "single layout"
      (let [f (get-layout "test1")]
        (is (= "<p>a</p><p>bc</p>"
               (html (f (with-meta '("b" "c") {:title "a"})))))))

    (testing "multiple layout"
      (let [f (get-layout "test2")]
        (is (= "<head><title>a</title></head><body><p>b</p></body>"
               (html (f (with-meta '("b") {:title "a"})))))))))

;;; TEMPLATES
(deftest parse-template-options-test
  (let [datas [";layout:hello\n;title:world\ndummy:xxx"
               "; layout:hello\n;title:world\ndummy:xxx"
               "; layout :hello\n;title:world\ndummy:xxx"
               "; layout : hello\n;title:world\ndummy:xxx"]]
    (doseq [data datas]
      (let [option (parse-template-options data)]
        (are [x y] (= x y)
          "hello" (:layout option)
          "world" (:title option))
        (is (not (contains? option :dummy)))))))

;;; TRANSFORM
(deftest transform-test
  (binding [*transformers* (atom [inc #(* 2 %)])]
    (is (= 4 (transform 1)))
    (add-transformer! #(* 3 %))
    (is (= 12 (transform 1))))

  (let [f (transform "(apply + (vals site))")]
    ; f => (fn [site & contents] (list (apply + site)))
    (is (= '(6) (f (with-meta '("") {:a 1 :b 2 :c 3}))))))


;;; format
(deftest template-format-test
  (with-test-dir
    (let [m (meta (generate-html "no_format.html.clj"))]
      (is (= "html5" (:format m))))

    (let [m (meta (generate-html "with_format.html.clj"))]
      (is (= "xhtml" (:format m))))

    (let [m (meta (generate-html "with_layout_format.html.clj"))]
    (is (= "html4" (:format m))))))

;;; generate
(deftest generate-html-test
  (with-test-dir
    (= "<html><head><title>hello</title></head><body><h1>hello</h1><p>world</p></body></html>"
       (html (generate-html "gen_test.html.clj")))))

(deftest compile-template-test
  (with-test-dir
    (let [tmpl "gen_test.html.clj"
          res (compile-template tmpl)
          file (io/file (str *public-dir* (make-output-filename tmpl)))]
      (is res)
      (is (.exists file))
      (.delete file))))
