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

(defn skip
  "Returns hash map which means skipping."
  []
  {:status :skip})

(defn get-converters
  "Load converter's public functions."
  [converter-names]
  (->> converter-names
       (map (partial load-functions *converter-ns-prefix*))
       (filter (comp not nil?))))

(defn- apply-converter*
  [edn converter]
  (let [config-f (:-config converter identity)
        main-f   (:-main converter)]
    (if main-f
      (-> edn config-f main-f))))

(defn- find-first
  [pred col]
  (loop [col col]
    (if-let [x (first col)]
      (if (pred x)
        x
        (recur (rest col))))))

(defn apply-converters
  "Apply converter functions to specified map data."
  [edn]
  (let [converters (get-converters (:converters *config*))
        converters (filter (partial type-matched? (:type edn)) converters)]
    (->> converters
         (map (partial apply-converter* edn))
         (find-first #(and (not (nil? %))
                           (not (skip? %)))))))

