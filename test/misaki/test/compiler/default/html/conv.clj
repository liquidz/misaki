(ns misaki.test.compiler.default.html.conv
  (:require
    [misaki.compiler.default.html.conv   :refer :all]
    [misaki.compiler.default [core       :refer [make-site-data]]
                             [config     :refer [*site*]]]
    [misaki [config  :refer [*config*]]
            [tester  :refer [set-base-dir! defcompilertest]]]
    [clj-time.core   :refer [date-time]]
    [clojure.test    :refer :all]
    [clojure.java.io :as io]))

(set-base-dir! "test/files/compiler/default/html/conv/")

; =post-title->url
(defcompilertest post-title->url-test
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
