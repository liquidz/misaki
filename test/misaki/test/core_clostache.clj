(ns misaki.test.core-clostache
  "core test with clostache template"
  (require
    [misaki [core   :refer :all]
            [config :refer :all]
            [tester :refer :all]]
    [clojure.test   :refer :all]))

(set-base-dir! "test/files/core_clostache/")

(deftest* compile-with-clostache-config.clj
  (testing "single post"
    (let [[p c] (compile* (post-file "2000.01.01-foo.html.clj"))]
      (is (not (false? p)))
      (is (not (false? c))))
    (let [file (public-file "clostache2000-01/foo.html")]
      (is (.exists file))
      (.delete file)
      (.delete (public-file "clostache2000-01"))))

  (testing "call with default config"
    (bind-config [:posts-per-page 1]
      (test-index-compile (template-file "index.html.clj")))
    (let [p1 (public-file "index.html")
          p2 (public-file "clostache2/index.html")
          p3 (public-file "clostache3/index.html")]
      (is (.exists p1))
      (is (.exists p2))
      (is (.exists p3))
      (.delete p1)
      (.delete p2)
      (.delete p3)
      (.delete (public-file "clostache2"))
      (.delete (public-file "clostache3"))))

  (testing "call with optional-config"
    (bind-config [:posts-per-page 1
                  :index-template-regexp #"^pagetest"]
      (test-index-compile
        {:index-template-regexp (:index-template-regexp *config*)}
        (template-file "pagetest.html.clj")))
    (let [p1 (public-file "pagetest.html")
          p2 (public-file "clostache2/pagetest.html")
          p3 (public-file "clostache3/pagetest.html")]
      (is (.exists p1))
      (is (.exists p2))
      (is (.exists p3))
      (.delete p1)
      (.delete p2)
      (.delete p3)
      (.delete (public-file "clostache2"))
      (.delete (public-file "clostache3")))))


