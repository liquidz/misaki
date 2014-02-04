(ns misaki.input
  "Input resource manager library."
  (:require
    [misaki.config :refer [*config*]]
    [misaki.loader :refer [load-functions]])
  (:refer-clojure :exclude [empty?])
  )

(def ^{:dynamic true :doc "Input extension's namespace prefix."}
  *input-ns-prefix*
  "misaki.input")

(def ^{:private true :doc "Input queue."} queue (ref []))

(defn get-inputs
  "Get input extension's specified public functions.

   @fn-key: default value is `:-main`"
  ([] (get-inputs :-main))
  ([fn-key]
   (->> *config* :input
        (map (comp fn-key (partial load-functions *input-ns-prefix*)))
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
  (mapcat (fn [f] (f)) (get-inputs :-get-all)))

(defn start-inputs!
  "Start inputting with other threads."
  []
  (doseq [f (get-inputs)]
    (.start (Thread. (partial f *config*)))))

