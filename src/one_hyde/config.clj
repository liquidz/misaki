(ns one-hyde.config
  "one-hyde: control configuration")

(def ^:dynamic *config-file* "_config.clj")

(defn load-config []
  (read-string (slurp *config-file*)))
