(ns misaki.test.css.core
  (:use
    misaki.compiler.css.core
    [misaki.config :only [*config-file* *config*]]
    [misaki.util.file :only [path]]
    clojure.test)
  (require
    [misaki.tester :as t]
    [clojure.java.io :as io]))

(defmacro deftest* [name & body]
  `(do
     (t/set-base-dir! "test/")
     (t/deftest* ~name
       (binding [*config-file* "_config_css.clj"]
         (t/with-test-base-dir
           (let [config# (t/get-config :merge? true)]
             (binding [*config* config#]
               ~@body)))))))

(deftest* -compile-test
  (testing "valid css clj"
    (let [from-file (t/template-file "success.css.clj")
          to-file   (t/public-file   "success.css")]
      (is (t/test-compile from-file))
      (is (.exists to-file))
      (.delete to-file)))

  (testing "invalid css clj (parse error)"
    (let [from-file (t/template-file "parse-error.css.clj")
          to-file   (t/public-file   "parse-error.css")]
      (is (not (t/test-compile from-file)))
      (is (not (.exists to-file)))
      (.delete to-file)))

  (testing "invalid css clj (eval error)"
    (let [from-file (t/template-file "eval-error.css.clj")
          to-file   (t/public-file   "eval-error.css")]
      (is (not (t/test-compile from-file)))
      (is (not (.exists to-file)))
      (.delete to-file))))
