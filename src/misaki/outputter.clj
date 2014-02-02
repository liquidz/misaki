(ns misaki.outputter
  (:require
    [misaki.config :refer [*config*]]
    [misaki.loader :refer [load-functions]]))

(def ^:dynamic *outputter-ns-prefix*
  "misaki.outputter")

(defn- get-outputter
  [outputter-name]
  (load-functions *outputter-ns-prefix* outputter-name))

(defn run-outputters
  [edn]
  (let [outputter-names (:outputters *config*)
        outputters (map (comp :-main get-outputter) outputter-names)
        outputters (filter (comp not nil?) outputters)]
    (doseq [out outputters]
      (out edn))))

