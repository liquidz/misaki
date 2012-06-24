(ns misaki.evaluator
  "S-exp Template Evaluator")

; =def?
(defn def?
  "Check whether `def` or `defn` s-exp or not."
  [x]
  (and (seq? x)
       (or (= 'def (first x))
           (= 'defn (first x)))))

; =split-with-definition
(def ^{:doc "Split s-exp with `def?`."}
  split-with-definition
  (juxt (partial filter def?)
        (partial remove def?)))

; =wrap-list
(defn wrap-as-list
  "Wrap slurped data as a list."
  [#^String slurped-data]
  {:pre [(string? slurped-data)]}
  (str "(list " slurped-data " )"))

; =wrap-as-function
(defn wrap-as-function
  "Wrap sexp with common function like below.

      (fn [contents]
        (let [site (meta contents)]
          bodies))
  "
  [sexp]
  {:pre [(sequential? sexp)]}
  (let [[defs sexp] (split-with-definition sexp)]
    `(do (use 'misaki.html.core
              'misaki.html.conv
              'misaki.html.util)
         ~@defs
         (fn [~'contents]
           (let [~'site (meta ~'contents)] ~sexp)))))

(def ^{:dynamic true
       :doc "Definition of evaluating functions."}
  *eval-functions*
  [wrap-as-list
   read-string
   wrap-as-function
   eval])

; =evaluate
(defn evaluate
  "Evaluate template's sexp string to template function."
  [#^String sexp-str]
  {:pre [(string? sexp-str)]}
  (reduce #(%2 %) sexp-str *eval-functions*))

