(ns misaki.inputter.watch-directory
  (:require
    [misaki.inputter :as inputter]
    [watchtower.core :refer :all]))

(defn- get-extension
  [filename]
  (let [len (dec (count filename))
        i   (.lastIndexOf filename ".")]
    (if (and (not= -1 i) (< i len))
      (keyword (subs filename (inc i))))))

(defn- file->edn
  [file]
  (let [abs-path (.getAbsolutePath file)]
    {
     :path (.getAbsolutePath file)
     :type (get-extension abs-path)
     }
    )
  )

(defn -main
  [config]
  (watcher
    (:watch-directory config)
    (rate 50)
    (change-first? false)
    (on-change #(doseq [file %]
                  (-> file file->edn inputter/add!)
                  )))
  )
