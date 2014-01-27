(ns misaki.converter
  (:require
    [misaki.loader :refer [load-functions]]
    [misaki.config :refer :all]
    [clojure.string :as str]))

(def ^:dynamic *converter-ns-prefix*
  "misaki.converter")

(defn- load-converters
  [converter-name]
  (load-functions *converter-ns-prefix* converter-name))

(defn- filter-converters-with-type
  [data-type converters]
  (filter
    (fn [cnv]
      (if-let [f (:-types cnv)]
        (some #(= data-type %) (f))))
    converters))

(defn run-converters
  [edn]
  (let [converter-names (:converters *config*)
        converters (map load-converters converter-names)
        converters (filter-converters-with-type (:type edn) converters)]

    (reduce
      (fn [res cnv]
        (let [config-f (:-config cnv)
              main-f   (:-run    cnv)]
          (if main-f
            (main-f (if config-f (config-f res) res))
            res)))
      edn
      converters)))



