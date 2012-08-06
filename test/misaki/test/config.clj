(ns misaki.test.config
  (:use misaki.config
        [misaki.tester :only [set-base-dir! deftest*]]
        clojure.test)
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
