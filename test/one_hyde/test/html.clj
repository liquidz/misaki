(ns one-hyde.test.html
  (:use html
        [hiccup.core :only [html]])
  (:use [clojure.test]))

;(deftest hoge
;  (println (js "a.js" "b.js"))
;  (println (css "a.css" "b.css")))

(deftest ul-test
  (is (= "<ul><li>1</li><li>2</li></ul>" (html (ul [1 2]))))
  (is (= "<ul><li>2</li><li>3</li></ul>" (html (ul inc [1 2])))))

(deftest img-test
  (is (= "<img alt=\"\" src=\"a.png\" />" (html (img "a.png"))))
  (is (= "<img alt=\"neko\" src=\"a.png\" />" (html (img "neko" "a.png")))))

(deftest link-test
  (is (= "<a href=\"a.html\">a.html</a>" (html (link "a.html"))))
  (is (= "<a href=\"a.html\">link</a>" (html (link "link" "a.html")))))
