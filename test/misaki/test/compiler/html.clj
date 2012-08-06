(ns misaki.test.compiler.html
  (:use misaki.test.compiler.common
        misaki.compiler.default.html.core
        [misaki.compiler.default.core   :only [make-site-data]]
        [misaki.compiler.default.config :only [*site* *config*]]
        [misaki.config :only [*url-base*]]
        [hiccup.core :only [html]])
  (:use [clojure.test])
  (:require [clojure.java.io :as io]))

;; ul
(deftest ul-test
  (are [x y] (= x (html y))
    "<ul><li><span>1</span></li><li><span>2</span></li></ul>"
    (ul [1 2])
    "<ul><li><span>2</span></li><li><span>3</span></li></ul>"
    (ul inc [1 2])
    "<ul><li><span>1</span></li><li><span><ul><li><span>2</span></li></ul></span></li></ul>"
    (ul [1 (ul [2])])
    "<ul><li><span>a</span></li><li><span><code class=\"prettyprint\">b</code></span></li></ul>"
    (ul ["a" "`b`"])))

(deftest img-test
  (is (= "<img alt=\"\" src=\"a.png\" />" (html (img "a.png"))))
  (is (= "<img alt=\"neko\" src=\"a.png\" />" (html (img "neko" "a.png")))))

(deftest link-test
  (are [x y] (= x (html y))
    "<a href=\"a.html\">a.html</a>" (link "a.html")
    "<a href=\"a.html\">link</a>" (link "link" "a.html")
    "<a href=\"a.html\"><code class=\"prettyprint\">link</code></a>" (link "`link`" "a.html")))


(deftest dl-test
  (are [x y] (= x (html y))
    "<dl><dt>a</dt><dd>1</dd></dl>" (dl {:a 1})
    "<dl><dt>a</dt><dd>1</dd></dl>" (dl [:a 1])
    "<dl><dt>a</dt><dd>1</dd><dt>b</dt><dd>2</dd></dl>" (dl [:a 1 :b 2])

    "<dl><dt>a/b</dt><dd>1</dd></dl>" (dl {:a/b 1})

    "<dl><dt><code class=\"prettyprint\">a</code></dt><dd>1</dd></dl>" (dl ["`a`" 1])
    "<dl><dt>a</dt><dd><code class=\"prettyprint\">1</code></dd></dl>" (dl {:a "`1`"})))

