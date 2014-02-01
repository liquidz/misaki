(ns misaki.outputter.save-content
  (:require
    [misaki.config :refer [*config*]]
    [misaki.util.file :as file]
    ;[clojure.string :as str]
    ))

(def DEFAULT_PUBLIC_DIR ".")

(defn -main
  [{:keys [path content]}]
  (when (and path content
             (= clojure.lang.Delay (type content)))
    (let [public-dir (:public-dir *config* DEFAULT_PUBLIC_DIR)
          path (file/join public-dir path)]
      ; make directories
      (-> path file/parent file/mkdirs)
      ; save file
      (spit path (force content)))))

