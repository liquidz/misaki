(ns misaki.converter-test
  (:require
    [midje.sweet  :refer :all]
    [conjure.core :refer :all]
    [misaki.config :refer [*config*]]
    [misaki.converter :refer :all]))

(def text-conv
  {:types (fn [] (list :txt))})
(def pict-conv
  {:types (fn [] (list :jpg :gif :png))})
(def star-conv
  {:types (fn [] (list :*))})


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
    (type-matched? :jpg star-conv) => true
    ))


(def test-converters
  (list {:types #(list :txt)
         :run   #(assoc % :x "x")}
        {:types #(list :clj)
         :run   #(assoc % :y "y")}))

(def star-converters
  (list {:types #(list :*)
         :run   #(assoc % :z "z")}
        {:types #(list :dummy)
         :run   #(assoc % :unexpected "value")}))

(fact "run-converters should work fine."
  (stubbing [load-converters test-converters]
    (run-converters {:type :txt}) => {:type :txt :x "x"}
    (run-converters {:type :clj}) => {:type :clj :y "y"})
  (stubbing [load-converters star-converters]
            (run-converters {:a 1}) => {:a 1 :z "z"}
            (run-converters {:type :dummy}) => {:type :dummy :z "z"} ; dummy should not be worked
            )
  )
