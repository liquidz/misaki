(ns misaki.input.watch-directory-test
  (:require
    [misaki.util.file             :as file]
    [misaki.input.watch-directory :refer :all]
    [midje.sweet                  :refer :all]
    [clojure.java.io              :as io]))

(fact "parse-file should work fine."
  (let [base-dir "."
        file (io/file "./foo/bar.txt")
        res (parse-file file base-dir)]
    (:path res) => "foo/bar.txt"
    (:file res) => file
    (:type res) => :txt
    (contains? res :content) => true)

  (let [base-dir "foo"
        file (io/file "foo/bar.txt")
        res (parse-file file base-dir)]
    (:path res) => "bar.txt"
    (:file res) => file
    (:type res) => :txt
    (contains? res :content) => true))
