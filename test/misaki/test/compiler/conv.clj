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
    (testing "match pattern"
      (are [x y] (= x y)
        "/2011-01/foo.html" (post-title->url "foo")
        "/2022-02/bar.html" (post-title->url "bar")
        "/2000-01/foo.html" (post-title->url "baz")))

    (testing "not match pattern"
      (is (nil? (post-title->url "unknown"))))))
