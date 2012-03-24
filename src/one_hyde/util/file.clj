(ns one-hyde.util.file
  "one-hyde: file control utility"
  (:require
    [clojure.java.io :as io]
    [clojure.string :as str])
  (:import [java.util Date]))

(defn find-files
  "find files recursively"
  [dir]
  (file-seq (io/file dir)))

(defn has-extension?
  "check whether file has specified extension or not"
  [ext file]
  (.endsWith (.getName file) ext))

(defn get-last-modified-date
  "get last modified date from file"
  [file]
  (Date. (.lastModified file)))

(defn delete-extension
  "delete file extension"
  [x]
  (if (= java.io.File (class x))
    (delete-extension (.getName x))
    (str/replace-first x #"\.[^.]+$" "")))

(defn make-directories
  "make directories which will place file"
  [filename]
  (let [paths (drop-last (str/split filename #"/"))]
    (dotimes [n (count paths)]
      (let [name (str/join "/" (take (inc n) paths))
            file (io/file name)]
        (if-not (.exists file) (.mkdir file))))))

