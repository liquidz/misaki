(ns misaki.filter.remove-last-ext
  "Filter extension for removing last path extension."
  (:require
    [misaki.util.file :as file]))

(defn remove-last-ext
  "Remove last path extension."
  [filename]
  (if-let [ext (file/get-last-ext filename)]
    (apply str (drop-last (inc (count ext)) filename))
    filename))

(defn -main
  [edn]
  (assoc edn :filename (-> edn :filename remove-last-ext)))
