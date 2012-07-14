(ns misaki.util.string
  "String utility"
  (:require [clojure.string :as str]))

; =escape-string
(defn escape-string
  "Escape string."
  [s]
  (-> s (str/replace #"&"  "&amp;")
        (str/replace #"\"" "&quot;")
        (str/replace #"<"  "&lt;")
        (str/replace #">"  "&gt;")))

; =blue
(defn blue
  "Color string with blue ASCII color code."
  [s] (str "\033[36m" s "\033[0m"))

; =red
(defn red
  "Color string with red ASCII color code."
  [s] (str "\033[31m" s "\033[0m"))
