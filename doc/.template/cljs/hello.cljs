(ns hello)

(defn ^:export myalert [msg]
  (.alert js/window (str "Hello, " msg)))
