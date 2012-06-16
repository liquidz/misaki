(ns misaki.util.code
  "Here document utility

  cf. [http://d.hatena.ne.jp/nokturnalmortum/20100527/1274961805](http://d.hatena.ne.jp/nokturnalmortum/20100527/1274961805)
  "
  (:use misaki.config))

(defn get-code-type
  "Get code type from code-highlight setting in `config`."
  [s]
  (let [key (keyword s)
        config (load-config)
        type (get (:code-highlight config) key)]
    (if type (str " " type) "")))

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
  (let [end (read-until reader "\n")
        type (get-code-type end)]
    [:pre {:class (str "prettyprint" type)}
    (read-until reader (apply str "\n" end))]))

;; Register `#-` reader macro
(dispatch-reader-macro \- here-code)

