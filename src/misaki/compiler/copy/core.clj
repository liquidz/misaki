(ns misaki.compiler.copy.core
  (:use [misaki.util.file :only [path has-extension?]])
  (:require [clojure.java.io :as io]))

(defn -extension
  [] (list :*))

(defn -config
  [config]
  (merge
    {:not-to-copy []}
    config))

(defn -compile
  [{:keys [public-dir not-to-copy]} file]

  (if (some #(has-extension? % file) not-to-copy)
    'skip
    (do
      (io/copy file
               (io/file (path public-dir (.getName file))))
      true)))


