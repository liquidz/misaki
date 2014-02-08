(ns misaki.output.debug-print
  (:require [text-decoration.core :refer [cyan]]))

(defn -main
  [m]
  (-> (str "DEBUG: " m)
      cyan
      println))
