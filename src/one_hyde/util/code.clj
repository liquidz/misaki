(ns one-hyde.util.code
  "one-hyde: here document utility

  cf. http://d.hatena.ne.jp/nokturnalmortum/20100527/1274961805")

(defn dispatch-reader-macro [ch fun]
  (let [dm (.get (doto (.getDeclaredField clojure.lang.LispReader "dispatchMacros")
                   (.setAccessible true))
                 nil)]
    (aset dm (int ch) fun)))
; http://java.sun.com/j2se/1.3/ja/docs/ja/api/java/lang/reflect/AccessibleObject.html

(defn read-until [reader end]
  (let [end (map int end)]
    (->> (loop [res nil e end]
           (if (empty? e)
             res
             (let [c (.read reader)]
               (recur (conj res c) (if (= c (first e))
                                     (rest e)
                                     end)))))
      (drop (count end)) reverse (map char) (apply str))))

(defn here-code [reader ch]
  (let [end (read-until reader "\n")]
    [:pre {:class "prettyprint"}
    (read-until reader (apply str "\n" end))]))

(dispatch-reader-macro \- here-code)

