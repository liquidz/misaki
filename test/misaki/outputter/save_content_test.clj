(ns misaki.outputter.save-content-test
  (:require
    [midje.sweet :refer :all]
    [misaki.config :refer [*config*]]
    [misaki.util.file :as file]
    [misaki.outputter.save-content :refer :all]
    [clojure.java.io :as io]))

(def ^{:private true} sample
  {::first  "foo"
   :path    "foo/bar/baz.txt"
   :content (delay "hello")})

(facts "save-content outputter should work fine."
  (fact "save to current directory"
    (binding [*config* {:public-dir "."}]
      (-main sample)
      (.exists (io/file (:path sample))) => true
      (slurp (:path sample)) => (force (:content sample))
      (file/rm-rf (::first sample))))

  (fact "save to another directory"
    (binding [*config* {:public-dir "neko"}]
      (-main sample)
      (.exists (io/file (file/join (:public-dir *config*) (:path sample)))) => true
      (slurp (file/join (:public-dir *config*) (:path sample))) => (force (:content sample))
      (file/rm-rf (:public-dir *config*))
      ))
  )

