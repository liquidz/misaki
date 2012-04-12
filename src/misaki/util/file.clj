(ns misaki.util.file
  "misaki: file control utility"
  (:use
    [clj-time.coerce :only [from-long]]
    [clj-time.core :only [date-time]])
  (:require
    [clojure.java.io :as io]
    [clojure.string :as str])
  (:import [java.io File]))

(def ^:dynamic *post-filename-regexp*
  #"(\d{4})[-_](\d{1,2})[-_](\d{1,2})[-_](.+)$")

; =find-files
(defn find-files
  "find files recursively"
  [dir]
  (file-seq (io/file dir)))

; =has-extension?
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
  [#^File file]
  (from-long (.lastModified file)))

; =get-date-from-file
(defn get-date-from-file
  "Get date from filename
  ex) YYYY-MM-DD
      YYYY-M-D
      YYYY_MM_DD
      YYYY_M_D"
  [#^File file]
  (let [date (nfirst (re-seq *post-filename-regexp* (.getName file)))]
    (if date
      (apply date-time (map #(Integer/parseInt %)
                            ; last => filename
                            (drop-last date)))
      (last-modified-date file))))

(defn remove-date-from-name [filename]
  (last (first (re-seq *post-filename-regexp* filename))))

; =make-directories
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

; =add-path-slash
(defn add-path-slash
  [path]
  (if path (if (.endsWith path "/") path (str path "/"))))
