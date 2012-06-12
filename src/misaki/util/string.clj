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

; =blue
(defn blue
  "Wrap string with ASCII color code(blue)"
  [s] (str "\033[36m" s "\033[0m"))

; =red
(defn red
  "Wrap string with ASCII color code(red)"
  [s] (str "\033[31m" s "\033[0m"))
