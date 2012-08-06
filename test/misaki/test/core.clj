(ns misaki.test.core
  (use [misaki core config]
       misaki.tester
       clojure.test)
  (require [clojure.java.io :as io]))

(set-base-dir! "test/")

(deftest* get-watch-file-extensions-test
  (is (= [:clj :cljs] (get-watch-file-extensions))))


(deftest* process-compile-result-test
  (let [filename "bar.txt"]
    (testing "string result"
      (is (process-compile-result "foo" filename))
      (let [f (io/file (str *public-dir* filename))]
        (is (.exists f))
        (is (= "foo" (slurp f)))
        (.delete f)))

    (testing "boolean result"
      (is (process-compile-result true filename))
      (is (not (process-compile-result false filename)))
      (let [f (io/file (str *public-dir* filename))]
        (is (not (.exists f)))))

    (testing "detailed result"
      (are [x y] (= x y)
        false (process-compile-result {} filename)
        false (process-compile-result {:status false} filename)
        true  (process-compile-result {:status true} filename))
      )
    )

  )
