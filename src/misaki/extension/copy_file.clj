(ns misaki.extension.copy-file
  "FIXME

   CONFIG
   {
     :copy-file {:ignore-extensions [:txt]}
   }"
  (:require
    [misaki.config    :refer [*config*]]
    [misaki.util.file :as file]))

(defn -mains
  [edn]
  (let [ext     (-> edn :path file/get-last-ext keyword)
        ignores (-> *config* :copy-file (:ignore-extensions []) set)]
    (if (ignores ext)
      edn
      (dissoc edn :content))))

