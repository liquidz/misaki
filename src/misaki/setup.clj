(ns misaki.setup
  "Setup manager library."
  (:require
    [misaki.loader :refer [load-functions]]))

(def ^{:dynamic true :doc "Setup extension's namespace prefix."}
  *setup-ns-prefix*
  "misaki.setup")

(defn get-setup-extensions
  "Load setup extension's public functions."
  [config]
  (->> config
       :setup
       (map (comp :-main (partial load-functions *setup-ns-prefix*)))
       (filter (comp not nil?))))

(defn run-setup-extensions
  "Run setup extensions."
  [config]
  (reduce #(%2 %1) config (get-setup-extensions config)))

