(ns one-hyde.test.core
  (:use one-hyde.core
        one-hyde.transform)
  (:use [clojure.test]))

(deftest replace-me ;; FIXME: write
  (is true))


;;; TRANSFORM
(deftest transform-test
  (binding [*transformers* (atom [inc #(* 2 %)])]
    (is (= 4 (transform 1)))
    (add-transformer! #(* 3 %))
    (is (= 12 (transform 1))))

  (let [f (transform "(apply + site)")]
    ; f => (fn [site & contents] (list (apply + site)))
    (is (= '(6) (f [1 2 3])))))
