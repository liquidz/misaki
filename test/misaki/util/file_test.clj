(ns misaki.util.file-test
  (:require
    [midje.sweet  :refer :all]
    [misaki.util.file :refer :all]
    [clojure.java.io :as io]))

(fact "file/join should work fine."
  (join "a" "b") => (str "a" separator "b")
  (join "a/" "b/") => (str "a" separator "b"))

(fact "file/get-last-ext should work fine."
  (get-last-ext "foo.txt")     => "txt"
  (get-last-ext "foo.txt.bar") => "bar"
  (get-last-ext "foo")         => nil)

(fact "file/normalize should work fine."
  (normalize (str "foo" separator))
      => "foo"
  (normalize (str "foo" separator "foo.txt"))
      => (str "foo" separator "foo.txt"))

(fact "file/get-name should work fine."
  (get-name "foo")         => "foo"
  (get-name "foo.bar")     => "foo.bar"
  (get-name "foo/bar")     => "bar"
  (get-name "foo/bar.baz") => "bar.baz")

(fact "file/parent should work fine."
  (parent "foo") => "foo"
  (parent (join "." "foo")) => "."
  (parent (join "foo" "bar")) => "foo"
  (parent (join "foo" "bar" "baz")) => (join "foo" "bar"))

(fact "aboslute-path should work fine."
  (let [here (io/file ".")
        path (.getAbsolutePath here)]
    (absolute-path here) => path
    (absolute-path ".")  => path))

(fact "file/mkdirs should work fine."
  (let [a "a", b "b"
        dir (join a b)]
    (mkdirs a)
    (.isDirectory (io/file a)) => true

    (mkdirs (join dir))
    (.isDirectory (io/file (join dir))) => true

    (rm-rf a))

  (let [dirs ["foo" "bar" "baz"]
        dir (apply join dirs)]
    (mkdirs dir)
    (.isDirectory (io/file (first dirs))) => true
    (.isDirectory (io/file (apply join (take 2 dirs)))) => true
    (.isDirectory (io/file (apply join dirs))) => true

    (rm-rf (first dirs))))
