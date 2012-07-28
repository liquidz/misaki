(ns misaki.core
  "HTML compiler for clojure source."
  (:use
    [misaki template config]
    [misaki.util file code sequence string]
    [hiccup.core :only [html]]
    [hiccup.page :only [html5 xhtml html4]]
    [pretty-error.core :only [print-pretty-stack-trace]]
    [cljs.closure :only [build]])
  (:require
    [clojure.string :as str]
    [clojure.java.io :as io])
  (:import [java.io File]))

(declare file->template-sexp)

(defn- print-misaki-stack-trace [e]
  (print-pretty-stack-trace
    e :filter #(str-contains? (:str %) "misaki")))

;; ## Post Functions

; =generate-post-content
(defn generate-post-content
  "Generate post content without layout."
  [#^File post-file]
  {:pre [(file? post-file)]}
  (html (file->template-sexp post-file :allow-layout? false)))

; =get-post-info
(defn get-post-info
  "Get post template information from java.io.File.

  Post content(`:lazy-content`) is delayed."
  [#^File post-file]
  {:pre [(file? post-file)]}
  (assoc (parse-template-option post-file)
         :file post-file
         :url  (make-post-url post-file)
         :date (get-date-from-file post-file)
         :lazy-content (delay (escape-string (generate-post-content post-file)))))

; =post-info-contains-tag?
(defn post-info-contains-tag?
  "Check whether post information contains tag or not."
  [post-info #^String tag-str]
  {:pre [(map? post-info) (string? tag-str)]}
  (let [tags      (get post-info :tag [])
        tag-names (set (map :name tags))]
    (contains? tag-names tag-str)))

; =get-posts
(defn get-posts
  "Get posts data from *post-dir* directory."
  []
  (map get-post-info (find-clj-files *post-dir*)))

; =get-tagged-posts
(defn get-tagged-posts
  "Get tagged posts data from *post-dir* directory."
  [tag-seq]
  {:pre [(sequential? tag-seq)]}
  (filter
    #(every? (partial post-info-contains-tag? %) tag-seq)
    (get-posts)))

;; ## Tag Functions

; =get-all-tags
(defn get-all-tags
  "Get all(unfiltered) tags from post list."
  []
  (let [post-files (find-clj-files *post-dir*)]
    (remove nil? (mapcat (comp :tag parse-template-option) post-files))))

; =get-tags
(defn get-tags
  "Get tags from post list.

  Add counting by tag name if true is setted to :count-by-name?"
  [& {:keys [count-by-name?] :or {count-by-name? false}}]
  (let [tags (get-all-tags)
        tags (if count-by-name?
               (map #(assoc (first %) :count (count %)) (vals (group-by :name tags)))
               tags)]
    (distinct (sort-alphabetically :name tags))))

;; ## S-exp Template Applier
(defn make-site-data
  "Make site meta data from template java.io.File for HTML generator."
  [#^File tmpl-file & {:keys [base-option tags]
                       :or   {base-option {}, tags nil}}]
  {:pre [(file? tmpl-file)]}
  (let [with-tag? (and (not (nil? tags)) (sequential? tags))
        sort-fn   (sort-type->sort-fn)]
    (assoc (merge *site* base-option)
           :file     tmpl-file
           :posts    (sort-fn (if with-tag? (get-tagged-posts tags) (get-posts)))
           :tags     (get-tags :count-by-name? true)
           :tag-name (if with-tag? (str/join "," tags))
           :index    (get-index-filename)
           :date     (get-date-from-file tmpl-file))))

; =file->template-sexp
(defn file->template-sexp
  "Convert java.io.File to Template s-exp which can be compiled by hiccup"
  [#^File tmpl-file & {:keys [allow-layout?] :or {allow-layout? true}}]
  {:pre [(file? tmpl-file)]}
  (let [tmpl-fn    (load-template tmpl-file allow-layout?)
        site-data  (make-site-data tmpl-file)
        empty-data (with-meta '("") site-data)]
    (apply-template tmpl-fn empty-data)))


; =generate-tag-template-sexp
(defn generate-tag-template-sexp
  "Generate tag template s-exp from tag name(String) with `*tag-layout*` layout."
  [#^String tag-name]
  {:pre [(string? tag-name)]}
  (let [file       (io/file *tag-layout*)
        tmpl-fn    (load-template file)
        site-data  (make-site-data file :tags [tag-name])
        empty-data (with-meta '("") site-data)]
    (apply-template tmpl-fn empty-data)))

;; ## HTML Compiler

; =get-compile-fn
(defn get-compile-fn
  "Get hiccup functon from format option."
  [#^String format-str]
  (case format-str
    "html5" #(html5 {:lang *lang*} %)
    "xhtml" #(xhtml {:lang *lang*} %)
    "html4" #(html4 %)
    #(html %)))

; =compile*
(defn- compile*
  [#^String output-filename template-sexp]
  {:pre [(string? output-filename) (sequential? template-sexp)]}
  (let [compile-fn (-> template-sexp meta :format get-compile-fn)]
    (write-file (str *public-dir* output-filename)
                (compile-fn template-sexp))
    true))

; =compile-tag
(defn compile-tag
  "Compile a tag page.
  return true if compile succeeded."
  [#^String tag-name]
  {:pre [(string? tag-name)]}
  (try
    (compile* (make-tag-output-filename tag-name)
              (generate-tag-template-sexp tag-name))
    (catch Exception e (print-misaki-stack-trace e) false)))

; =compile-template
(defn compile-template
  "Compile a specified template, and write compiled data to `*public-dir*`.
  return true if compile succeeded."
  [#^File tmpl-file]
  {:pre [(file? tmpl-file)]}
  (try
    (compile* (make-template-output-filename tmpl-file)
              (file->template-sexp tmpl-file))
    (catch Exception e (print-misaki-stack-trace e) false)))

; =compile-clojurescripts
(defn compile-clojurescripts
  "Compile clojurescripts.
  return true if compile succeeded."
  []
  (try
    (when *cljs-compile-options*
      ; make directory if not exists
      (make-directories (:output-to *cljs-compile-options*))
      ; delete existing files
      (delete-file (:output-to *cljs-compile-options*))
      (delete-file (str (:output-dir *cljs-compile-options*) "/cljs"))
      ; build clojurescript
      (build (:src-dir *cljs-compile-options*)
             *cljs-compile-options*)
      true)
    (catch Exception e (print-misaki-stack-trace e) false)))

