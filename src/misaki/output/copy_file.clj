(ns misaki.output.copy-file
  "FIXME

   CONFIG
   {
     :public-dir \"path/to/public/dir\"
   }
   "
  (:require
    [misaki.config    :refer [*config*]]
    [misaki.util.file :as file]
    [clojure.java.io  :as io]))

(def ^{:private true} DEFAULT_PUBLIC_DIR ".")

(defn -main
  [edn]
  (let [public-dir (:public-dir *config* DEFAULT_PUBLIC_DIR)]
    (when (and (contains? edn :file)
               (contains? edn :path)
               (not (contains? edn :content)))

      (->> edn :path (file/join public-dir) file/parent file/mkdirs)
      (io/copy (:file edn)
               (io/file (file/join public-dir (:path edn)))))))
