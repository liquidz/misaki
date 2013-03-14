(ns misaki.compiler.default.util.code
  "Here document utility

  cf. [http://d.hatena.ne.jp/nokturnalmortum/20100527/1274961805](http://d.hatena.ne.jp/nokturnalmortum/20100527/1274961805)
  "
  (:require
    [misaki.config      :refer [*config*]]
    [misaki.util.string :refer [escape-string]]
    [clojure.string     :as str]))

; =get-code-type
(defn get-code-type
  "Get code type from code-highlight setting in `config`."
  [s]
  (let [code-key (keyword s)]
    (get (:code-highlight *config* {}) code-key)))

; =dispatch-reader-macro
(defn dispatch-reader-macro
  [ch fun]
  (let [dm (.get (doto (.getDeclaredField clojure.lang.LispReader "dispatchMacros")
                   (.setAccessible true))
                 nil)]
    (aset dm (int ch) fun)))

; =read-until
(defn read-until
  "Read until end text."
  [reader end-str & {:keys [ignore-started?] :or {ignore-started? false}}]
  (let [end-seq      (map int end-str)
        start?       #(= % (int \newline))
        front-space? #(and (= % (int \space)) (= %2 end-seq))]
    (some->>
      (loop [res nil, e end-seq, started? false]
        (if (empty? e)
          res
          (let [c (.read reader)]
            (if-not (= -1 c)
              (if (or (empty? res) started? ignore-started?)
                (if (= c (first e))
                  (recur (conj res c) (rest e) true)
                  ; keep `started?` with front space
                  (recur (conj res c) end-seq (or (start? c) (front-space? c e))))
                ; start to check end-seq with newline
                (recur (conj res c) end-seq (start? c)))))))

      (drop (count end-seq)) reverse (map char) (apply str))))

; =here-code
(defn here-code
  "Read here code

      #-EOT
      this is here text
      EOT"
  [reader ch]
  (let [end-str   (read-until reader "\n" :ignore-started? true)
        css-class (remove nil? ["prettyprint" (get-code-type end-str)])]
    [:pre {:class (str/join " " css-class)}
     (some->> end-str
              (read-until reader)
              escape-string
              str/trim)]))

;; Register `#-` reader macro
(dispatch-reader-macro \- here-code)
(dispatch-reader-macro \# here-code)

