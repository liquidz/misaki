(ns misaki.test.post
  (:use [misaki core config]
        [hiccup.core :only [html]]
        misaki.test.common
        clojure.test)
  (:require [clojure.java.io :as io]))

(deftest* get-posts-test
  (let [posts (sort-by-date (get-posts))]
    (are [x y] (= x y)
      3 (count posts)

      "bar" (-> posts first :title)
      "/2022/02/bar.html" (-> posts first :url)
      false (nil? (-> posts first :file))
      false (nil? (-> posts first :date))
      false (nil? (-> posts first :lazy-content))
      "world" (-> posts first :hello)

      "foo" (-> posts second :title)
      "/2011/01/foo.html" (-> posts second :url)
      false (nil? (-> posts second :file))
      false (nil? (-> posts second :date))
      false (nil? (-> posts second :lazy-content))
      "world" (-> posts second :hello))))


(deftest* get-tags-test
  (let [tags (get-tags (get-posts))]
    (are [x y] (= x y)
      3      (count tags)
      "tag1" (nth tags 0)
      "tag2" (nth tags 1)
      "tag3" (nth tags 2))))

(deftest* get-counted-tags-test
  (let [tags (get-counted-tags (get-posts))]
    (are [x y] (= x y)
      3      (count tags)
      "tag1" (:tag   (nth tags 0))
      1      (:count (nth tags 0))
      "tag2" (:tag   (nth tags 1))
      2      (:count (nth tags 1))
      "tag3" (:tag   (nth tags 2))
      1      (:count (nth tags 2)))))

(deftest* get-posts-with-tag-test
  (let [posts1 (get-posts :tag ["tag1"])
        posts2 (get-posts :tag ["tag2"])
        posts3 (get-posts :tag ["tag3"])
        posts4 (get-posts :tag ["tag1" "tag2"])
        posts5 (get-posts :tag ["tag1" "tag3"])]

    (are [x y] (= x y)
      1 (count posts1)
      2 (count posts2)
      1 (count posts3)
      1 (count posts4)
      0 (count posts5))))


(deftest* generate-tag-html-test
  (let [[t1 t2 t3] (get-tags (get-posts))]
    (are [x y] (= x y)
      "<p>tag1</p><ul><li>bar</li></ul>"
      (html (generate-tag-html t1))

      "<p>tag2</p><ul><li>bar</li><li>foo</li></ul>"
      (html (generate-tag-html t2))

      "<p>tag3</p><ul><li>foo</li></ul>"
      (html (generate-tag-html t3)))))


(deftest* compile-tag-test
  (let [tag-name "tag1"
        res (compile-tag tag-name)
        file (io/file (str *public-dir* *tag-out-dir* tag-name ".html"))]
    (is res)
    (is (.exists file))
    (.delete file)))

