(ns misaki.test.config
  (:use misaki.config
        [misaki.tester :only [set-base-dir! deftest*]]
        clojure.test)
  (:import [java.io FileNotFoundException]))

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
