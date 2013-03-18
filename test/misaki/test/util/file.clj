(ns misaki.test.util.file
  (:require
    [misaki.util.file :refer :all]
    [clj-time.core    :refer [date-time]]
    [clojure.test     :refer :all]
    [clojure.java.io  :as io]))

;; file?
(deftest file?-test
  (are [x y] (= x (file? y))
    true  (io/file ".")
    false "string"
    false 123
    false nil))

;; normalize-path
(deftest normalize-path-test
  (are [x y] (= x (normalize-path y))
    nil    nil
    "foo/" "foo"
    "foo/" "foo/"
    "/"    ""))

;; normalize-extension
(deftest normalize-extension-test
  (are [x y] (= x (normalize-extension y))
    nil  nil
    :clj :clj
    :clj 'clj
    :clj "clj"
    :clj "*.clj"
    :html.clj :html.clj
    :html.clj 'html.clj
    :html.clj "html.clj"
    :html.clj "*.html.clj"))

;; extension-filter
(deftest extension-filter-test
  (let [files (map io/file ["a.txt" "b.clj" "c.txt"])]
    (testing "fiter extension"
      (are [x y] (= x (map #(.getName %) y))
        ["a.txt" "c.txt"] (extension-filter :txt   files)
        ["a.txt" "c.txt"] (extension-filter "txt"  files)
        ["a.txt" "c.txt"] (extension-filter ".txt" files)
        []                (extension-filter :js    files)
        []                (extension-filter :txt   [])))

    (testing "filter all extension"
      (are [x y] (= x (map #(.getName %) y))
        ["a.txt" "b.clj" "c.txt"] (extension-filter :*   files)
        ["a.txt" "b.clj" "c.txt"] (extension-filter "*"  files)
        ["a.txt" "b.clj" "c.txt"] (extension-filter ".*" files)
        []                        (extension-filter ".*" []))))

  (let [files (map io/file ["a.txt" "b.foo.txt" "c.foo"])]
    (testing "*.aaa.bbb pattern"
      (are [x y] (= x (map #(.getName %) y))
        ["a.txt" "b.foo.txt"]         (extension-filter :txt files)
        ["b.foo.txt"]                 (extension-filter :foo.txt files)
        ["c.foo"]                     (extension-filter :foo files)
        ["a.txt" "b.foo.txt" "c.foo"] (extension-filter :* files)))))

;; remove-last-extension
(deftest remove-last-extension-test
  (testing "string"
    (are [x y] (= x (remove-last-extension y))
      "foo"     "foo.bar"
      "foo.bar" "foo.bar.baz"
      "foo"     "foo"
      ""       ""))

  (testing "file"
    (are [x y] (= x (remove-last-extension (io/file y)))
      "foo"     "foo.bar"
      "foo.bar" "foo.bar.baz"
      "foo"     "foo"
      ""       "")))

;; has-extension?
(deftest has-extension?-test
  (testing "File"
    (are [x y] (= x (has-extension? :clj y))
      true  (io/file "foo.clj")
      false (io/file "foo.cljs")
      false (io/file "foo.html")))
  (testing "String"
    (are [x y] (= x (has-extension? :clj y))
      true  "foo.clj"
      false "foo.cljs"
      false "foo.html"))
  (testing "extension pattern"
    (are [x y] (= x y)
      true (has-extension? :* "foo.html")
      true (has-extension? :* "foo.clj")
      true (has-extension? "*" "foo.clj")
      true (has-extension? ".*" "foo.clj")
      true (has-extension? "clj" "foo.clj")
      true (has-extension? ".clj" "foo.clj")))
  (testing "double extension"
    true  (has-extension? :html.clj "foo.html.clj")
    false (has-extension? :html.clj "foo.clj")
    false (has-extension? :html.clj "foo.html")))

;; get-parent-path
(deftest get-parent-path-test
  (are [x y] (= x (get-parent-path y))
    "/foo/"     "/foo/bar"
    "/foo/bar/" "/foo/bar/"
    "/"         "/foo"))

;; path
(deftest path-test
  (testing "combine 2 paths"
    (are [x y z] (= x (path y z))
      "a/b.txt"  "a/"  "b.txt"
      "a/b.txt"  "a"   "/b.txt"
      "a/b.txt"  "a"   "b.txt"
      "/b.txt"   ""    "b.txt"
      "b.txt"    nil   "b.txt"
      "a/"       "a"   nil
      "a/"       "a/"  nil
      "/"        ""    nil
      ""         nil   nil))

  (testing "combine 3 paths"
    (are [x y] (= x (apply path y))
      "a/b/c.txt" ["a"   "b"   "c.txt"]
      "a/b/c.txt" ["a/"  "b"   "c.txt"]
      "a/b/c.txt" ["a"   "b/"  "c.txt"]
      "a/b/c.txt" ["a/"  "b/"  "c.txt"]
      "a/b/c.txt" ["a"   "b"   "/c.txt"]
      "a/b/c.txt" ["a/"  "b"   "/c.txt"]
      "a/b/c.txt" ["a"   "b/"  "/c.txt"]
      "a/b/c.txt" ["a/"  "b/"  "/c.txt"])))

;; get-last-extension
(deftest get-last-extension-test
  (testing "File"
    (are [x y] (= x (get-last-extension (io/file y)))
      "txt" "foo.txt"
      "clj" "foo.txt.clj"
      nil   "foo"))

  (testing "String"
    (are [x y] (= x (get-last-extension y))
      "txt" "foo.txt"
      "clj" "foo.txt.clj"
      nil   "foo")))
