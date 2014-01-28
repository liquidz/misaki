(ns misaki.filter.delete-last-ext-test
  (:require
    [midje.sweet :refer :all]
    [misaki.filter.delete-last-ext :refer :all]))

(fact "delete-last-ext should work fine."
  (delete-last-ext "foo.txt") => "foo"
  (delete-last-ext "foo.txt.bar") => "foo.txt"
  (delete-last-ext "foo") => "foo")

