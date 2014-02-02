(ns misaki.inputter
  "Input resource manager library."
  (:require
    [misaki.config :refer [*config*]]
    [misaki.loader :refer [load-functions]])
  (:refer-clojure :exclude [empty?])
  )

(def ^{:dynamic true :doc "Inputter's namespace prefix."}
  *inputter-ns-prefix*
  "misaki.inputter")

(def ^{:private true :doc "Input queue."} queue (ref []))

(defn get-inputters
  "Get inputter's specified public functions.

   @fn-key: default value is `:-main`"
  ([] (get-inputters :-main))
  ([fn-key]
   (->> *config* :inputters
        (map (comp fn-key (partial load-functions *inputter-ns-prefix*)))
        (filter (comp not nil?)))))

(defn add!
  "Add input resource to queue."
  [edn]
  (dosync (alter queue conj edn)))

(defn get!
  "Get input resource from queue."
  []
  (let [edn (first @queue)]
    (dosync (alter queue (comp vec rest)))
    edn))

(defn empty?
  "Returns true if input queue has no resources."
  []
  (clojure.core/empty? @queue))

(defn get-all
  "Returns sequence of all input resources."
  []
  (mapcat (fn [f] (f)) (get-inputters :-get-all)))

(defn start-inputters!
  "Start inputting with other threads."
  []
  (doseq [f (get-inputters)]
    (.start (Thread. (partial f *config*)))))

