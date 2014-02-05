(ns misaki.setup.welcome
  (:require [misaki.loader :refer [*development-mode*]]))

(defn -main
  [conf]
  (println "")
  (println " == Welcome to misaki. ==")

  (when *development-mode*
    (println "!! RUNNING WITH DEVELOPMENT MODE !!"))

  (println "")
  conf)

