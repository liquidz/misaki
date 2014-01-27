(ns misaki.loader
  (:require [clojure.string :as str])
  (:import [java.io FileNotFoundException])
  )

(defn- make-namespace-symbol
  [ls]
  (->> ls
       (map name)
       (str/join ".")
       symbol))

; =load-functions
(defn load-functions
  [& namespace-name]
  (let [namespace-sym (make-namespace-symbol namespace-name)]
    (try
      (require namespace-sym)
      (some-> namespace-sym find-ns ns-publics)
      (catch FileNotFoundException e
        []))))

(def load-functions-memo
  (memoize load-functions))

