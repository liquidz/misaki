(ns misaki.util.file
  (:require
    [clojure.string :as str]))

(def os-name
  (.. System getProperties (get "os.name")))

(def windows?
  (zero? (.indexOf os-name "Windows")))

(def separator
  (if windows? "\\" "/"))

(defn join
  [& s]
  (str/join separator s))

(defn get-last-ext
  [s]
  (let [i (.lastIndexOf s ".")]
    (if (not= -1 i)
      (subs s (inc i)))))


(defn normalize
  [s]
  (if (and (string? s) (.endsWith s separator))
    (apply str (drop-last s))
    s))
