(ns misaki.test.string
  (:use [misaki.util string]
        clojure.test))

;;; escape-string
(deftest escape-string-test
  (are [x y] (= x (escape-string y))
    "a&amp;b"  "a&b"
    "a&quot;b" "a\"b"
    "a&lt;b"   "a<b"
    "a&gt;b"   "a>b"

    "&amp;&quot;&lt;&gt;" "&\"<>"))

;;; str-split-last
(deftest split-last-test
  (testing "no match"
    (are [x y] (= x y)
      ["hello"] (str-split-last "hello" #"#")
      [""]      (str-split-last "" #"#")))

  (testing "match"
    (are [x y] (= x y)
      ["hello" "world"] (str-split-last "hello#world"  #"#")
      ["hello" "world"] (str-split-last "hello-world"  #"-")
      ["hello" "world"] (str-split-last "hello\\world" #"\\")
      ["foo#bar" "baz"] (str-split-last "foo#bar#baz"  #"#")))

  (testing "specify separator"
    (are [x y] (= x y)
      ["hello" "world"] (str-split-last "hello#world" #"#"     "-")
      ["foo-bar" "baz"] (str-split-last "foo#bar#baz" #"#"     "-")
      ["1.2" "3"]       (str-split-last "1a2b3"       #"[a-z]" "."))))




