(ns misaki.transform
  "misaki: data transform functions")

; =wrap-list
(defn wrap-list
  "wrap slurped data as a list"
  [slurped-data]
  (str "(list " slurped-data " )"))

; =wrap-function
(defn wrap-function
  "wrap s-exp as a template function"
  [sexp]
  `(fn [~'contents]
     (let [~'site (meta ~'contents)]
       ; remove defn result in template
       (remove var? ~sexp))))

; =*transformers*
(def ^{:dynamic true
       :doc "transform functions"}
  *transformers*
  (atom [wrap-list read-string wrap-function eval]))

; =add-transformer!
(defn add-transformer!
  "add transform function to *transformers*"
  [f]
  (swap! *transformers* conj f))

; =transform
(defn transform
  "transform slurped data with *transformers*"
  [slurped-data]
  (reduce #(%2 %) slurped-data @*transformers*))

