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

(defn type-matched?
  [data-type converter]
  (if-let [conv-types (some-> converter :-types (apply ()))]
    (if (some #(= :* %) conv-types)
      true ; always TRUE with star
      (not (nil? (some #(= data-type %) conv-types))))))

(defn run-converters
  [edn]
  (let [converter-names (:converters *config*)
        converters (map load-converters converter-names)
        converters (filter (partial type-matched? (:type edn)) converters)
        ]

    (reduce
      (fn [res cnv]
        (let [config-f (:-config cnv)
              main-f   (:-run    cnv)]
          (if main-f
            (main-f (if config-f (config-f res) res))
            res)))
      edn
      converters)))


