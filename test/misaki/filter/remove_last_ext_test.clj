(ns misaki.filter.remove-last-ext-test
  (:require
    [midje.sweet :refer :all]
    [misaki.filter.remove-last-ext :refer :all]))

(fact "remove-last-ext should work fine."
  (remove-last-ext "foo.txt") => "foo"
  (remove-last-ext "foo.txt.bar") => "foo.txt"
  (remove-last-ext "foo") => "foo")

