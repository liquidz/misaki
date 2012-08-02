(ns misaki.test.conv
  (:use misaki.test.common
        [misaki.compiler.default.html conv]
        [misaki.compiler.default.core :only [make-site-data]]
        [misaki.compiler.default.config :only [*site*]]
        [clj-time.core :only [date-time]]
        misaki.test.common
        clojure.test)
  (:require [clojure.java.io :as io]))

;; date->xml-schema
(deftest date->xml-schema-test
  (testing "valid date"
    (is (= "2000-01-01T00:00:00"
           (date->xml-schema (date-time 2000 1 1)))))

  (testing "invalid date"
    (is (thrown? Exception (date->xml-schema (date-time 2000 99 99)))))

  (testing "nil"
    (is (nil? (date->xml-schema nil)))))

;; date->string
(deftest date->string-test
  (testing "valid date"
    (is (= "01 Jan 2000" (date->string (date-time 2000 1 1)))))

  (testing "invalid date"
    (is (thrown? Exception (date->string (date-time 2000 99 99)))))

  (testing "nil"
    (is (nil? (date->string nil)))))

; =post-title->url
(deftest* post-title->url-test
  (binding [*site* (make-site-data (io/file *tag-layout*))]
    (testing "match pattern"
      (are [x y] (= x y)
        "/2011-01/foo.html" (post-title->url "foo")
        "/2022-02/bar.html" (post-title->url "bar")
        "/2000-01/foo.html" (post-title->url "baz")))

    (testing "not match pattern"
      (is (nil? (post-title->url "unknown"))))))
