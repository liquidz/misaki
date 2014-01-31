(ns misaki.converter
  (:require
    [misaki.loader :refer [load-functions]]
    [misaki.config :refer :all]
    [clojure.string :as str]))

(def ^:dynamic *converter-ns-prefix*
  "misaki.converter")

(def load-converter (partial load-functions *converter-ns-prefix*))


(defn type-matched?
  [data-type converter]
  (if-let [conv-types (some-> converter :-type (apply ()))]
    (if (some #(= :* %) conv-types)
      true ; always TRUE with star
      (not (nil? (some #(= data-type %) conv-types))))))

(defn skip?
  [edn]
  (= :skip (:status edn)))

(defn load-converters
  [converter-names]
  (->> converter-names
       (map load-converter)
       (filter (comp not nil?))))

(defn run-converters
  [edn]
  (let [converters (load-converters (:converters *config*))
        converters (filter (partial type-matched? (:type edn)) converters)]

    (when-not (empty? converters)
      (loop [cnvs converters, result edn]
        (if (empty? cnvs)
          result
          (let [cnv      (first cnvs)
                config-f (:-config cnv)
                main-f   (:-main cnv)
                result   (main-f (if config-f (config-f result) result))]
            (if-not (skip? result)
              result
              (recur (rest cnvs) result))))))))


