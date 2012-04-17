(ns misaki.test.core
  (:use [misaki core template transform config server]
        misaki.test.common
        [hiccup.core :only [html]])
  (:use [clojure.test])
  (:require [clojure.java.io :as io]))


;;; default site data
(deftest* default-site-data-test
  (is (= "<p>default title</p>" (html (generate-html "site.html.clj")))))

;;; TRANSFORM
(deftest transform-test
  (binding [*transformers* (atom [inc #(* 2 %)])]
    (is (= 4 (transform 1)))
    (add-transformer! #(* 3 %))
    (is (= 12 (transform 1))))

  (let [f (transform "(apply + (vals site))")]
    ; f => (fn [site & contents] (list (apply + site)))
    (is (= '(6) (apply-template f (with-meta '("") {:a 1 :b 2 :c 3}))))))


;;; format
(deftest* template-format-test
  (are [x y] (= x y)
    "html5" (-> "no_format.html.clj" generate-html meta :format)
    "xhtml" (-> "with_format.html.clj" generate-html meta :format)
    "html4" (-> "with_layout_format.html.clj" generate-html meta :format)))

;;; generate
(deftest* generate-html-test
  (= "<html><head><title>hello</title></head><body><h1>hello</h1><p>world</p></body></html>"
     (html (generate-html "gen_test.html.clj"))))

(deftest* compile-template-test
  (let [tmpl "gen_test.html.clj"
        res (compile-template tmpl)
        file (io/file (str *public-dir* (make-template-output-filename tmpl)))]
    (is res)
    (is (.exists file))
    (.delete file)))

(deftest* html-function-template-test
  (is (= "<p class=\"paragraph\"><a href=\"link.html\">link</a></p>"
         (html (generate-html "html.test.html.clj")))))


;;; SERVER
(deftest* server-test
  (testing "compile with post"
    (do-compile (io/file (str *post-dir* "2011.01.01-foo.html.clj")))
    (let [post-file (io/file (str *public-dir* "2011-01/foo.html"))
          test-file (io/file (str *public-dir* "gen_test.html"))]
      (is (.exists post-file))
      (.delete post-file)
      (is (.exists test-file))
      (.delete test-file))))
