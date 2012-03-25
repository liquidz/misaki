(ns one-hyde.util.file
  "one-hyde: file control utility"
  (:use
    [clj-time.coerce :only [from-long]])
  (:require
    [clojure.java.io :as io]
    [clojure.string :as str])
  ;(:import [java.io File])
  )

; =find-files
(defn find-files
  "find files recursively"
  [dir]
  (file-seq (io/file dir)))

; has-extension?
(defn has-extension?
  "check whether file has specified extension or not"
  [ext file]
  (.endsWith (.getName file) ext))

; =delete-extension
(defn delete-extension
  "delete file extension"
  [x]
  (if (= java.io.File (class x))
    (delete-extension (.getName x))
    (str/replace-first x #"\.[^.]+$" "")))

; =last-modified-date
(defn last-modified-date
  "Get last modified date from java.io.File"
  [#^java.io.File file]
  (from-long (.lastModified file)))

; make-directories
(defn make-directories
  "make directories which will place file"
  [filename]
  (let [paths (drop-last (str/split filename #"/"))]
    (dotimes [n (count paths)]
      (let [name (str/join "/" (take (inc n) paths))
            file (io/file name)]
        (if-not (.exists file) (.mkdir file))))))

; =write-data
(defn write-data
  "Write compiled data as specified filename.
  If filepath is not exists, this function make directories."
  [filename data]
  (make-directories filename)
  (with-open [w (io/writer filename)]
    (spit w data)))
