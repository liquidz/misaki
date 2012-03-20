(ns one-hyde.transform
  "one-hyde: data transform functions")

(defn wrap-function
  "wrap slurped data with function"
  [slurped-data]
  (str "(fn [site & contents] (list \n" slurped-data "\n))"))

(def ^{:dynamic true
       :doc "transform functions"}
  *transformers*
  (atom [wrap-function read-string eval]))

(defn add-transformer!
  "add transform function to *transformers*"
  [f]
  (swap! *transformers* conj f))

(defn transform
  "transform slurped data with *transformers*"
  [slurped-data]
  (reduce #(%2 %) slurped-data @*transformers*))

