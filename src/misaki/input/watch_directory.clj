(ns misaki.input.watch-directory
  "Input extension for watching specified directory.

   CONFIG
   {
     :watch-directory \"foo/bar\"
   }"
  (:require
    [clojure.java.io  :as io]
    [watchtower.core  :refer :all]
    [misaki.input     :as in]
    [misaki.util.file :as file]))

(def ^{:private true}
  get-extension
  (comp keyword file/get-last-ext))

(defn parse-file
  "Parse java.io.File to hash map."
  [file base-dir]
  (let [base-abs (file/absolute-path base-dir)
        file-abs (file/absolute-path file)]
    {:file    file
     :path    (subs file-abs (inc (count base-abs)))
     :type    (get-extension file-abs)
     :content (delay (slurp file))}))

(defn -get-all
  "Get all resource."
  [config]
  (let [dir (-> config :watch-directory file/normalize)]
    (->> dir io/file file-seq
         (filter #(.isFile %))
         (map #(parse-file % dir)))))

(defn add-to-input
  [^java.io.File file base-dir]
  (in/add! (parse-file file base-dir)))

(defn -main
  "Watch specified directory, and input modified file data."
  [config]
  (let [base-dir (-> config :watch-directory file/normalize)]
    (watcher
      (list base-dir)
      (rate 50)
      (change-first? false)
      (on-change #(doseq [file %]
                    (add-to-input file base-dir))))))
