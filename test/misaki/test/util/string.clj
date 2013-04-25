(ns misaki.test.util.string
  (:require
    [misaki.util.string :refer :all]
    [clojure.test       :refer :all]))

;;; escape-string
(deftest escape-string-test
  (are [x y] (= x (escape-string y))
    "a&amp;b"  "a&b"
    "a&quot;b" "a\"b"
    "a&lt;b"   "a<b"
    "a&gt;b"   "a>b"

    "&amp;&quot;&lt;&gt;" "&\"<>"))

;;; msec->string
(deftest msec->string-test
  (testing "positive numbers"
    (are [x y] (= x (msec->string y))
      "0.001 sec" 1
      "1.000 sec" 1000
      "1.999 sec" 1999))

  (testing "negative numbers"
    (is (thrown? AssertionError (msec->string -100)))))

;; str-contains?
(deftest str-contains?-test
  (are [x y] (= x y)
    true  (str-contains? "hello" "ll")
    false (str-contains? "hello" "oo")))

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


;;; render
(deftest render-test
  (are [x y] (= x y)
    "foo"    (render "foo"        {})
    "foo"    (render "{{x}}"      {:x "foo"})
    "foo"    (render "$(x)"       {:x "foo"})
    "{{x}}y" (render "{{x}}$(y)"  {:x "x" :y "y"})
    "x{{y}}" (render "$(x){{y}}"  {:x "x" :y "y"})))


