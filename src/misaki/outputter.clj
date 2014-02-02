(ns misaki.outputter
  "Output resouce manager library."
  (:require
    [misaki.config :refer [*config*]]
    [misaki.loader :refer [load-functions]]))

(def ^{:dynamic true :doc "Outputter's namespace prefix."}
  *outputter-ns-prefix*
  "misaki.outputter")

(defn get-outputters
  "Get outputter's public functions."
  []
  (->> *config* :outputters
       (map (comp :-main (partial load-functions *outputter-ns-prefix*)))
       (filter (comp not nil?))))

(defn run-outputters
  "Pass converted result to outputters."
  [edn]
  (doseq [out-f (get-outputters)]
    (out-f edn)))

