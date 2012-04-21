(ns misaki.transform
  "misaki: data transform functions")

;; ## Transform Utilities

; =def?
(defn def?
  "Check whether `def` or `defn` s-exp or not."
  [x]
  (and (seq? x) (some #(= % (first x)) '(def defn))))

; =split-with-definition
;; Split s-exp with def?
(def split-with-definition
  (juxt (partial filter def?)
        (partial remove def?)))

; =wrap-list
(defn wrap-list
  "Wrap slurped data as a list."
  [slurped-data]
  (str "(list " slurped-data " )"))

; =wrap-function
(defn wrap-function
  "Wrap s-exp as a template function."
  [sexp]
  (let [[defs sexp] (split-with-definition sexp)]
    `(do
       ~@defs
       (fn [~'contents]
         (use 'misaki.html.core)
         (let [~'site (meta ~'contents)]
           ~sexp)))))

;; ## Transformer

; =*transformers*
(def ^{:dynamic true
       :doc "Transform functions"}
  *transformers*
  (atom [wrap-list read-string wrap-function eval]))

; =add-transformer!
(defn add-transformer!
  "Add transform function to *transformers*."
  [f]
  (swap! *transformers* conj f))

; =transform
(defn transform
  "Transform slurped data with *transformers*."
  [slurped-data]
  (reduce #(%2 %) slurped-data @*transformers*))


