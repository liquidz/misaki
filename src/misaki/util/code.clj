(ns misaki.util.code
  "Here document utility

  cf. [http://d.hatena.ne.jp/nokturnalmortum/20100527/1274961805](http://d.hatena.ne.jp/nokturnalmortum/20100527/1274961805)
  "
  (:use misaki.config)
  (:require [clojure.string :as str]))

(defn get-code-type
  "Get code type from code-highlight setting in `config`."
  [s]
  (let [code-key (keyword s)
        config   (read-config)]
    (get (:code-highlight config) code-key)))

(defn dispatch-reader-macro
  [ch fun]
  (let [dm (.get (doto (.getDeclaredField clojure.lang.LispReader "dispatchMacros")
                   (.setAccessible true))
                 nil)]
    (aset dm (int ch) fun)))

(defn read-until
  "Read until end text."
  [reader end]
  (let [end (map int end)]
    (->> (loop [res nil e end]
           (if (empty? e)
             res
             (let [c (.read reader)]
               (recur (conj res c) (if (= c (first e))
                                     (rest e)
                                     end)))))
      (drop (count end)) reverse (map char) (apply str))))

(defn here-code
  "Read here code

      #-EOT
      this is here text
      EOT"
  [reader ch]
  (let [end-str   (read-until reader "\n")
        css-class (remove nil? ["prettyprint" (get-code-type end-str)])]
    [:pre {:class (str/join " " css-class)}
    (read-until reader (apply str "\n" end-str))]))

;; Register `#-` reader macro
(dispatch-reader-macro \- here-code)

