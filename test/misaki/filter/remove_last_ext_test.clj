(ns misaki.filter.remove-last-ext-test
  (:require
    [misaki.filter.remove-last-ext :refer :all]
    [midje.sweet                   :refer :all]))

(fact "remove-last-ext should work fine."
  (remove-last-ext "foo.txt")     => "foo"
  (remove-last-ext "foo.txt.bar") => "foo.txt"
  (remove-last-ext "foo")         => "foo")

