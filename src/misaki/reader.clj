(ns misaki.reader
  "S-exp Reader."
  (:use misaki.util.code)
  (:import [java.io StringReader PushbackReader]
           [clojure.lang IDeref]))

(def _EOF_ (gensym "end-of-file"))

(defn create-pushbask-reader-with-line
  [in]
  (let [line-num (atom 1)]
    (proxy [PushbackReader IDeref] [in]
      (read []
            (let [c (proxy-super read)]
              (if (and (not= -1 c) (= \newline (char c)))
                (swap! line-num inc))
              c))
      (deref [] @line-num))))


(defn- blank-char? [c]
  (some #(= c %) [\space \tab \newline]))

(defn- skip-to [r ch]
  (let [c (.read r)]
    (if (and (not= -1 c) (not= ch (char c)))
      (recur r ch))))

(defn seek-token-start
  [rdr]
  (let [c (.read rdr)]
    (if-not (= -1 c)
      (cond
        (blank-char? (char c)) (recur rdr)
        (= \; (char c)) (do (skip-to rdr \newline) (recur rdr))
        :else (do (.unread rdr c) true)))))

(defn create-exception [ex filename line]
  (let [e  (RuntimeException. (str "...." (.getMessage ex)))
        st (StackTraceElement. "misaki.reader" "read-sexp" filename line)]
    (.setStackTrace e (into-array (list st)))
    e))

(defn read-sexp [rdr & {:keys [filename]}]
  (if (seek-token-start rdr)
    (let [line @rdr]
      (try
        (read rdr)
        (catch Exception ex
          (throw (create-exception ex filename line)))))
    _EOF_))

(defn read-from-reader
  [rdr & {:keys [path]}]
  (let [pbr (create-pushbask-reader-with-line rdr)]
    (take-while #(not= % _EOF_) (repeatedly #(read-sexp pbr :filename path)))))

(defn read-from-string
  [s & {:keys [path]}]
  (read-from-reader (StringReader. s) :path path))

