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

; =msec->string
(defn msec->string
  "Convert msec to string."
  [ms]
  (let [sec  (int (/ ms 1000))
        msec (format "%03d" (int (mod ms 1000)))]
    (str sec "." msec " sec")))

; =str-contains?
(defn str-contains?
  "Check whether specified string contains sub string or not."
  [s target]
  (not= -1 (.indexOf s target)))
