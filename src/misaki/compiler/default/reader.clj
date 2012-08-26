(ns misaki.compiler.default.reader
  "S-exp Reader."
  (:use misaki.compiler.default.util.code
        [pretty-error.core :only [set-stack-trace-element!]])
  (:import [java.io StringReader PushbackReader]
           [clojure.lang IDeref]))

(def _EOF_   (gensym "end-of-file"))
(def _CR_    (first "\r"))
(def _LFint_ (int \newline))


;; Utility for java.io.Reader
(defn- read-char [r]
  (let [c (.read r)]
    (if-not (= -1 c) (char c))))

(defn- blank-char? [ch]
  (some #(= ch %) [\space \tab \newline _CR_]))

(defn- skip-to [r target-ch]
  (if-let [ch (read-char r)]
    (if (not= ch target-ch) (recur r target-ch))))

; =create-pushback-reader-with-line
(defn create-pushback-reader-with-line
  "Create an instance extending java.io.PushbackReader and implementing clojure.lang.IDeref.
  This instance counts \newline and return if you deref instance.

    (let [r (create-pushback-reader-with-line (io/reader \"test.clj\"))]
      ; basic use
      (.read r)
      (.unread r (int \\x))
      ; get newline count
      (println @r))"
  [in]
  (let [line-num (atom 1)]
    (proxy [PushbackReader IDeref] [in]
      (read [] (let [c (proxy-super read)]
                 (if (and (not= -1 c) (= _LFint_ c))
                   (swap! line-num inc))
                 c))
      (deref [] @line-num))))

; =skip-to-token
(defn skip-to-token
  "Skip java.io.Reader to next token.
  Space, Tab, CR, LN, clojure comment are skipped."
  [rdr]
  (if-let [ch (read-char rdr)]
    (cond
      (blank-char? ch) (recur rdr)
      (= \; ch)        (do (skip-to rdr \newline) (recur rdr))
      :else            (do (.unread rdr (int ch)) true))))

; =create-exception
(defn create-exception
  "Create java.lang.RuntimeException with base exception, filename and error line number."
  [ex filename line]
  (set-stack-trace-element!
    (RuntimeException. (.getMessage ex))
    {:class    "misaki.reader"
     :method   "read-sexp"
     :filename filename
     :line     line}))

; =read-sexp
(defn read-sexp
  "Read one S-exp.
  If S-exp has format error, throw java.lang.RuntimeException with specified path and line number."
  [rdr & {:keys [path]}]
  (if (skip-to-token rdr)
    (let [line @rdr]
      (try
        (read rdr)
        (catch Exception ex
          (throw (create-exception ex path line)))))
    _EOF_))

; =read-from-reader
(defn read-from-reader
  "Read all S-exps from java.io.Reader."
  [rdr & {:keys [path]}]
  (let [pbr (create-pushback-reader-with-line rdr)]
    (take-while #(not= % _EOF_) (repeatedly #(read-sexp pbr :path path)))))

; =read-from-string
(defn read-from-string
  "Read all S-exps from java.lang.String"
  [s & {:keys [path]}]
  (read-from-reader (StringReader. s) :path path))

