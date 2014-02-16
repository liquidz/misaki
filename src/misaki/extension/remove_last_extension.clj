(ns misaki.extension.remove-last-extension
  "Misaki extension for removing last path extension."
  (:require
    [misaki.util.file :as file]
    [clojure.string :as str]))

(defn remove-last-ext
  "Remove last path extension."
  [filename]
  (if-let [ext (file/get-last-ext filename)]
    (str/join (drop-last (inc (count ext)) filename))
    filename))

(defn -main
  [m]
  (if (contains? m :path)
    (assoc m :path (-> m :path remove-last-ext))
    m))
