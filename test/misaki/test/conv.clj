(ns misaki.test.conv
  (:use [misaki.html conv]
        [clj-time.core :only [date-time]]
        misaki.test.common
        clojure.test))

;; date->xml-schema
(deftest date->xml-schema-test
  (testing "valid date"
    (is (= "2000-01-01T00:00:00"
           (date->xml-schema (date-time 2000 1 1)))))

  (testing "invalid date"
    (is (thrown? Exception (date->xml-schema (date-time 2000 99 99)))))

  (testing "nil"
    (is (nil? (date->xml-schema nil)))))

;; date->string
(deftest date->string-test
  (testing "valid date"
    (is (= "01 Jan 2000" (date->string (date-time 2000 1 1)))))

  (testing "invalid date"
    (is (thrown? Exception (date->string (date-time 2000 99 99)))))

  (testing "nil"
    (is (nil? (date->string nil)))))




