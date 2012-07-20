(ns misaki.util.string
  "String utility"
  (:require [clojure.string :as str]))

(def ^:private color-codes
  {:blue  "\033[36m"
   :red   "\033[31m"
   :green "\033[32m"})

; =escape-string
(defn escape-string
  "Escape string."
  [s]
  (-> s (str/replace #"&"  "&amp;")
        (str/replace #"\"" "&quot;")
        (str/replace #"<"  "&lt;")
        (str/replace #">"  "&gt;")))

; =msec->string
(defn msec->string
  [ms]
  (let [sec  (int (/ ms 1000))
        msec (format "%03d" (int (mod ms 1000)))]
    (str sec "." msec " sec")))

(defn color-string [color-code s]
  (str color-code s "\033[0m"))


; =blue
(def blue
  "Color string with blue ASCII color code."
  (partial color-string (:blue color-codes)))

; =red
(def red
  "Color string with red ASCII color code."
  (partial color-string (:red color-codes)))

; =green
(def green
  "Color string with green ASCII color code."
  (partial color-string (:green color-codes)))

; =bold
(defn bold
  "Bold string."
  [s] (str "\033[1m" s "\033[22m"))
