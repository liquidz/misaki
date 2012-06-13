(ns misaki.test.layout
  (:use [misaki core template config]
        [hiccup.core :only [html]]
        misaki.test.common
        clojure.test))

;(deftest* layout-test
;  ;; one layout
;  (let [f (load-template (str *template-dir* "layout.test.one.html.clj"))]
;    (are [x y] (= x y)
;      "<div><p>default title</p></div>" (html (apply-template f '("")))
;      "<div><p>a</p></div>" (html (apply-template f (with-meta '("") {:title "a"})))))
;
;  ;; two layout
;  (let [f (load-template (str *template-dir* "layout.test.two.html.clj"))]
;    (are [x y] (= x y)
;      "<div><h1><p>default title</p></h1></div>"
;      (html (apply-template f '("")))
;
;      "<div><h1><p>a</p></h1></div>"
;      (html (apply-template f (with-meta '("") {:title "a"}))))))
;
;
;(deftest* layout-eval-test
;  (let [f (load-template (str *template-dir* "eval.test.html.clj"))]
;    (is (= "<div><p>hello</p></div>" (html (apply-template f '("")))))))
;
;(deftest* function-test
;  (let [f (load-template (str *template-dir* "func.test.html.clj"))]
;    (is (= "<div><p><span>hello</span></p></div>" (html (apply-template f '("")))))))
