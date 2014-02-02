(ns misaki.loader
  "Loading functions library."
  (:require [clojure.string :as str])
  (:import [java.io FileNotFoundException]))

(def ^{:dynamic true :doc "Flag for development mode."}
  *development-mode* false)

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

(defn load-functions
  "Load public functions from specified namespace."
  [& namespace-name]
  (let [namespace-sym (make-namespace-symbol namespace-name)]
    (try
      (if *development-mode*
        (require namespace-sym :reload-all)
        (require namespace-sym))
      (some-> namespace-sym
              find-ns
              ns-publics
              sym-map->key-map)
      (catch FileNotFoundException e
        []))))

