(ns misaki.outputter
  (:require
    [misaki.config :refer [*config*]]
    [misaki.loader :refer [load-functions-memo]]))

(def ^:dynamic *outputter-ns-prefix*
  "misaki.outputter")

(defn- load-outputter
  [outputter-name]
  (load-functions-memo *outputter-ns-prefix* outputter-name))

(defn run-outputters
  [edn]
  (let [outputter-names (:outputters *config*)
        outputters (map #(get (load-outputter %) '-main nil) outputter-names)
        outputters (filter (comp not nil?) outputters)]
    (doseq [out outputters]
      (out edn))))

