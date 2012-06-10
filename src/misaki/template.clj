(ns misaki.template
  "misaki: template"
  (:use
    ;[misaki transform config]
    [misaki evaluator config]
    [clojure.core.incubator :only [-?>]])
  (:require [clojure.string :as str])
  (:import [java.io File]))

; =parse-tag
(defn- parse-tag [tag-data]
  (if-let [tags (and tag-data (str/split tag-data #"[\s,]+"))]
    (for [tag (distinct tags)]
      {:name tag
       :url  (str "/" (make-tag-output-filename tag))})))

; =parse-template-options
(defn parse-template-options
  "Parse template options from slurped data.
  ex) template file

      ; @layout default
      ; @title hello, world
      [:h1 \"hello world\"]

      ;=> {:layout \"default\", :title \"hello, world\"}"
  [data]
  (let [lines    (map str/trim (str/split-lines data))
        comments (filter #(= 0 (.indexOf % ";")) lines)
        params   (remove nil? (map #(re-seq #"^;+\s*@(\w+)\s+(.+)$" %) comments))
        option   (into {} (for [[[_ k v]] params] [(keyword k) v]))
        tags     (-?> option :tag parse-tag)]
    (assoc option :tag tags)))

; =apply-template
(defn apply-template
  "Apply contents data to template function."
  [f contents]
  (let [option   (merge (meta f) (meta contents))
        contents (with-meta contents option)]
    (with-meta (f contents) option)))

; =load-template
(defn load-template
  "Load template file, and transform to function.
  Template options are contained as meta data.
  
  If `allow-layout?` option is specified, you can select whether evaluate layout or not."
  ([#^File file] (load-template file true))
  ([#^File file allow-layout?]
   (let [data   (slurp file)
         option (parse-template-options data)]

     (if-let [layout-filename (-?> option :layout make-layout-filename)]
       (let [; at first, evaluate parent layout
             ; parent layout must be evaluated if layout is not allowded
             parent-layout-fn (load-template layout-filename)
             ; second, evaluate this layout
             ;layout-fn (transform data)]
             layout-fn (evaluate data)]
         (if allow-layout?
           (with-meta
             #(apply-template parent-layout-fn
                (apply-template layout-fn %))
             (merge (meta parent-layout-fn) option))
           (with-meta layout-fn option)))
       ;(with-meta (transform data) option)))))
       (with-meta (evaluate data) option)))))

