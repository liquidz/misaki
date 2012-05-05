(ns misaki.test.controller
  (:use [misaki config loader controller]
        [misaki.util seq]
        misaki.test.common
        [clj-time.core :only [date-time]]
        [hiccup.core :only [html]])
  (:use [clojure.test])
  (:require [clojure.java.io :as io]))

(deftest* make-site-data-test
  (let [file   (io/file (str *post-dir* "2000.01.01-foo.html.clj"))
        option (parse-template-option file)
        site   (make-site-data file :base option)
        site2  (make-site-data file :base option :tag ["tag1"])]
    (are [x y] (= x y)
      ; site
      file    (:file site)
      "baz"   (:title site)
      "world" (:hello site)
      3       (count (:posts site))
      ()      (:tag site)
      '("tag1" "tag2" "tag3") (map :name (:tags site))
      (date-time 2000 1 1) (:date site)

      ; site with tag
      file (:file site2)
      1 (count (:posts site2)))))

;; Posts Test
(deftest* get-post-data-test
  (let [file (io/file (str *post-dir* "2000.01.01-foo.html.clj"))
        post (get-post-data file)]
    (are [x y] (= x y)
      "baz"   (:title post)
      "world" (:hello post)
      file    (:file post)
      "/2000-01/foo.html"  (:url post)
      (date-time 2000 1 1) (:date post)
      "&lt;p&gt;baz&lt;/p&gt;" (force (:lazy-content post)))))


(deftest* get-posts-test
  (let [posts (sort-by-date (get-posts))]
    (are [x y] (= x y)
      3 (count posts)
      ; title
      "bar" (-> posts first :title)
      "foo" (-> posts second :title)
      "baz" (-> posts last :title)
      ; url
      "/2022-02/bar.html" (-> posts first :url)
      "/2011-01/foo.html" (-> posts second :url)
      "/2000-01/foo.html" (-> posts last :url)
      ; tag
      '("tag1" "tag2") (->> posts first :tag (map :name))
      '("tag2" "tag3") (->> posts second :tag (map :name))
      () (-> posts last :tag)
      ; content
      "&lt;p&gt;bar&lt;/p&gt;" (-> posts first :lazy-content force)
      "&lt;p&gt;foo&lt;/p&gt;" (-> posts second :lazy-content force)
      "&lt;p&gt;baz&lt;/p&gt;" (-> posts last :lazy-content force)))
  (let [posts (sort-by-date (get-posts :tag ["tag2"]))]
    (are [x y] (= x y)
      2 (count posts)
      ; title
      "bar" (-> posts first :title)
      "foo" (-> posts second :title))))

;; Tags test
(deftest* get-template-tag-test
  (let [file (io/file (str *post-dir* "2022.02.02-bar.html.clj"))
        tag  (sort-alphabetically :name (get-template-tag file))]
    (are [x y] (= x y)
      2 (count tag)

      "tag1" (-> tag first :name)
      "tag2" (-> tag second :name)

      "/tag/tag1.html" (-> tag first :url)
      "/tag/tag2.html" (-> tag second :url))))

(deftest* get-tags-test
  (let [tags (sort-alphabetically :name (get-tags))]
    (are [x y] (= x y)
      3 (count tags)

      "tag1" (-> tags first :name)
      "tag2" (-> tags second :name)
      "tag3" (-> tags last :name)

      "/tag/tag1.html" (-> tags first :url)
      "/tag/tag2.html" (-> tags second :url)
      "/tag/tag3.html" (-> tags last :url))))

(deftest* tag-contains?-test
  (let [file (io/file (str *post-dir* "2022.02.02-bar.html.clj"))
        post (get-post-data file)]
    (is (true?  (tag-contains? post "tag1")))
    (is (true?  (tag-contains? post "tag2")))
    (is (false? (tag-contains? post "tag3")))))

;; Compile test
(deftest* do-template-compile-test
  (let [file (io/file (str *template-dir* "controller.test01.html.clj"))
        res  (do-template-compile file)
        out  (io/file (str *public-dir* "controller.test01.html"))]

    (is res)
    (is (.exists file))
    "<p>hello</p>" (slurp file)

    (.delete out)))

(deftest* do-tag-compile-test
  ()
  )
