(ns misaki.evaluator
  "S-exp evaluating functions"
  (:require
    [clojure.string :as str]))

; =def?
(defn def?
  "Check whether `def` or `defn` s-exp or not."
  [x]
  (and (seq? x)
       (or (= 'def (first x))
           (= 'defn (first x)))))

; =split-with-definition
;; Split s-exp with def?
(def split-with-definition
  (juxt (partial filter def?)
        (partial remove def?)))

; =wrap-list
(defn wrap-as-list
  "Wrap slurped data as a list."
  [slurped-data]
  (str "(list " slurped-data " )"))

; =wrap-as-function
(defn wrap-as-function
  "Wrap sexp with common function for misaki template."
  [sexp]
  (let [[defs sexp] (split-with-definition sexp)]
    `(do (use 'misaki.html.core)
         (use 'misaki.html.conv)
         ~@defs
         (fn [~'contents]
           (let [~'site (meta ~'contents)] ~sexp)))))

(def ^:dynamic *eval-functions*
  [wrap-as-list
   read-string
   wrap-as-function
   eval])

; =evaluate
(defn evaluate
  "Evaluate template's sexp string to template function."
  [sexp-str]
  (reduce #(%2 %) sexp-str *eval-functions*))

