(ns misaki.output
  "Output resouce manager library."
  (:require
    [misaki.config :refer [parse-config-args]]
    [misaki.loader :refer [load-functions]]))

(def ^{:dynamic true :doc "Output extension's namespace prefix."}
  *output-ns-prefix*
  "misaki.output")

(defn load-output-functions
  ""
  [name]
  (:-main (load-functions *output-ns-prefix* name)))


(defn run-output-extensions
  "Pass converted result to outputs."
  [m]
  (doseq [{name :name, args :args} (map parse-config-args (:output m))]
    (if-let [out-f (load-output-functions name)]
      (apply out-f m args))))
