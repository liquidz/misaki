(ns misaki.test.copy.core
  (:use
    misaki.compiler.copy.core
    [misaki.config :only [*config-file* *config*]]
    [misaki.util.file :only [path]]
    clojure.test
    )
  (require
    [misaki.tester :as t]
    [clojure.java.io :as io]))

(defmacro deftest* [name & body]
  `(do
     (t/set-base-dir! "test/")
     (deftest ~name
       (binding [*config-file* "_config_copy.clj"]
         (t/with-test-base-dir
           (let [config# (t/get-config)]
             (binding [*config* config#]
               ~@body)))))))

(deftest* copy-test
  (letfn [(file  [dir x] (io/file (path dir x)))
          (pub-file  [x] (file (:public-dir *config*) x))
          (tmpl-file [x] (file (:template-dir *config*) x))]
    (testing "text file copy"
      (let [from-file (tmpl-file "foo.txt")
            to-file   (pub-file  "foo.txt")]
        (is (t/test-compile from-file))
        (is (.exists to-file))
        (.delete to-file)))

    (testing "bin file copy"
      (let [from-file (tmpl-file "favicon.ico")
            to-file   (pub-file  "favicon.ico")]
        (is (t/test-compile from-file))
        (is (.exists to-file))
        (.delete to-file)))

    (testing "excepting extension option"
      (let [from-file (tmpl-file "dummy.except")
            to-file   (pub-file  "dummy.except")
            ]
        (is (not (t/test-compile from-file)))
        (is (not (.exists to-file)))))))
