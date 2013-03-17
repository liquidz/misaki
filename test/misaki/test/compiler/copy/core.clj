(ns misaki.test.compiler.copy.core
  (:use
    misaki.compiler.copy.core
    [misaki.config :only [*config-file* *config*]]
    [misaki.util.file :only [path]]
    clojure.test)
  (require
    [misaki.tester :as t]
    [clojure.java.io :as io]))

(t/set-base-dir! "test/files/compiler/copy/core/")

(defmacro deftest* [name & body]
  `(t/deftest*
     ~name
     (t/with-test-base-dir
       (let [config# (t/get-config :merge? true)]
         (binding [*config* config#]
           ~@body)))))

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

