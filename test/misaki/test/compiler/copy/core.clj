(ns misaki.test.compiler.copy.core
  (require
    [misaki.compiler.copy.core :refer :all]
    [misaki [config :refer [*config-file* *config*]]
            [tester :refer :all]]
    [misaki.util.file :refer [path]]
    [clojure.test     :refer :all]
    [clojure.java.io  :as io]))

(set-base-dir! "test/files/compiler/copy/core/")

;; -config
(defcompilertest copy-config-test
  (let [config (get-config)]
    (are [x y] (= x y)
      true (contains? config :except-extensions)
      true (contains? config :detailed-log)

       [:except] (:except-extensions config)
       false     (:detailed-log config))))

;; -compile
(defcompilertest copy-test
  (let [pub (-> *config* :public-dir io/file)]
    (if-not (.exists pub) (.mkdir pub)))

  (testing "text file copy"
    (let [from-file (template-file "foo.txt")
          to-file   (public-file   "foo.txt")]
      (is (test-compile from-file))
      (is (.exists to-file))
      (.delete to-file)))

  (testing "bin file copy"
    (let [from-file (template-file "favicon.ico")
          to-file   (public-file   "favicon.ico")]
      (is (test-compile from-file))
      (is (.exists to-file))
      (.delete to-file)))

  (testing "excepting extension option"
    (let [from-file (template-file "dummy.except")
          to-file   (public-file   "dummy.except")]
      (is (test-compile from-file))
      (is (not (.exists to-file))))))

