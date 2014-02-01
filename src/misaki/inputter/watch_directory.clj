(ns misaki.inputter.watch-directory
  (:require
    [clojure.java.io  :as io]
    [watchtower.core  :refer :all]
    [misaki.inputter  :as in]
    [misaki.util.file :as file]))

(def ^{:private true}
  get-extension
  (comp keyword file/get-last-ext))

(defn parse-file
  "Parse file to hash-map."
  [file base-dir]
  (let [abs-path (.getAbsolutePath file)]
    {:file    file
     :path    (subs abs-path (inc (count base-dir)))
     :type    (get-extension abs-path)
     :content (delay (slurp file))}))

(defn -get-all
  [config]
  []
  (let [dir (-> config :watch-directory file/normalize)]
    (->> dir io/file file-seq
         (filter #(.isFile %))
         (map #(parse-file % dir)))))

(defn -main
  [config]
  (let [base-dir (-> config :watch-directory file/normalize)]
    (watcher
      (list base-dir)
      (rate 50)
      (change-first? false)
      (on-change #(doseq [file %]
                    (-> file (parse-file base-dir) in/add!))))))
