(ns misaki.converter-test
  (:require
    [midje.sweet  :refer :all]
    [misaki.converter :refer :all]))

(def text-conv
  {:-types (fn [] (list :txt))})
(def pict-conv
  {:-types (fn [] (list :jpg :gif :png))})
(def star-conv
  {:-types (fn [] (list :*))})


(facts "type-matched? should work fine."
  (fact "type equals"
    (type-matched? :txt text-conv) => true
    (type-matched? :jpg pict-conv) => true
    (type-matched? :gif pict-conv) => true
    (type-matched? :png pict-conv) => true
    (type-matched? :jpg text-conv) => false
    (type-matched? :txt pict-conv) => false)

  (fact "stared types"
    (type-matched? :txt star-conv) => true
    (type-matched? :jpg star-conv) => true))

