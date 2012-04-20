(ns misaki.template
  "misaki: template"
  (:use
    [misaki transform config]
    [clojure.core.incubator :only [-?>]])
  (:require [clojure.string :as str]))

; =parse-tag
(defn- parse-tag [tag-data]
  (if-let [tags (and tag-data (str/split tag-data #"[\s,]+"))]
    (for [tag (distinct tags)]
      {:name tag
       :url  (str "/" (make-tag-output-filename tag))})))

; =parse-template-options
(defn parse-template-options
  "Parse template options

  ex) template file
      ; @layout default
      ; @title hello, world
      [:h1 \"hello world\"]

      => {:layout \"default\", :title \"hello, world\"}"
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
  (let [option (merge (meta f) (meta contents))
        contents (with-meta contents option)]
    (with-meta (f contents) option)))

; =load-template
(defn load-template
  "Load template file, and transform to function.
  Template options are contained as meta data."
  ([filename] (load-template filename true))
  ([filename allow-layout?]
   (let [data (slurp filename)
         option (parse-template-options data)]

     (if-let [layout-name (:layout option)]
       (let [; at first, evaluate parent layout
             parent-layout-fn (load-template (str *layout-dir* layout-name ".clj"))
             ; second, evaluate this layout
             layout-fn (transform data)]
         (if allow-layout?
           (with-meta
             #(apply-template parent-layout-fn
                (apply-template layout-fn %))
             (merge (meta parent-layout-fn) option))
           (with-meta layout-fn option)))
       (with-meta (transform data) option)))))
