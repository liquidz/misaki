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


(deftest max-arg-num-test
  (binding [*compiler* (-> 'misaki.test.config find-ns ns-publics)]
    (are [x y] (= x y)
      0  (max-arg-num :dummy0)
      1  (max-arg-num :dummy1)
      2  (max-arg-num :dummy2)
      3  (max-arg-num :dummy3)
      -1 (max-arg-num :dummy4))))
