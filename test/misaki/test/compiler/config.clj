(ns misaki.test.compiler.config
  (:use [misaki.compiler.default config]
        [misaki.config :only [*config*]]
        [misaki.util file sequence]
        [misaki.tester :only [bind-config]]
        misaki.test.compiler.common
        [clj-time.core :only [date-time year month day]]
        clojure.test)
  (:require [clojure.java.io :as io])
  (:import [java.io FileNotFoundException]))

(def sample-posts
  (list
    {:file (io/file "b") :title "a" :date (date-time 2022 2 2)}
    {:file (io/file "c") :title "c" :date (date-time 2000 1 1)}
    {:file (io/file "a") :title "b" :date (date-time 2011 1 1)}))

;;; layout-file?
(deftest* layout-file?-test
  (testing "normal pattern"
    (are [x y] (= x (layout-file? (io/file y)))
      true  (path (:layout-dir *config*) "default.clj")
      false (path (:template-dir *config*) "index.html.clj")
      false ""))

  (testing "error"
    (is (thrown? AssertionError (layout-file? nil)))))

; FIXME
(deftest* sort-type->sort-fn-test
  (testing "title sort"
    (bind-config [:post-sort-type :title]
      (let [[p1 p2 p3] ((sort-type->sort-fn) sample-posts)]
        (are [x y] (= x (:title y))
          "a" p1
          "b" p2
          "c" p3))))
  (testing "title-desc sort"
    (bind-config [:post-sort-type :title-desc]
      (let [[p1 p2 p3] ((sort-type->sort-fn) sample-posts)]
        (are [x y] (= x (:title y))
          "c" p1
          "b" p2
          "a" p3))))

  (testing "date sort"
    (bind-config [:post-sort-type :date]
      (let [[p1 p2 p3] ((sort-type->sort-fn) sample-posts)]
        (are [x y] (= x (:title y))
          "c" p1
          "b" p2
          "a" p3))))
  (testing "date-desc sort"
    (bind-config [:post-sort-type :date-desc]
      (let [[p1 p2 p3] ((sort-type->sort-fn) sample-posts)]
        (are [x y] (= x (:title y))
          "a" p1
          "b" p2
          "c" p3))))

  (testing "name sort"
    (bind-config [:post-sort-type :name]
      (let [[p1 p2 p3] ((sort-type->sort-fn) sample-posts)]
        (are [x y] (= x (:title y))
          "b" p1
          "a" p2
          "c" p3))))
  (testing "name-desc sort"
    (bind-config [:post-sort-type :name-desc]
      (let [[p1 p2 p3] ((sort-type->sort-fn) sample-posts)]
        (are [x y] (= x (:title y))
          "c" p1
          "a" p2
          "b" p3)))))

;;; make-template-output-filename
(deftest* make-template-output-filename-test
  (testing "simple template"
    (let [tmpl-name "template.test.html.clj"
          file (io/file (path (:template-dir *config*) tmpl-name))
          name1 (make-template-output-filename file)
          name2 (make-template-output-filename tmpl-name)]
      (is (= name1 name2))))

  (testing "post template"
    (let [tmpl-name "2000.01.01-foo.html.clj"
          file      (io/file (path (:post-dir *config*) tmpl-name))]
      (is (= "2000-01/foo.html" (make-template-output-filename file)))

      (binding [*config* (assoc *config* :post-filename-format "{{year}}-{{month}}/{{day}}.htm")]
        (is (= "2000-01/01.htm" (make-template-output-filename file))))
      (binding [*config* (assoc *config*
                                :post-filename-regexp #"(\d{4})\.(\d{1,2})\.(\d{1,2})[-_](.+)\.html.clj$"
                                :post-filename-format "{{year}}-{{month}}/{{filename}}/index.html")]
        (is (= "2000-01/foo/index.html" (make-template-output-filename file)))))))

