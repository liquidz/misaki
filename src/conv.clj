(ns conv
  "Data converting utilities for template"
  (:require
    [clojure.string :as str]
    [clj-time.core :as t]
    [clj-time.format :as fmt]))

; =date->xml-schema
(defn date->xml-schema [date]
  (fmt/unparse
    (fmt/formatter "yyyy-MM-dd'T'HH:mm:ss")
    date))

; =date->string
(defn date->string [date]
  (str/join
    " "
    [(.toString date "dd")
     ; Joda: "MMM" is not worked in my environment
     (nth '(_ Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec)
          (t/month date))
     (.toString date "yyyy")]))
