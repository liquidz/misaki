(ns misaki.test.tester
  (:use
    [misaki.config :only [*base-dir*]]
    misaki.tester
    clojure.test)
  (:require
    [clojure.string :as str]))

(deftest set-base-dir!-test
  (testing "default is blank"
    (is (str/blank? *base-dir*)))

  (set-base-dir! "foo")
  (with-test-base-dir
    (is (= "foo/" *base-dir*)))

  (set-base-dir! "foo/")
  (with-test-base-dir
    (is (= "foo/" *base-dir*))))

