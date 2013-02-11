(ns misaki.compiler.default.evaluator
  "S-exp Template Evaluator.
  Template string is evaluated as Function."
  (:require [misaki.compiler.default.reader :refer [read-from-string]]))

; =def?
(defn def?
  "Check whether `def` or `defn` s-exp or not."
  [x]
  (and (seq? x)
       (case (first x)
         (def defn defn- defmacro defmacro-) true
         false)))

; =split-into-def-and-body
(def split-into-def-and-body
  "Split s-exp into definition and template body using `def?`."
  (juxt (partial filter def?)
        (partial remove def?)))

; =enclose-sexp-with-list
(defn enclose-sexp-with-list
  "Enclose s-exp with list."
  [ls]
  {:pre [(sequential? ls)]}
  (cons 'list ls))

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
    `(do (use 'misaki.compiler.default.html.core
              'misaki.compiler.default.html.conv
              'misaki.compiler.default.html.util
              'misaki.util.date)
         ~@defs
         (fn [~'contents]
           (let [~'site (meta ~'contents)] ~sexp)))))

; =*eval-functions*
(def ^:dynamic *eval-functions*
  "Definition of evaluating functions."
  [enclose-sexp-with-list
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

