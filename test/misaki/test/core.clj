(ns misaki.test.core
  (:use [misaki core template config server]
        misaki.test.common
        [hiccup.core :only [html]])
  (:use [clojure.test])
  (:require [clojure.java.io :as io]))


;;; default site data
(deftest* default-site-data-test
  (let [file (template-name->file "site.html.clj")]
    (is (= "<p>default title</p>" (html (generate-html file))))))

;;; format
(deftest* template-format-test
  (are [x y] (= x (:format (meta (generate-html (template-name->file y)))))
    "html5" "no_format.html.clj"
    "xhtml" "with_format.html.clj"
    "html4" "with_layout_format.html.clj"))

;;; generate
(deftest* generate-html-test
  (is (= "<head><title>gen test</title></head><body><h1>gen test</h1><p>world</p></body>"
         (-> "gen_test.html.clj" template-name->file generate-html html))))

(deftest* compile-template-test
  (let [tmpl (io/file (str *template-dir* "gen_test.html.clj"))
        res (compile-template tmpl)
        file (io/file (str *public-dir* (make-template-output-filename tmpl)))]
    (is res)
    (is (.exists file))
    (.delete file)))

(deftest* html-function-template-test
  (is (= "<p class=\"paragraph\"><a href=\"link.html\">link</a></p>"
         (-> "html.test.html.clj" template-name->file generate-html html))))

;; SERVER
;;;(deftest* compile-cljs-test
;;;  (do-compile (io/file (str *template-dir* "cljs/core.cljs")))
;;;  (let [js-file (io/file (str *public-dir* "js/main.js"))]
;;;    (is (.exists js-file))
;;;    (.delete js-file)
;;;    (.. js-file getParentFile delete)))

(deftest* server-test
  (testing "compile with post"
    (do-compile (io/file (str *post-dir* "2011.01.01-foo.html.clj")))
    (let [post-file (io/file (str *public-dir* "2011-01/foo.html"))
          test-file (io/file (str *public-dir* "gen_test.html"))]
      (is (.exists post-file))
      (.delete post-file)
      (is (.exists test-file))
      (.delete test-file))))

