(ns misaki.setup
  "Setup manager library."
  (:require
    [misaki.config :refer [parse-config-args]]
    [misaki.loader :refer [load-functions]]))

(def ^{:dynamic true :doc "Setup extension's namespace prefix."}
  *setup-ns-prefix*
  "misaki.setup")

(defn load-setup-function
  ""
  [name]
  (:-main (load-functions *setup-ns-prefix* name)))

(defn get-setup-extensions
  "Load setup extension's public functions."
  [config]
  (->> (:setup config)
       (map #(let [{name :name, args :args} (parse-config-args %)]
               (if-let [f (load-setup-function name)]
                 (fn [conf] (apply f conf args)))))
       (filter (comp not nil?))))

(defn run-setup-extensions
  "Run setup extensions."
  [config]
  (reduce
    (fn [res setup-f]
      (setup-f res))
    config
    (get-setup-extensions config)))
