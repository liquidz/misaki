(ns misaki.filter.delete-last-ext
  (:require
    [misaki.util.file :as file]
    [clojure.string :as str]
    ))

(defn delete-last-ext
  [filename]
  (if-let [ext (file/get-last-ext filename)]
    (apply str (drop-last (inc (count ext)) filename))
    filename))

(defn -main
  [edn]
  (assoc edn
         :filename (-> edn :filename delete-last-ext)))
