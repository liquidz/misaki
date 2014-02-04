(ns misaki.output
  "Output resouce manager library."
  (:require
    [misaki.config :refer [*config*]]
    [misaki.loader :refer [load-functions]]))

(def ^{:dynamic true :doc "Output extension's namespace prefix."}
  *output-ns-prefix*
  "misaki.output")

(defn get-output-extensions
  "Get output extension's public functions."
  []
  (->> *config* :output
       (map (comp :-main (partial load-functions *output-ns-prefix*)))
       (filter (comp not nil?))))

(defn run-output-extensions
  "Pass converted result to outputs."
  [edn]
  (doseq [out-f (get-output-extensions)]
    (out-f edn)))

