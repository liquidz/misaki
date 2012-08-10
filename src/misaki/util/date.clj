(ns misaki.util.date
  (:require
    [clj-time.core   :as t]
    [clj-time.format :as fmt]
    [clojure.string  :as str]
    ))

;; ## Converter for org.joda.time.DateTime

; =date->xml-schema
(defn date->xml-schema
  "Convert org.joda.time.DateTime to XML Schema.

      (date->xml-scheme (clj-time.core/now))
      ;=> \"2012-01-01T01:01:01\""
  [date]
  (if date
    (fmt/unparse
      (fmt/formatter "yyyy-MM-dd'T'HH:mm:ss")
      date)))

; =date->string
(defn date->string
  "Convert org.joda.time.DateTime to String

      (date->string (clj-time.core/now))
      ;=> \"01 Jan 2012\""
  [date]
  (if date
    (str/join
      " "
      [(.toString date "dd")
       ; Joda: "MMM" is not worked in my environment
       (nth '(_ Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec)
            (t/month date))
       (.toString date "yyyy")])))

; =year
(defn year
  "Get year from org.joda.time.DateTime"
  [date]
  (if date (t/year date)))

; =month
(defn month
  "Get month from org.joda.time.DateTime"
  [date]
  (if date (format "%02d" (t/month date))))

; =day
(defn day
  "Get day from org.joda.time.DateTime"
  [date]
  (if date (format "%02d" (t/day date))))