(deftest table-test
  (are [x y] (= x (html y))
    "<table><tbody><tr><td>a</td><td>b</td></tr></tbody></table>"
    (table '[[a b]])
    "<table><tbody><tr><td>a</td><td>b</td></tr><tr><td>c</td><td>d</td></tr></tbody></table>"
    (table '[[a b] [c d]])

    "<table><thead><tr><th>1</th><th>2</th></tr></thead><tbody><tr><td>a</td><td>b</td></tr></tbody></table>"
    (table [1 2] '[[a b]])

    "<table><tbody><tr><td><code class=\"prettyprint\">a</code></td><td>b</td></tr></tbody></table>"
    (table [["`a`" "b"]])))

(deftest code-test
  (are [x y] (= x y)
    "<code class=\"prettyprint\">(+ 1 2)</code>" (html (code (+ 1 2)))
    "<code class=\"prettyprint\">(+ 1 2)</code>" (html (code "(+ 1 2)"))))

(deftest* paragraph-test
  (binding [*site* (make-site-data (io/file (:tag-layout *config*)))]
    (testing "normal paragraph"
      (are [x y] (= x (html y))
        "<p class=\"paragraph\">hello</p>" (p "hello")
        "<p class=\"paragraph\">helloworld</p>" (p "hello" "world")))

    (testing "inline code"
      (are [x y] (= x (html y))
        "<p class=\"paragraph\">he<code class=\"prettyprint\">ll</code>o</p>" (p "he`ll`o")))

    (testing "strong paragraph"
      (are [x y] (= x (html y))
        "<p class=\"paragraph\">he<strong>ll</strong>o</p>" (p "he**ll**o")))

    (testing "emphasized paragraph"
      (are [x y] (= x (html y))
        "<p class=\"paragraph\">he<em>ll</em>o</p>" (p "he*ll*o")))

    (testing "strong and emphasized paragraph"
      (are [x y] (= x (html y))
        "<p class=\"paragraph\"><strong>he</strong>l<em>lo</em></p>" (p "**he**l*lo*")))

    (testing "inline link"
      (are [x y] (= x (html y))
        "<p class=\"paragraph\"><a href=\"a.html\">a</a></p>" (p "[a](a.html)")
        "<p class=\"paragraph\"><a href=\"/2011-01/foo.html\">a</a></p>" (p "[a](title:foo)")))

    (testing "new-line"
      (are [x y] (= x (html y))
        "<p class=\"paragraph\">a<br />b</p>" (p "a\n\nb")
        "<p class=\"paragraph\">a<br />\nb</p>" (p "a\n\n\nb")
        "<p class=\"paragraph\">a\r\nb</p>" (p "a\r\nb")
        "<p class=\"paragraph\">a<br />b</p>" (p "a\r\n\r\nb")))))

(deftest* js-test
  (testing "basic pattern"
    (are [x y] (= x (html (first y)))
      "<script src=\"a.js\" type=\"text/javascript\"></script>" (js "a.js")
      "<script src=\"a.js\" type=\"text/javascript\"></script>" (js ["a.js"])
      "<script src=\"a.js\" type=\"text/javascript\"></script>" (js "a.js" "b.js")
      "<script src=\"a.js\" type=\"text/javascript\"></script>" (js ["a.js" "b.js"])))
  (testing "css from url-base"
    (are [x y] (= x (html (first y)))
      "<script src=\"/a.js\" type=\"text/javascript\"></script>" (absolute-js "a.js")
      "<script src=\"/a.js\" type=\"text/javascript\"></script>" (absolute-js "/a.js")
      "<script src=\"/bar/a.js\" type=\"text/javascript\"></script>" (absolute-js "/bar/a.js")
      "<script src=\"http://localhost/a.js\" type=\"text/javascript\"></script>" (absolute-js "http://localhost/a.js"))
    (binding [*url-base* "/foo/"]
      (are [x y] (= x (html (first y)))
        "<script src=\"/foo/a.js\" type=\"text/javascript\"></script>" (absolute-js "a.js")
        "<script src=\"/foo/a.js\" type=\"text/javascript\"></script>" (absolute-js "/a.js")
        "<script src=\"/foo/bar/a.js\" type=\"text/javascript\"></script>" (absolute-js "/bar/a.js")
        "<script src=\"http://localhost/a.js\" type=\"text/javascript\"></script>" (absolute-js "http://localhost/a.js")))))

(deftest* css-test
  (testing "basic pattern"
    (are [x y] (= x (html y))
      "<link href=\"a.css\" rel=\"stylesheet\" type=\"text/css\" />" (first (css "a.css"))
      "<link href=\"b.css\" rel=\"stylesheet\" type=\"text/css\" />" (second (css "a.css" "b.css"))
      ))
  (testing "css with media attribute"
    (are [x y] (= x (html y))
      "<link href=\"a.css\" media=\"screen\" rel=\"stylesheet\" type=\"text/css\" />" (first (css {:media "screen"} "a.css"))
      "<link href=\"b.css\" media=\"screen\" rel=\"stylesheet\" type=\"text/css\" />" (second (css {:media "screen"} "a.css" "b.css"))))

  (testing "css from url base"
    (are [x y] (= x (html y))
      "<link href=\"/a.css\" rel=\"stylesheet\" type=\"text/css\" />" (first (absolute-css "a.css"))
      "<link href=\"/a.css\" rel=\"stylesheet\" type=\"text/css\" />" (first (absolute-css "/a.css"))
      "<link href=\"/bar/a.css\" rel=\"stylesheet\" type=\"text/css\" />" (first (absolute-css "/bar/a.css"))
      "<link href=\"http://localhost/a.css\" rel=\"stylesheet\" type=\"text/css\" />" (first (absolute-css "http://localhost/a.css")))
    (binding [*url-base* "/foo/"]
      (are [x y] (= x (html y))
        "<link href=\"/foo/a.css\" rel=\"stylesheet\" type=\"text/css\" />" (first (absolute-css "a.css"))
        "<link href=\"/foo/a.css\" rel=\"stylesheet\" type=\"text/css\" />" (first (absolute-css "/a.css"))
        "<link href=\"/foo/bar/a.css\" rel=\"stylesheet\" type=\"text/css\" />" (first (absolute-css "/bar/a.css"))
        "<link href=\"http://localhost/a.css\" rel=\"stylesheet\" type=\"text/css\" />" (first (absolute-css "http://localhost/a.css")))))
  (testing "css with media attribute from url base"
    (are [x y] (= x (html y))
      "<link href=\"/a.css\" media=\"screen\" rel=\"stylesheet\" type=\"text/css\" />" (first (absolute-css {:media "screen"} "a.css"))
      "<link href=\"/a.css\" media=\"screen\" rel=\"stylesheet\" type=\"text/css\" />" (first (absolute-css {:media "screen"} "/a.css"))))
  )

;(deftest embed-test
;  (are [x y] (= x y)
;    "hello "        (embed "hello ??")
;    "hello "        (embed "hello ??" nil)
;    "hello world"   (embed "hello ??" "world")
;    "hello 1"       (embed "hello ??" 1)
;    "hello 1"       (embed "hello ??" 1 2)
;    "hello 1 world" (embed "hello ?? ??" 1 "world")
;    "hello aa bb"   (embed "hello ??" '("aa" "bb"))))
