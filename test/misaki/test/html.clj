(ns misaki.test.html
  (:use misaki.html.core
        [hiccup.core :only [html]])
  (:use [clojure.test]))

(deftest ul-test
  (is (= "<ul><li><span>1</span></li><li><span>2</span></li></ul>"
         (html (ul [1 2]))))
  (is (= "<ul><li><span>2</span></li><li><span>3</span></li></ul>"
         (html (ul inc [1 2]))))
  (is (= "<ul><li><span>1</span></li><li><span><ul><li><span>2</span></li></ul></span></li></ul>"
         (html (ul [1 (ul [2])])))))

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

(deftest table-test
  (is (= "<table><tbody><tr><td>a</td><td>b</td></tr></tbody></table>"
         (html (table '[[a b]]))))
  (is (= "<table><tbody><tr><td>a</td><td>b</td></tr><tr><td>c</td><td>d</td></tr></tbody></table>"
         (html (table '[[a b] [c d]]))))

  (is (= "<table><thead><tr><th>1</th><th>2</th></tr></thead><tbody><tr><td>a</td><td>b</td></tr></tbody></table>"
         (html (table [1 2] '[[a b]])))))

(deftest code-test
  (are [x y] (= x y)
    "<code class=\"prettyprint\">(+ 1 2)</code>" (html (code (+ 1 2)))
    "<code class=\"prettyprint\">(+ 1 2)</code>" (html (code "(+ 1 2)"))))

(deftest paragraph-test
  (are [x y] (= x (html y))
    "<p class=\"paragraph\">hello</p>" (p "hello")
    "<p class=\"paragraph\">helloworld</p>" (p "hello" "world")
    "<p class=\"paragraph\">he<code class=\"prettyprint\">ll</code>o</p>" (p "he`ll`o")))
