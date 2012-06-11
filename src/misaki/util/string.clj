(ns misaki.util.string
  "misaki: string utility"
  (:require [clojure.string :as str]))

; =escape-content
(defn escape-string
  "Escape string"
  [s]
  (-> s (str/replace #"&" "&amp;")
        (str/replace #"\"" "&quot;")
        (str/replace #"<" "&lt;")
        (str/replace #">" "&gt;")))
