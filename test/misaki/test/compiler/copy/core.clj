(ns misaki.test.compiler.copy.core
  (require
    [misaki.compiler.copy.core :refer :all]
    [misaki [config :refer [*config-file* *config*]]
            [tester :as t]]
    [misaki.util.file :refer [path]]
    [clojure.test     :refer :all]
    [clojure.java.io  :as io]))

(t/set-base-dir! "test/files/compiler/copy/core/")

(defmacro deftest* [name & body]
  `(t/deftest*
     ~name
     (t/with-test-base-dir
       (let [config# (t/get-config :merge? true)]
         (binding [*config* config#]
           ~@body)))))

;; -config
(deftest* copy-config-test
  (let [config (t/get-config)]
    (are [x y] (= x y)
      true (contains? config :except-extensions)
      true (contains? config :detailed-log)

       [:except] (:except-extensions config)
       false     (:detailed-log config))))

;; -compile
(deftest* copy-test
  (let [pub (-> *config* :public-dir io/file)]
    (if-not (.exists pub) (.mkdir pub)))

  (testing "text file copy"
    (let [from-file (t/template-file "foo.txt")
          to-file   (t/public-file   "foo.txt")]
      (is (t/test-compile from-file))
      (is (.exists to-file))
      (.delete to-file)))

  (testing "bin file copy"
    (let [from-file (t/template-file "favicon.ico")
          to-file   (t/public-file   "favicon.ico")]
      (is (t/test-compile from-file))
      (is (.exists to-file))
      (.delete to-file)))

  (testing "excepting extension option"
    (let [from-file (t/template-file "dummy.except")
          to-file   (t/public-file   "dummy.except")]
      (is (t/test-compile from-file))
      (is (not (.exists to-file))))))

