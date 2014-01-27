(ns misaki.loader
  (:require [clojure.string :as str])
  (:import [java.io FileNotFoundException]))

(defn- make-namespace-symbol
  [ls]
  (->> ls
       (map name)
       (str/join ".")
       symbol))

(defn- sym-map->key-map
  [m]
  (reduce
    #(assoc % (keyword %2) (get m %2))
    {}
    (keys m)))

; =load-functions
(defn load-functions
  [& namespace-name]
  (let [namespace-sym (make-namespace-symbol namespace-name)]
    (try
      (require namespace-sym)
      (some-> namespace-sym
              find-ns
              ns-publics
              sym-map->key-map)
      (catch FileNotFoundException e
        []))))

