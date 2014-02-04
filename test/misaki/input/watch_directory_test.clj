(ns misaki.input.watch-directory-test
  (:require
    [misaki.util.file                :as file]
    [misaki.input.watch-directory    :refer :all]
    [midje.sweet                     :refer :all]
    [clojure.java.io                 :as io]))

(fact "parse-file should work fine."
  (let [base-dir (file/normalize (.getParent (io/file (.getAbsolutePath (io/file ".")))))]
    (:path (parse-file (io/file "project.clj") base-dir))
          => (file/join "project.clj")
    (:path (parse-file (io/file (file/join "foo" "project.clj")) base-dir))
          => (file/join "foo" "project.clj")))

