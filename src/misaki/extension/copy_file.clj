(ns misaki.extension.copy-file
  "FIXME

   CONFIG
   {
     :copy-file {:ignore-extensions [:txt]}
   }"
  (:require
    [misaki.config    :refer [*config*]]
    [misaki.util.file :as file]))

(defn -main
  [m]
  (let [ext     (-> m :path file/get-last-ext keyword)
        ignores (-> *config* :copy-file (:ignore-extensions []) set)]
    (if (ignores ext)
      m
      (dissoc m :content))))
