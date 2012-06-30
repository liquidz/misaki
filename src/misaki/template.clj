(ns misaki.template
  "Template file loader"
  (:use
    [misaki evaluator config]
    [misaki.util.file :only [file?]]
    [clojure.core.incubator :only [-?>]])
  (:require [clojure.string :as str]
            [clojure.java.io :as io])
  (:import [java.io File]))


; =parse-tag-string
(defn parse-tag-string
  "Parse tag string to tag list.

      \"aa,bb\"
      ;=> [{:name \"aa\", :url TAG-PAGE-URL}
      ;    {:name \"bb\", :url TAG_PAGE-URL}]
  "
  [#^String tags]
  (if (or (nil? tags) (str/blank? tags)) ()
    (for [tag (distinct (str/split tags #"[\s\t,]+"))]
      {:name tag
       :url  (str "/" (make-tag-output-filename tag))})))

; =parse-template-option
(defmulti parse-template-option
  "Parse template options from slurped data.

      ; @layout default
      ; @title hello, world
      [:h1 \"hello world\"]

      ;=> {:layout \"default\", :title \"hello, world\"}"
  class)

(defmethod parse-template-option File
  [file] (parse-template-option (slurp file)))

(defmethod parse-template-option String
  [slurped-data]
  (let [lines  (map str/trim (str/split-lines slurped-data))
        params (remove nil? (map #(re-seq #"^;+\s*@(\w+)\s+(.+)$" %) lines))
        option (into {} (for [[[_ k v]] params] [(keyword k) v]))]
    (assoc option :tag (-> option :tag parse-tag-string))))

; =apply-template
(defn apply-template
  "Apply contents data to template function."
  [f contents]
  {:pre [(fn? f) (sequential? contents)]}
  (let [option   (merge (meta f) (meta contents))
        contents (with-meta contents option)]
    (binding [*site* option]
      (with-meta (f contents) option))))

; =load-template-data
(defn load-template-data
  "Load template slurped body(String) and option."
  [#^File file]
  {:pre [(file? file)]}
  (let [data   (slurp file)
        option (parse-template-option data)
        result (list [data option])]
    (if-let [parent (-?> option :layout make-layout-filename io/file)]
      (concat (load-template-data parent) result)
      result)))

; =load-template
(defn load-template
  "Load template file, and evaluate as function.
  Template options are contained as meta data.

  If `allow-layout?` option is specified, you can select whether evaluate layout or not."
  ([#^File file] (load-template file true))
  ([#^File file allow-layout?]
   {:pre [(file? file)]}
   (reduce
     (fn [parent-fn [template-data option]]
       (let [template-fn (evaluate-to-function template-data)]
         (with-meta
           (if (or (nil? parent-fn) (not allow-layout?))
             template-fn
             #(apply-template parent-fn (apply-template template-fn %)))
           (merge (meta parent-fn) option))))
     nil
     (load-template-data file))))
