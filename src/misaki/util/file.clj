(ns misaki.util.file
  "File operation utility."
  (:require
    [clojure.string  :as str]
    [clojure.java.io :as io]))

(def ^{:doc "OS name."}
  os-name
  (.. System getProperties (get "os.name")))

(def ^{:doc "True if current environment is Windows."}
  windows?
  (zero? (.indexOf os-name "Windows")))

(def ^{:doc "Path separator."}
  separator
  (if windows? "\\" "/"))

(defn normalize
  "Normalize file path."
  [s]
  (if (and (string? s) (.endsWith s separator))
    (str/join (drop-last s))
    s))

(defn join
  "Join file paths."
  [& s]
  (->> s (map normalize)
         (str/join separator)))

(defn get-last-ext
  "Get last extension from file path."
  [s]
  (let [i (.lastIndexOf s ".")]
    (if (not= -1 i)
      (subs s (inc i)))))

(defn parent
  "Get parent path from file path."
  [s]
  (let [i (.lastIndexOf s separator)]
    (if (= -1 i)
      s
      (subs s 0 i))))

(defmulti absolute-path
  "Get absolute path."
  class)
(defmethod absolute-path java.io.File
  [file]
  (.getAbsolutePath file))
(defmethod absolute-path String
  [path]
  (.getAbsolutePath (io/file path)))

(defn mkdirs
  "Make directories recursively."
  [dir-str]
  (loop [dirs     (str/split dir-str (re-pattern separator))
         dir-name "."]
    (when-let [dir (some->> dirs first (join dir-name))]
      (.mkdir (io/file dir))
      (recur (rest dirs)
             dir))))

(defn rm-rf
  "Remove files recursively."
  [dir]
  (doseq [f (-> dir io/file file-seq reverse)]
    (.delete f)))
