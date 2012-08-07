(ns misaki.test.config
  (:use misaki.config
        [misaki.tester :only [set-base-dir! deftest*]]
        [clj-time.core :only [date-time year month day]]
        clojure.test)
  (:require [clojure.java.io :as io])
  (:import [java.io FileNotFoundException]))

(defn dummy0 [] ())
(defn dummy1 [a] ())
(defn dummy2 [a b] ())
(defn dummy3 ([a] ()) ([a b c] ()))
(defn dummy4 [a & b] ())


(set-base-dir! "test/")

; read-config
(deftest* read-config-test
  (testing "normal pattern"
    (let [config (read-config)]
      (are [x y] (= x y)
        "public/"   (:public-dir config)
        "template/" (:template-dir config)
        "_posts/"   (:post-dir config)
        "_layouts/" (:layout-dir config))))

  (testing "error pattern"
    (binding [*base-dir* "/foo/bar/"]
      (is (thrown? FileNotFoundException (read-config)))))

  (testing "specify default value"
    (binding [*base-dir* "/foo/bar/"]
      (is (= {} (read-config {}))))))


;;; get-date-from-file
(deftest* get-date-from-file-test
  ; test config: #"(\d{4})[.](\d{1,2})[.](\d{1,2})[-_](.+)$"
  (testing "valid date"
    (let [date (get-date-from-file (io/file "2000.11.22-dummy.clj"))]
      (are [x y] (= x y)
        2000 (year date)
        11   (month date)
        22   (day date))))

  (testing "invalid date"
    (are [filename] (nil? (get-date-from-file (io/file filename)))
      "2000.11.xx.dummy.clj"
      "2000.xx.22-dummy.clj"
      "xxxx.11.22-dummy.clj"
      "2000.11.dummy.clj"
      "2000.dummy.clj"
      "dummy.clj"
      ""
      nil)))

;;; remove-date-from-name
(deftest* remove-date-from-name-test
  (is (= "dummy.clj" (remove-date-from-name "2000.11.22-dummy.clj"))))


;;; absolute-path
(deftest* absolute-path-test
  (with-config
    (are [x y] (= x (absolute-path y))
      "/a.htm" "a.htm"
      "/bar/a.htm" "bar/a.htm"
      "/a.htm" "/a.htm"
      "/bar/a.htm" "/bar/a.htm"
      "http://localhost/a.htm" "http://localhost/a.htm"
      "https://localhost/a.htm" "https://localhost/a.htm")

    (binding [*url-base* "/foo/"]
      (are [x y] (= x (absolute-path y))
        "/foo/a.htm" "a.htm"
        "/foo/a.htm" "/a.htm"
        "/foo/bar/a.htm" "/bar/a.htm"
        "/foo/bar/a.htm" "bar/a.htm"))))
