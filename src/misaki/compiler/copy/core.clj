(ns misaki.compiler.copy.core
  (:use [misaki.util.file :only [path has-extension?]])
  (:require [clojure.java.io :as io]))

(defn -extension
  [] (list :*))

(defn -config
  [config]
  (merge
    {:except-extensions []}
    config))

(defn -compile
  [{:keys [public-dir except-extensions]} file]

  (if (some #(has-extension? % file) except-extensions)
    'skip
    (do (io/copy file (io/file (path public-dir (.getName file))))
        true)))


