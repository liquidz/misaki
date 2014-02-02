(ns misaki.converter.copy-file
  "FIXME

   CONFIG
   {
     :except-extensions [:txt]
   }"
  (:require
    [misaki.config    :refer [*config*]]
    [misaki.converter :refer [skip]]
    [misaki.util.file :as file]))

(defn -type
  []
  (list :*))

(defn -config
  [conf]
  (let [copy-file-conf (:copy-file conf {})]
    (assoc conf
           :copy-file (merge {:except-extensions []} copy-file-conf))))

(defn -main
  [edn]
  (let [ext (-> edn :path file/get-last-ext keyword)]
    (if (some #(= ext %) (-> *config* :copy-file :except-extensions))
      (skip)
      (dissoc edn :content))))

