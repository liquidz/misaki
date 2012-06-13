(ns misaki.test.core
  (:use [misaki core template config server]
        [misaki.util sequence]
        misaki.test.common
        [hiccup.core :only [html]]
        [clj-time.core :only [date-time]])
  (:use [clojure.test])
  (:require [clojure.java.io :as io]))

;;; generate-post-content
(deftest* generate-post-content-test
  (let [file1 (io/file (str *post-dir* "2000.01.01-foo.html.clj"))
        file2 (io/file (str *post-dir* "2011.01.01-foo.html.clj"))]
    (are [x y] (= x y)
      "<p>baz</p>" (generate-post-content file1)
      "<p>foo</p>" (generate-post-content file2))))

;;; get-post-data
(deftest* get-post-data-test
  (let [file (io/file (str *post-dir* "2000.01.01-foo.html.clj"))
        data (get-post-data file)]
    (are [x y] (= x y)
      "baz"   (:title data)
      "world" (:hello data)
      file    (:file data)
      "/2000-01/foo.html"  (:url data)
      (date-time 2000 1 1) (:date data)
      "&lt;p&gt;baz&lt;/p&gt;" (force (:lazy-content data)))))

;;; post-contains-tag?
(deftest* post-contains-tag?-test
  (let [file (io/file (str *post-dir* "2011.01.01-foo.html.clj"))
        data (get-post-data file)]
    (are [x y] (= x y)
      false (post-contains-tag? data "tag1")
      true  (post-contains-tag? data "tag2")
      true  (post-contains-tag? data "tag3")
      false (post-contains-tag? data nil))))

;;; get-posts
(deftest* get-posts-test
  (let [posts (sort-by-date (get-posts))]
    (are [x y] (= x y)
      3 (count posts)

      "bar" (-> posts first :title)
      "/2022-02/bar.html" (-> posts first :url)
      false (nil? (-> posts first :file))
      false (nil? (-> posts first :date))
      false (nil? (-> posts first :lazy-content))
      "world" (-> posts first :hello)

      "foo" (-> posts second :title)
      "/2011-01/foo.html" (-> posts second :url)
      false (nil? (-> posts second :file))
      false (nil? (-> posts second :date))
      false (nil? (-> posts second :lazy-content))
      "world" (-> posts second :hello))))

;;; get-all-tags
(deftest* get-all-tags-test
  (let [[t1 t2 _ t3 :as tags] (sort-alphabetically :name (get-all-tags))]
    (are [x y] (= x y)
      4      (count tags)
      "tag1" (:name t1)
      "tag2" (:name t2)
      "tag3" (:name t3)
      "/tag/tag1.html" (:url t1)
      "/tag/tag2.html" (:url t2)
      "/tag/tag3.html" (:url t3))))

;;; get-tags
(deftest* get-tags-test
  (let [[t1 t2 t3 :as tags] (get-tags)]
    (are [x y] (= x y)
      3      (count tags)
      "tag1" (:name t1)
      "tag2" (:name t2)
      "tag3" (:name t3)
      "/tag/tag1.html" (:url t1)
      "/tag/tag2.html" (:url t2)
      "/tag/tag3.html" (:url t3)))
  (let [[t1 t2 t3 :as tags] (get-tags :count? true)]
    (are [x y] (= x y)
      3      (count tags)
      "tag1" (:name  t1)
      "tag2" (:name  t2)
      "tag3" (:name  t3)
      1      (:count t1)
      2      (:count t2)
      1      (:count t3)
      "/tag/tag1.html" (:url   t1)
      "/tag/tag2.html" (:url   t2)
      "/tag/tag3.html" (:url   t3))))

;;; make-site-data
(deftest* make-site-data-test
  (let [file1   (io/file (str *post-dir* "2000.01.01-foo.html.clj"))
        file2   (io/file (str *post-dir* "2011.01.01-foo.html.clj"))
        option1 (parse-template-option file1)
        option2 (parse-template-option file2)]

    (testing "simple site data"
      (let [site (make-site-data file1 :base option1)]
        (are [x y] (= x y)
          file1   (:file site)
          "baz"   (:title site)
          "world" (:hello site)
          3       (count (:posts site))
          ()      (:tag site)
          nil     (:tag-name site)
          '("tag1" "tag2" "tag3") (map :name (:tags site))
          (date-time 2000 1 1) (:date site))))

    (testing "site data with post tag"
      (let [site (make-site-data file1 :base option1 :tag ["tag1"])]
        file1  (:file site)
        1      (count (:posts site))
        ()     (:tag site)
        "tag1" (:tag-name site)
        "bar"  (-> site :posts first :title)))

    (testing "site data containing tag-name"
      (let [site (make-site-data file2 :base option2)]
        (are [x y] (= x y)
          file2   (:file site)
          "foo"   (:title site)
          "world" (:hello site)
          3       (count (:posts site))
          2       (count (:tag site))
          "tag2"  (-> site :tag first :name)
          nil     (:tag-name site)
          '("tag1" "tag2" "tag3") (map :name (:tags site))
          (date-time 2011 1 1) (:date site))))))

;;; generate-html
(deftest* generate-html-test
  (let [file1 (template-name->file "index.html.clj")
        file2 (io/file (str *post-dir* "2011.01.01-foo.html.clj"))
        ]
    (are [x y] (= x y)
      ; index.html.clj
      "<head><title>gen test</title></head><body><h1>gen test</h1><p>world</p></body>"
      (html (generate-html file1))

      ; 2011.01.01-foo.html.clj
      "<div><p>foo</p></div>"
      (html (generate-html file2)))))

;;; generate-tag-html
(deftest* generate-tag-html-test
  (let [[t1 t2 t3] (get-tags)]
    (are [x y] (= x y)
      ; tag1
      "<p>tag1</p><ul><li>bar</li></ul>"
      (html (generate-tag-html (:name t1)))
      ; tag2
      "<p>tag2</p><ul><li>bar</li><li>foo</li></ul>"
      (html (generate-tag-html (:name t2)))
      ; tag3
      "<p>tag3</p><ul><li>foo</li></ul>"
      (html (generate-tag-html (:name t3)))
      ; tagX
      "<p>tagX</p><ul></ul>"
      (html (generate-tag-html "tagX")))))

;;; compile-tag-test
(deftest* compile-tag-test
  (let [tag-name "tag1"
        res (compile-tag tag-name)
        file (io/file (str *public-dir* *tag-out-dir* tag-name ".html"))]
    (is res)
    (is (.exists file))
    (.delete file)))

; ---------------

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


(deftest* compile-template-test
  (let [tmpl (io/file (str *template-dir* "index.html.clj"))
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
          test-file (io/file (str *public-dir* "index.html"))]
      (is (.exists post-file))
      (.delete post-file)
      (is (.exists test-file))
      (.delete test-file))))

