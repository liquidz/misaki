(ns misaki.setup-test
  (:require
    [misaki.setup  :refer :all]
    [conjure.core  :refer :all]
    [midje.sweet   :refer :all]))

(defn- fadd
  ([m]   (fadd m 1))
  ([m n] (update-in m [:n] #(+ % n))))

(defn- fmul
  ([m]   (fmul m 2))
  ([m n] (update-in m [:n] #(* % n))))

(defn- test-run
  [m]
  (dissoc (run-setup-extensions m) :setup))

(fact "run-setup-extensions should work fine."
  (stubbing [load-setup-function identity]
    (test-run {:setup [fadd] :n 1})               => {:n 2}
    (test-run {:setup [fadd fadd] :n 1})          => {:n 3}
    (test-run {:setup [(list fadd 3)] :n 1})      => {:n 4}
    (test-run {:setup [fadd fmul] :n 1})          => {:n 4}
    (test-run {:setup [fadd (list fmul 3)] :n 1}) => {:n 6}))
