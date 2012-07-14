(ns misaki.test.file
  (:use [misaki core]
        [misaki.util file]
        [clj-time.core :only [date-time]]
        misaki.test.common
        clojure.test)
  (:require [clojure.java.io :as io]))

;; file?
(deftest file?-test
  (are [x y] (= x (file? y))
    true  (io/file ".")
    false "string"
    false 123
    false nil))

;; normalize-path
(deftest normalize-path-test
  (are [x y] (= x (normalize-path y))
    "foo/" "foo"
    "foo/" "foo/"
    "/"    ""))

;; remove-extension
(deftest remove-extension-test
  (are [x y] (= x (remove-extension y))
    "foo"     "foo.bar"
    "foo.bar" "foo.bar.baz"
    "foo"     "foo"
    ""       ""))

;; get-parent-path
(deftest get-parent-path-test
  (are [x y] (= x (get-parent-path y))
    "/foo/"     "/foo/bar"
    "/foo/bar/" "/foo/bar/"
    "/"         "/foo"))
