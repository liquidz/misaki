(ns misaki.util.file
  (:require
    [clojure.string :as str]
    [clojure.java.io :as io]
    ))

(def os-name
  (.. System getProperties (get "os.name")))

(def windows?
  (zero? (.indexOf os-name "Windows")))

(def separator
  (if windows? "\\" "/"))

(defn normalize
  [s]
  (if (and (string? s) (.endsWith s separator))
    (apply str (drop-last s))
    s))

(defn join
  [& s]
  (->> s (map normalize)
         (str/join separator)))

(defn get-last-ext
  [s]
  (let [i (.lastIndexOf s ".")]
    (if (not= -1 i)
      (subs s (inc i)))))

(defn parent
  [s]
  (let [i (.lastIndexOf s separator)]
    (if (= -1 i)
      s
      (subs s 0 i))))

(defn mkdirs
  [dir-str]
  (loop [dirs     (str/split dir-str (re-pattern separator))
         dir-name "."]
    (when-let [dir (some->> dirs first (join dir-name))]
      (.mkdir (io/file dir))
      (recur (rest dirs)
             dir))))

(defn rm-rf
  [dir]
  (doseq [f (-> dir io/file file-seq reverse)]
    (.delete f)))
