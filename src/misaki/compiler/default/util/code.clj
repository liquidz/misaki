(ns misaki.compiler.default.util.code
  "Here document utility

  cf. [http://d.hatena.ne.jp/nokturnalmortum/20100527/1274961805](http://d.hatena.ne.jp/nokturnalmortum/20100527/1274961805)
  "
  (:use [misaki.compiler.default.config :only [*config*]]
        [misaki.util.string :only [escape-string]]
        [clojure.core.incubator :only [-?>>]])
  (:require [clojure.string :as str]))

(defn get-code-type
  "Get code type from code-highlight setting in `config`."
  [s]
  (let [code-key (keyword s)]
    (get (:code-highlight *config* {}) code-key)))

(defn dispatch-reader-macro
  [ch fun]
  (let [dm (.get (doto (.getDeclaredField clojure.lang.LispReader "dispatchMacros")
                   (.setAccessible true))
                 nil)]
    (aset dm (int ch) fun)))


(defn read-until
  "Read until end text."
  [reader end-str & {:keys [ignore-started?] :or {ignore-started? false}}]
  (let [end-seq      (map int end-str)
        start?       #(= % (int \newline))
        front-space? #(and (= % (int \space)) (= %2 end-seq))]
    (-?>>
      (loop [res nil, e end-seq, started? false]
        (if (empty? e)
          res
          (let [c (.read reader)]
            (if-not (= -1 c)
              (if (or started? ignore-started?)
                (if (= c (first e))
                  (recur (conj res c) (rest e) true)
                  ; keep `started?` with front space
                  (recur (conj res c) end-seq (front-space? c e)))
                ; start to check end-seq with newline
                (recur (conj res c) end-seq (start? c)))))))

      (drop (count end-seq)) reverse (map char) (apply str))))

(defn here-code
  "Read here code

      #-EOT
      this is here text
      EOT"
  [reader ch]
  (let [end-str   (read-until reader "\n" :ignore-started? true)
        css-class (remove nil? ["prettyprint" (get-code-type end-str)])]
    [:pre {:class (str/join " " css-class)}
     (-?>> end-str
           (read-until reader)
           escape-string
           str/trim)]))

;; Register `#-` reader macro
(dispatch-reader-macro \- here-code)

