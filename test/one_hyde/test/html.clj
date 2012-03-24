(ns one-hyde.test.html
  (:use html
        [hiccup.core :only [html]])
  (:use [clojure.test]))

;(deftest hoge
;  (println (js "a.js" "b.js"))
;  (println (css "a.css" "b.css")))

(deftest ul-test
  (is (= "<ul><li>1</li><li>2</li></ul>" (html (ul [1 2]))))
  (is (= "<ul><li>2</li><li>3</li></ul>" (html (ul inc [1 2]))))
  (is (= "<ul><li>1</li><ul><li>2</li></ul></ul>" (html (ul [1 (ul [2])])))))

(deftest img-test
  (is (= "<img alt=\"\" src=\"a.png\" />" (html (img "a.png"))))
  (is (= "<img alt=\"neko\" src=\"a.png\" />" (html (img "neko" "a.png")))))

(deftest link-test
  (is (= "<a href=\"a.html\">a.html</a>" (html (link "a.html"))))
  (is (= "<a href=\"a.html\">link</a>" (html (link "link" "a.html")))))


(deftest dl-test
  (is (= "<dl><dt>a</dt><dd>1</dd></dl>" (html (dl {:a 1}))))
  (is (= "<dl><dt>a</dt><dd>1</dd></dl>" (html (dl [:a 1]))))
  (is (= "<dl><dt>a</dt><dd>1</dd><dt>b</dt><dd>2</dd></dl>" (html (dl [:a 1 :b 2]))))

  (is (= "<dl><dt>a/b</dt><dd>1</dd></dl>" (html (dl {:a/b 1})))))
