(ns misaki.test.core
  (use [misaki core config]
       [misaki.util.sequence :only [find-first]]
       misaki.tester
       clojure.test)
  (require [clojure.java.io :as io]))

(set-base-dir! "test/")

;; call-compiler-fn
(deftest* call-compiler-fn-test
  (testing "single compiler"
    (is (= [:clj :cljs] (#'misaki.core/call-compiler-fn :-extension))))

  (testing "multiple compiler"
    (binding [*config* {:compiler [{'-extension #(list :txt)}
                                   {'-extension #(list :clj)}]}]
      (are [x y] (= x y)
        [:txt :clj] (#'misaki.core/call-compiler-fn :-extension)
        [:js]       (#'misaki.core/call-compiler-fn {'-extension #(list :js)} :-extension)))))


;; get-watch-file-extensions
(deftest* get-watch-file-extensions-test
  (testing "single compiler"
    (is (= [:clj :cljs] (get-watch-file-extensions))))

  (testing "normalized extentions"
    (binding [*config* {:compiler {'-extension #(list "clj" "*.txt")}}]
      (is (= [:clj :txt] (get-watch-file-extensions)))))

  (testing "multiple compiler"
    (binding [*config* {:compiler [{'-extension #(list :clj)}
                                   {'-extension #(list :txt)}]}]
      (is (= [:clj :txt] (get-watch-file-extensions)))))

  (testing "multiple compiler(duplicated extention)"
    (binding [*config* {:compiler [{'-extension #(list :clj :txt)}
                                   {'-extension #(list :txt)}]}]
      (is (= [:clj :txt] (get-watch-file-extensions))))))

;; get-template-files
(deftest* get-template-files-test
  (testing "default template directory"
    (let [tmpls (get-template-files)]
      (is (find-first #(= "index.html.clj" (.getName %)) tmpls))
      (is (= 16 (count tmpls)))))

  (testing "find from specified directory"
    (let [tmpls (get-template-files :dir (:post-dir *config*))]
      (is (= 3 (count tmpls)))
      (is (find-first #(= "2000.01.01-foo.html.clj" (.getName %)) tmpls))
      (is (find-first #(= "2011.01.01-foo.html.clj" (.getName %)) tmpls))
      (is (find-first #(= "2022.02.02-bar.html.clj" (.getName %)) tmpls)))))


;; get-post-files
(deftest* get-post-files-test
  (testing "without sort"
    (let [files (get-post-files)]
      (is (= 3 (count files)))
      (is (find-first #(= "2000.01.01-foo.html.clj" (.getName %)) files))
      (is (find-first #(= "2011.01.01-foo.html.clj" (.getName %)) files))
      (is (find-first #(= "2022.02.02-bar.html.clj" (.getName %)) files))))

  (testing "with sort"
    (bind-config [:post-sort-type :date-desc]
      (let [[a b c :as files] (get-post-files :sort? true)]
        (are [x y] (= x y)
          3 (count files)
          "2022.02.02-bar.html.clj" (.getName a)
          "2011.01.01-foo.html.clj" (.getName b)
          "2000.01.01-foo.html.clj" (.getName c))))))

;; update-config
(deftest* update-config-test
  (testing "default single compiler"
    (binding [*config* (assoc *config*
                              :compiler {'-config #(merge {:foo "bar"} %)})]
      (let [c (update-config)]
        (are [x y] (= x y)
          "test/public/" (:public-dir c)
          "bar"          (:foo c)))))

  (testing "specify compiler"
    (let [c (update-config {'-config #(assoc % :foo "bar")})]
      (are [x y] (= x y)
        "test/public/" (:public-dir c)
        "bar"         (:foo c))))

  (testing "multiple compilers"
    (binding [*config* (assoc *config*
                              :compiler [{'-config #(assoc % :foo "bar")}
                                         {'-config #(assoc % :bar "baz")}])]
      (let [c (update-config)]
        true (sequential? c)
        2    (count c)
        "test/public/" (:public-dir (first c))
        "bar"         (:foo (first c))
        "test/public/" (:public-dir (second c))
        "baz"         (:bar (second c))))))

;; process-compile-result
(deftest* process-compile-result-test
  (let [filename "bar.txt"]
    (testing "string result"
      (is (process-compile-result "foo" filename))
      (let [f (io/file (add-public-dir filename))]
        (is (.exists f))
        (is (= "foo" (slurp f)))
        (.delete f)))

    (testing "boolean result"
      (is (process-compile-result true filename))
      (is (not (process-compile-result false filename)))
      (let [f (io/file (str (:public-dir *config*) filename))]
        (is (not (.exists f)))))

    (testing "detailed result"
      (are [x y] (= x y)
        false (process-compile-result {} filename)
        false (process-compile-result {:status false} filename)
        true  (process-compile-result {:status true} filename))

      (is (process-compile-result
            {:status true :filename "a.txt" :body "foo"} ""))
      (let [f (io/file (add-public-dir "a.txt"))]
        (is (.exists f))
        (is (= "foo" (slurp f)))
        (.delete f))

      (is (not (process-compile-result
                 {:status false :body "bar"} "b.txt")))
      (let [f (io/file (add-public-dir "b.txt"))]
        (is (.exists f))
        (is (= "bar" (slurp f)))
        (.delete f)))))

;;; handleable-compiler?
(deftest handleable-compiler?-test
  (let [default (load-compiler-publics "default")
        copy    (load-compiler-publics "copy")]
    (are [x y] (= x y)
      true  (handleable-compiler? default (io/file "foo.clj"))
      false (handleable-compiler? default (io/file "foo"))
      true  (handleable-compiler? copy    (io/file "foo.clj"))
      true  (handleable-compiler? copy    (io/file "foo")))))

;;; compile*
(deftest* compile*-test
  (testing "single compiler"
    (let[[c r] (compile* (template-file "index.html.clj"))]
      (is (not (false? c)))
      (is (not (false? r))))
    (let [file (public-file "index.html")]
      (is (.exists file))
      (.delete file)))

  (binding [*config* (assoc *config* :compiler [(load-compiler-publics "default")
                                                (load-compiler-publics "copy")])]
    (testing "multiple compilers: first compiler is used"
      (let [[c r] (compile* (template-file "index.html.clj"))]
        (is (not (false? c)))
        (is (not (false? r))))
      (let [file (public-file "index.html")]
        (is (.exists file))
        (.delete file)))

    (testing "multiple compilers: second compiler is used"
      (let [[c r] (compile* (template-file "favicon.ico"))]
        (is (not (false? c)))
        (is (not (false? r))))
      (let [file (public-file "favicon.ico")]
        (is (.exists file))
        (.delete file))))

  (testing "all skip error test"
    (let [res (compile* (template-file "favicon.ico"))]
      (is (every? false? res)))))

