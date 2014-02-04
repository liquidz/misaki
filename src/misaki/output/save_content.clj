(ns misaki.output.save-content
  "Output extension to save resource content.

   CONFIG
   {
     :public-dir \"path/to/public/dir\"
   }"
  (:require
    [misaki.config    :refer [*config*]]
    [misaki.util.file :as file]))

(def ^{:private true} DEFAULT_PUBLIC_DIR ".")

(defn -main
  "Save content as a file."
  [{:keys [path content]}]
  (when (and path content
             (= clojure.lang.Delay (type content)))
    (let [public-dir (:public-dir *config* DEFAULT_PUBLIC_DIR)
          path (file/join public-dir path)]
      ; make directories
      (-> path file/parent file/mkdirs)
      ; save file
      (spit path (force content)))))

