(ns one-hyde.transform
  "one-hyde: data transform functions")

(defn _wrap-function [slurped-data]
  (str "(fn [site contents] (list \n" slurped-data "\n))"))

(defn- wrap-list
  "wrap slurped data as a list"
  [slurped-data]
  (str "(list " slurped-data " )"))

(defn- wrap-function
  "wrap s-exp as a template function"
  [sexp]
  `(fn [~'contents]
     (let [~'site (meta ~'contents)]
       ~sexp)))

(def ^{:dynamic true
       :doc "transform functions"}
  *transformers*
  (atom [wrap-list read-string wrap-function eval]))

(defn add-transformer!
  "add transform function to *transformers*"
  [f]
  (swap! *transformers* conj f))

(defn transform
  "transform slurped data with *transformers*"
  [slurped-data]
  (reduce #(%2 %) slurped-data @*transformers*))

