(ns misaki.evaluator
  "S-exp Template Evaluator.
  Template string is evaluated as Function."

  (:use [misaki.reader :only [read-from-string]]))

; =def?
(defn def?
  "Check whether `def` or `defn` s-exp or not."
  [x]
  (and (seq? x)
       (or (= 'def (first x))
           (= 'defn (first x)))))

; =split-into-def-and-body
(def split-into-def-and-body
  "Split s-exp into definition and template body using `def?`."
  (juxt (partial filter def?)
        (partial remove def?)))

; =enclose-str-with-list
(defn enclose-str-with-list
  "Enclose slurped string with list."
  [#^String slurped-str]
  {:pre [(string? slurped-str)]}
  (str "(list " slurped-str" )"))

; =enclose-sexp-with-function
(defn enclose-sexp-with-function
  "Enclose read s-exp with common function like below.

      (fn [contents]
        (let [site (meta contents)]
          bodies))
  "
  [sexp]
  {:pre [(sequential? sexp)]}
  (let [[defs sexp] (split-into-def-and-body sexp)]
    `(do (use 'misaki.html.core
              'misaki.html.conv
              'misaki.html.util)
         ~@defs
         (fn [~'contents]
           (let [~'site (meta ~'contents)] ~sexp)))))

(def ^{:dynamic true
       :doc "Definition of evaluating functions."}
  *eval-functions*
  [;read-from-string
   #(cons 'list %)
   ;enclose-str-with-list
   ;read-string
   enclose-sexp-with-function
   eval])

; =evaluate-to-function
(defn evaluate-to-function
  "Evaluate template's sexp string to template function."
  ([#^String sexp-str]
   (evaluate-to-function sexp-str ""))
  ([#^String sexp-str, #^String filename]
   {:pre [(string? sexp-str)]}
   (let [sexp (read-from-string sexp-str :path filename)]
     (reduce #(%2 %) sexp *eval-functions*))))

