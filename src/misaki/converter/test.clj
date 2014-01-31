(ns misaki.converter.test
  (:require
    [clojure.string :as str]))

(defn -type
  []
  (list :txt))

(defn -config
  [edn]
  (assoc edn
         :converter-config "test"))

(defn -main
  [edn]
  (assoc edn
         :converter-run "test"))

