(ns misaki.test.file
  (:use [misaki core]
        [misaki.util file]
        [clj-time.core :only [date-time]]
        misaki.test.common
        clojure.test)
  (:require [clojure.java.io :as io]))

;; add-path-slash
(deftest add-path-slash-test
  (are [x y] (= x (add-path-slash y))
    "foo/" "foo"
    "foo/" "foo/"
    "/"    ""))

;; delete-extension
(deftest delete-extension-test
  (are [x y] (= x (delete-extension y))
    "foo"     "foo.bar"
    "foo.bar" "foo.bar.baz"
    "foo"     "foo"
    ""       ""))

;; delete-filename
(deftest delete-filename-test
  (are [x y] (= x (delete-filename y))
    "/foo/"     "/foo/bar"
    "/foo/bar/" "/foo/bar/"
    "/"         "/foo"))
