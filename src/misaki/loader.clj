(ns misaki.loader
  "Loading functions library."
  (:require [clojure.string :as str])
  (:import [java.io FileNotFoundException]))

(def ^{:dynamic true :doc "Flag for development mode."}
  *development-mode* false)

(defn- sym-map->key-map
  [m]
  (reduce
    #(assoc % (keyword %2) (get m %2))
    {}
    (keys m)))

(defn- ns-sym
  [& names]
  (->> names
       (map name)
       (str/join ".")
       symbol))

(defn- require-and-get-publics
  [ns-name-sym]
  (try
    (if *development-mode*
      (require ns-name-sym :reload-all)
      (require ns-name-sym))
    (some-> ns-name-sym
            find-ns
            ns-publics
            sym-map->key-map)
    (catch FileNotFoundException e
      [])))

(def ^{:doc "Load public functions from specified namespace."}
  load-functions
  (comp require-and-get-publics ns-sym))
