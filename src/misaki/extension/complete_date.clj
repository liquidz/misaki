(ns misaki.extension.complete-date
  (:require
    [clj-time.format :refer [formatter parse]]))

(def ^{:private true :doc ""}
  DEFAULT_DATE_FORMAT
  "yyyy-MM-dd-HHmmss")

(defn- take-string
  [s len]
  (let [n (count s)]
    (if (< len n)
      (subs s 0 len)
      s)))

(defn -main
  [m]
  (if-let [^java.io.File file (:file m)]
    (let [fs   (:date-format m DEFAULT_DATE_FORMAT)
          fmt  (formatter fs)
          date (try
                 (parse fmt (take-string (.getName file) (count fs)))
                 (catch IllegalArgumentException e
                   ; cannnot parse
                   nil))]
      (assoc m :date date))
    m))
