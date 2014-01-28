(ns misaki.config
  (:require
    [clojure.tools.reader.edn :as edn]
    [clojure.string :as str]))

(def ^:dynamic *config* {})
(def ^:dynamic *config-filename* "_config.clj")

(def DEFAULT_CONFIG
  {:inputters  [:watch-directory]
   :outputters [:text :file]
   :filters    {:after [:delete-last-ext]}})

(defn load-config
  []
  (->> *config-filename*
       slurp
       edn/read-string
       (merge DEFAULT_CONFIG)))
