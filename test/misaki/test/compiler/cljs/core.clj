(ns misaki.test.compiler.cljs.core
  (require
    [misaki.compiler.cljs.core :refer :all]
    [misaki [config :refer [*config*]]
     [server :refer :all]
            [tester :refer :all]]
    [misaki.util.file :refer [path find-files]]
    [clojure.test     :refer :all]
    [clojure.java.io  :as io]))

(set-base-dir! "test/files/compiler/cljs/core/")

;; -config
(defcompilertest cljs-config-test
  (testing "config keywords"
    (is (contains? *config* :cljs-compile-options))
    (are [x] (contains? (:cljs-compile-options *config*) x)
      :src-dir
      :output-to
      :optimizations
      :pretty-print))

  (testing "config values"
    (are [x y] (= x (y (:cljs-compile-options *config*)))
      (path (:template-dir *config*) "cljs/")    :src-dir
      (path (:public-dir *config*) "js/main.js") :output-to
      :advanced    :optimizations
      true         :pretty-print)))

;; -compile
(defcompilertest compile-cljs-test
  (let [pub (-> *config* :public-dir io/file)]
    (if-not (.exists pub) (.mkdir pub)))

  (let [opt (:cljs-compile-options *config*)]
    (testing "compile clojurescript"
      (let [from-file (-> opt :src-dir (path "hello.cljs") io/file)
            js-files  [(-> opt :output-to io/file)
                       (public-file "js/hello.js")]
            core-dir  (public-file "js/cljs")]
        (is (test-compile from-file))
        (doseq [f js-files]
          (is (.exists f)))
        (is (.exists core-dir))

        ; delete compiled files
        (let [files (->> (path (:public-dir *config*) "js")
                      find-files (filter #(.isFile %)))]
          (doseq [f files] (.delete f))
          (.delete (public-file "js/cljs"))
          (.delete (public-file "js")))))))

