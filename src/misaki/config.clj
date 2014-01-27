(ns misaki.config
  (:require
    [clojure.tools.reader.edn :as edn]
    [clojure.string :as str]))

(def ^:dynamic *config* {})
(def ^:dynamic *config-filename* "_config.clj")

(defn load-config
  []
  (-> *config-filename*
      slurp
      edn/read-string))
