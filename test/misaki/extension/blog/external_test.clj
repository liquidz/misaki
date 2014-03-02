(ns misaki.extension.blog.external-test
  (:require
    [misaki.extension.blog.external :refer :all]
    [midje.sweet     :refer :all]
    ))


(fact "spit-to-temporary should work fine."
  (let [content "hello"
        ^java.io.File file (spit-to-temporary content)]
    (.exists file) => true
    (slurp file)   => content
    (.delete file)))

(fact "with-temporary-file should work fine."
  (let [content "hello"
        tmp-file (atom nil)]
    (with-temporary-file
      content
      (fn [^java.io.File file]
        (reset! tmp-file file)
        (.exists file)  => true
        (slurp file)    => content))
    (.exists @tmp-file) => false))
