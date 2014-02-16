(ns misaki.input
  "Input resource manager library."
  (:require
    [misaki.config :refer [*config* parse-config-args]]
    [misaki.loader :refer [load-functions]])
  (:refer-clojure  :exclude [empty?]))

(def ^{:dynamic true :doc "Input extension's namespace prefix."}
  *input-ns-prefix*
  "misaki.input")

(def ^{:private true :doc "Input queue."} queue (ref []))

(defn load-input-function
  ""
  ([name] (load-input-function name :-main))
  ([name fn-key]
   (fn-key (load-functions *input-ns-prefix*  name))))

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
  (->> (:input *config*)
       (map #(let [{name :name, args :args} (parse-config-args %)]
               (if-let [f (load-input-function name :-get-all)]
                 (fn [conf] (apply f conf args)))))
       (filter (comp not nil?))
       (mapcat #(% *config*))))

(defn start-input-extensions!
  "Start inputting with other threads."
  []
  (doseq [{name :name, args :args} (map parse-config-args (:input *config*))]
    (let [f (some-> name load-input-function (partial *config*))]
      (when f
        (.start (Thread. #(apply f args)))))))
