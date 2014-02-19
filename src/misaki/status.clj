(ns misaki.status)

(def BUILD_ALL_STATUS :building-all)

(defn add-status
  [m status]
  (update-in m [:status] #(conj (or % #{}) %2) status))

(defn status-contains?
  [m status]
  (contains? (:status m) status))

(defn building-all?
  [m]
  (status-contains? m BUILD_ALL_STATUS))
