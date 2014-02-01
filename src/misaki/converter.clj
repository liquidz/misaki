(ns misaki.converter
  "Map converter library."
  (:require
    [misaki.loader  :refer [load-functions]]
    [misaki.config  :refer :all]))

(def ^{:dynamic true :doc "Converter's namespace prefix."}
  *converter-ns-prefix*
  "misaki.converter")

(defn type-matched?
  "Check whether converter's type is matched to specified map data or not."
  [data-type converter]
  (if-let [conv-types (some-> converter :-type (apply ()))]
    (if (some #(= :* %) conv-types)
      true ; always TRUE with star
      (not (nil? (some #(= data-type %) conv-types))))))

(defn skip?
  "Check whether specified result means SKIP or not."
  [edn]
  (= :skip (:status edn)))

(defn load-converters
  "Load converter's public functions."
  [converter-names]
  (->> converter-names
       (map (partial load-functions *converter-ns-prefix*))
       (filter (comp not nil?))))

(defn apply-converters
  "Apply converter functions to specified map data."
  [edn]
  (let [converters (load-converters (:converters *config*))
        converters (filter (partial type-matched? (:type edn)) converters)]

    (when-not (empty? converters)
      (reduce
        (fn [result conv]
          (let [config-f (:-config conv)
                main-f   (:-main conv)
                result   (main-f (if config-f (config-f result) result))]
            (if (skip? result)
              result
              (reduced result))))
        edn
        converters))))

