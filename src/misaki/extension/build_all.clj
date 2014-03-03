(ns misaki.extension.build-all
  (:require
    [misaki.core   :refer [build-all]]
    [misaki.status :refer [building-all?]]
    ))

(defn -main
  [m]
  (when-not (building-all? m)
    (build-all)))
