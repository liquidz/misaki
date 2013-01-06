(ns misaki.util.file
  "File control utility"
  (:use
    [clj-time.coerce :only [from-long]])
  (:require
    [clojure.java.io :as io]
    [clojure.string :as str])
  (:import [java.io File]))

; =file?
(defn file?
  "Check whether specified data is java.io.File or not."
  [x]
  (= java.io.File (class x)))

; =normalize-path
(defn normalize-path
  "Normalize file path.
  If path does not contain '/' at end of string, add '/'."
  [path]
  (if path (if (.endsWith path "/") path (str path "/"))))

; =normalize-extension
(defn normalize-extension
  "Normalize file extension."
  [ext]
  (if ext
    (condp #(% %2) ext
      keyword? ext
      symbol?  (keyword ext)
      string?  (keyword (last (str/split ext #"\.")))
      nil)))

; =path
(defn path
  "Combine paths."
  [& paths]
  (let [dirs (drop-last paths)
        file (last paths)
        file (if (and (string? file) (.startsWith file "/"))
               (apply str (drop 1 file)) file)]
    (str (str/join "" (map normalize-path dirs)) file)))


; =find-files
(defn find-files
  "Find files in `dir` recursively."
  [dir]
  (if dir
    (file-seq (io/file dir))
    []))

; =has-extension?
(defmulti has-extension?
  "Check whether file has specified extension or not."
  #(class %2))
(defmethod has-extension? File
  [ext file]
  (has-extension? ext (.getName file)))
(defmethod has-extension? String
  [ext filename]
  (let [ext (if (keyword? ext) (name ext) ext)
        ext (if (.startsWith ext ".")
              ext (str "." ext))]
    (if (= ".*" ext)
      true
      (.endsWith filename ext))))

; =extension-filter
(defn extension-filter
  "Filter file list with `has-extension?`."
  [ext file-list]
  (filter (partial has-extension? ext) file-list))

; =find-clj-files
(defn find-clj-files
  "Find *.clj files in `dir` recursively."
  [dir]
  (extension-filter :clj (find-files dir)))

; =remove-extension
(defmulti remove-extension
  "Remove file extension.

      (remove-extension \"foo.bar\")
      ;=> \"foo\"
      (remove-extension \"foo.bar.baz\")
      ;=> \"foo.bar\""
  class)
(defmethod remove-extension File
  [file]
  (remove-extension (.getName file)))
(defmethod remove-extension String
  [s]
  (str/replace-first s #"\.[^.]+$" ""))

; =get-parent-path
(defn get-parent-path
  "Get parent path name(String).
  If specified path has no parent, returns the path itself.

      (get-parent-path \"/foo/bar\")
      ;=> \"/foo\"
      (get-parent-path \"/foo/\")
      ;=> \"/foo/\"
  "
  [path]
  (if (.endsWith path "/") path
    (normalize-path (str/join "/" (drop-last (str/split path #"/"))))))

; =last-modified-date
(defn last-modified-date
  "Get last modified date from java.io.File"
  [#^File file]
  (from-long (.lastModified file)))

; =make-directories
(defn make-directories
  "Make directories which will place file."
  [filename]
  (let [paths (drop-last (str/split filename #"/"))]
    (dotimes [n (count paths)]
      (let [name (str/join "/" (take (inc n) paths))
            file (io/file name)]
        (if-not (.exists file) (.mkdir file))))))

; =write-file
(defn write-file
  "Write compiled data as specified filename.
  If filepath is not exists, this function make directories."
  [#^String filename, #^String data]
  {:pre [(string? filename) (string? data)]}
  (make-directories filename)
  (with-open [w (io/writer filename)]
    (spit w data)))

; =delete-file
(defmulti delete-file "Delete file." class)
(defmethod delete-file File
  [file]
  (when (.exists file) (.delete file)))
(defmethod delete-file String
  [filename]
  (delete-file (io/file filename)))
