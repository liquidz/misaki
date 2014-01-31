(ns misaki.inputter.watch-directory
  (:require
    [misaki.inputter :as in]
    [misaki.util.file :as file]
    [watchtower.core :refer :all]))

(def get-extension
  (comp keyword file/get-last-ext))

(defn parse-file
  [file base-dir]
  (let [abs-path (.getAbsolutePath file)
        ]
    {:file    file
     :path    (subs abs-path (inc (count base-dir)))
     :type    (get-extension abs-path)
     :content (delay (slurp file))
     }))

(defn -get-all
  [config]
  ; FIXME
  [])

(defn -main
  [config]
  (let [base-dir (-> config :watch-directory file/normalize)]
    (watcher
      (list base-dir)
      (rate 50)
      (change-first? false)
      (on-change #(doseq [file %]
                    (-> file (parse-file base-dir) in/add!))))))
