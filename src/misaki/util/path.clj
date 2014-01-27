(ns misaki.util.path
  (:require
    [clojure.string :as str]))

(def os-name
  (.. System getProperties (get "os.name")))

(def windows?
  (zero? (.indexOf os-name "Windows")))

(def separator
  (if windows? "\\" "/"))

(defn join
  [& s]
  (str/join separator s))
