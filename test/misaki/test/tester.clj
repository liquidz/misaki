(ns misaki.test.tester
  (:use
    [misaki.config :only [*base-dir*]]
    misaki.tester
    clojure.test)
  (:require
    [clojure.string :as str]))

;;; set-base-dir!
(deftest set-base-dir!-test
  (testing "default is blank"
    (is (str/blank? *base-dir*)))

  (set-base-dir! "foo")
  (with-test-base-dir
    (is (= "foo/" *base-dir*)))

  (set-base-dir! "foo/")
  (with-test-base-dir
    (is (= "foo/" *base-dir*))))


;;; get-base-config
(deftest get-base-config-test
  (testing "test dir"
    (set-base-dir! "test")
    (is (= "default title") (-> (get-base-config) :site :default-title)))

  (testing "sample dir"
    (set-base-dir! "samples/blog")
    (is (= "misaki demo page")
        (-> (get-base-config) :site :site-title))))
