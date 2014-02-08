(ns misaki.output.print-errors
  (:require [text-decoration.core :refer [red]]))

(defn -main
  [m]
  (doseq [error (:errors m [])]
    (-> (str "DEBUG: " error)
        red println)))
