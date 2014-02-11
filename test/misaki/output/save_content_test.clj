(ns misaki.output.save-content-test
  (:require
    [midje.sweet :refer :all]
    [misaki.config :refer [*config*]]
    [misaki.util.file :as file]
    [misaki.output.save-content :refer :all]
    [clojure.java.io :as io]))

(defn- pub-file
  [m]
  (io/file
    (file/join (:public-dir *config*) (:path m))))

(facts "save-content output extension should work fine."
  (fact "save to current directory"
    (binding [*config* {:public-dir "."}]
      (let [s {::first "foo" :path "foo/bar/baz.txt" :content (delay "hello")}]
        (-main s)
        (.exists (pub-file s)) => true
        (slurp (pub-file s))   => (force (:content s))
        (file/rm-rf (::first s))
        (.exists (pub-file s)) => false)))

  (fact "save to another directory"
    (binding [*config* {:public-dir "neko"}]
      (let [s {::first "foo" :path "foo/bar/baz.txt" :content (delay "hello")}]
        (-main s)
        (.exists (pub-file s)) => true
        (slurp (pub-file s))   => (force (:content s))
        (file/rm-rf (:public-dir *config*))
        (.exists (pub-file s)) => false)))

  (fact "save multiple files"
    (binding [*config* {:public-dir "."}]
    (let [s (list {::first "foo.txt" :path "foo.txt" :content (delay "hello")}
                  {::first "bar.txt" :path "bar.txt" :content (delay "world")})]
      (-main s)
      (doseq [s s]
        (.exists (pub-file s)) => true
        (slurp (pub-file s))   => (force (:content s))
        (file/rm-rf (::first s))
        (.exists (pub-file s)) => false)))))

