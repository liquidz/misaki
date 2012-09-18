(ns misaki.test.tester
  (:use
    [misaki.config    :only [*base-dir* *config*]]
    [misaki.util.file :only [path]]
    misaki.tester
    clojure.test)
  (:require
    [clojure.string  :as str]
    [clojure.java.io :as io]))

;;; set-base-dir!
(deftest set-base-dir!-test
  (testing "default is blank"
    (is (str/blank? *base-dir*)))

  (let [last-base-dir @_test-base-dir_]
    (set-base-dir! "foo")
    (with-test-base-dir
      (is (= "foo/" *base-dir*)))

    (set-base-dir! "foo/")
    (with-test-base-dir
      (is (= "foo/" *base-dir*)))

    (set-base-dir! last-base-dir)))


;;; get-base-config
(deftest get-base-config-test
  (let [last-base-dir @_test-base-dir_]
    (testing "test dir"
      (set-base-dir! "test")
      (is (= "default title") (-> (get-base-config) :site :default-title)))

    (testing "sample dir"
      (set-base-dir! "samples/blog")
      (is (= "misaki demo page")
          (-> (get-base-config) :site :site-title)))

    (set-base-dir! last-base-dir)))


;;; bind-config
(deftest bind-config-test
  (is (nil? (:foo *config*)))
  (bind-config [:foo "hello"]
    (is (= "hello" (:foo *config*)))))

;;; template-file
(deftest* template-file-test
  (is (.exists (template-file "index.html.clj")))
  (is (.exists (template-file "_layouts/default.clj"))))

;;; public-file
(deftest* public-file-test
  (let [file (io/file (path (:public-dir *config*) "dummy"))]
    (spit (io/writer file) "hello world")
    (is (.exists (public-file "dummy")))
    (.delete file)))
