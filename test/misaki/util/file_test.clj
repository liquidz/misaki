(ns misaki.util.file-test
  (:require
    [midje.sweet  :refer :all]
    [misaki.util.file :refer :all]))


(fact "path/join should work fine."
  (join "a" "b") => (str "a" separator "b"))

(fact "path/get-last-ext should work fine."
  (get-last-ext "foo.txt")     => "txt"
  (get-last-ext "foo.txt.bar") => "bar"
  (get-last-ext "foo")         => nil)
