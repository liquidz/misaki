(ns misaki.test.core-empty
  (require
    [misaki [core   :refer :all]
            [config :refer :all]
            [tester :refer :all]]
    [clojure.test    :refer :all]))

(set-base-dir! "test/files/core_empty/")

; -config
(deftest* config-with-empty_config.clj
  (let [config (get-config)]
    (are [x y] (= x y)
      true (contains? config :detailed-log)
      true (contains? config :layout-dir)
      true (:detailed-log config)
      "test/files/core_empty/layouts/" (:layout-dir config))))

; -compile
(deftest* compile-with-compty-_config.clj
  (test-index-compile (template-file "index.html.clj"))
  (let [p1 (public-file "index.html")]
    (is (.exists p1))
    (is (.exists (public-file "_config.clj")))
    (is (not (.exists (public-file "_config"))))
    (.delete p1)))

