(ns misaki.test.tester
  (:use
    [misaki.config    :only [*base-dir* *config* with-config]]
    [misaki.util.file :only [path]]
    misaki.tester
    clojure.test)
  (:require
    [clojure.string  :as str]
    [clojure.java.io :as io]))

(def BASE_DIR "test/files/tester/")

;;; set-base-dir!
(deftest set-base-dir!_get-base-dir-test
  (testing "default is blank"
    (is (str/blank? *base-dir*)))

  (testing "set base-dir in single namespae"
    (let [last-base-dir (get-base-dir)]
      (set-base-dir! "foo")
      (with-test-base-dir (is (= "foo/" *base-dir*)))

      (set-base-dir! "foo/")
      (with-test-base-dir (is (= "foo/" *base-dir*)))

      (set-base-dir! last-base-dir)))

  (testing "set base-dir in several namespaces"
    (in-ns 'testns1)
    (set-base-dir! "testns1-dir")
    (in-ns 'testns2)
    (set-base-dir! "testns2-dir")

    (in-ns 'testns1)
    (is (= "testns1-dir/" (get-base-dir)))

    (in-ns 'testns2)
    (is (= "testns2-dir/" (get-base-dir)))))

;(deftest set-base-dir!-test
;  (testing "default is blank"
;    (is (str/blank? *base-dir*)))
;
;  (let [k (keyword (ns-name *ns*))
;        last-base-dir (get @_test-base-dir_ k)]
;    (set-base-dir! "foo")
;    (with-test-base-dir
;      (is (= "foo/" *base-dir*)))
;
;    (set-base-dir! "foo/")
;    (with-test-base-dir
;      (is (= "foo/" *base-dir*)))
;
;    (set-base-dir! last-base-dir)))


;;; get-base-config
(deftest get-base-config-test
  (let [last-base-dir (get-base-dir)]
    (testing "test dir"
      (set-base-dir! BASE_DIR)
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
(deftest template-file-test
  (set-base-dir! BASE_DIR)
  (with-test-base-dir
    (with-config
      (is (.exists (template-file "index.html.clj")))
      (is (.exists (template-file "dir/index.html.clj"))))))

;;; public-file
(deftest public-file-test
  (set-base-dir! BASE_DIR)
  (with-test-base-dir
    (with-config
      (let [pub  (io/file (:public-dir *config*))
            file (io/file (path (:public-dir *config*) "dummy"))]
        (if-not (.exists pub) (.mkdir pub))
        (spit (io/writer file) "hello world")
        (is (.exists (public-file "dummy")))
        (.delete file)))))
