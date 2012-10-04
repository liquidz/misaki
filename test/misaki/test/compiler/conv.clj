(ns misaki.test.compiler.conv
  (:use misaki.test.compiler.common
        [misaki.compiler.default.html conv]
        [misaki.compiler.default.core :only [make-site-data]]
        [misaki.compiler.default.config :only [*site*]]
        [misaki.config :only [*config*]]
        [clj-time.core :only [date-time]]
        clojure.test)
  (:require [clojure.java.io :as io]))

; =post-title->url
(deftest* post-title->url-test
  (binding [*site* (make-site-data (io/file (:tag-layout *config*)))]
    (testing "should match correct title"
      (are [x y] (= x y)
        "/2011-01/foo.html" (post-title->url "foo")
        "/2022-02/bar.html" (post-title->url "bar")
        "/2000-01/foo.html" (post-title->url "baz")))

    (testing "should match title with jump name"
      (are [x y] (= x y)
        "/2011-01/foo.html#bar"     (post-title->url "foo#bar")
        "/2022-02/bar.html#baz"     (post-title->url "bar#baz")
        "/2000-01/foo.html#foo_bar" (post-title->url "baz#foo_bar")))

    (testing "not match"
      (is (nil? (post-title->url "unknown")))
      (is (nil? (post-title->url "unknown#foo"))))))
