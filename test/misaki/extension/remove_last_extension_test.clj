(ns misaki.extension.remove-last-extension-test
  (:require
    [misaki.extension.remove-last-extension :refer :all]
    [midje.sweet                            :refer :all]))

(def _run #(:path (-main {:path %})))

(fact "remove-last-ext should work fine."
  (_run "foo.txt")     => "foo"
  (_run "foo.txt.bar") => "foo.txt"
  (_run "foo")         => "foo")
