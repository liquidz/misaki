(ns misaki.core
  "HTML compiler for clojure source."
  (:use
    [misaki template config]
    [misaki.util file code sequence string]
    [hiccup.core :only [html]]
    [hiccup.page :only [html5 xhtml html4]]
    [cljs.closure :only [build]])
  (:require
    misaki.html.conv
    [clojure.string :as str]
    [clojure.java.io :as io])
  (:import [java.io File]))

(declare generate-html)

;; ## Post Functions

; =generate-post-content
(defn generate-post-content
  "Generate post content without layout."
  [#^File post-file]
  {:pre [(file? post-file)]}
  (html (generate-html post-file :allow-layout? false)))

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
  "Make site meta data from java.io.File for HTML generator."
  [#^File file & {:keys [base tag] :or {base {}, tag nil}}]
  {:pre [(file? file)]}
  (let [tag?    (and (not (nil? tag)) (sequential? tag))
        sort-fn (sort-type->sort-fn)]
    (assoc (merge *site* base)
           :file     file
           :posts    (sort-fn (if tag? (get-tagged-posts tag) (get-posts)))
           :tags     (sort-alphabetically :name (get-tags :add-count? true))
           :tag-name (if tag? (str/join "," tag))
           :date     (get-date-from-file file))))

; =generate-html
(defn generate-html
  "Generate HTML from template file(java.io.File)."
  [#^File file & {:keys [allow-layout?] :or {allow-layout? true}}]
  {:pre [(file? file)]}
  (let [tmpl-fn    (load-template file allow-layout?)
        site-data  (make-site-data file)
        empty-data (with-meta '("") site-data)]

    (apply-template tmpl-fn empty-data)))


; =generate-tag-html
(defn generate-tag-html
  "Generate tag HTML from tag name(String) with `*tag-layout*` layout."
  [#^String tag-name]
  {:pre [(string? tag-name)]}
  (let [file       (io/file *tag-layout*)
        tmpl-fn    (load-template file)
        site-data  (make-site-data file :tag [tag-name])
        empty-data (with-meta '("") site-data)]
    (apply-template tmpl-fn empty-data)))

;; ## HTML Compiler

; =get-compile-fn
(defn get-compile-fn
  "Get hiccup functon from format option."
  [#^String fmt]
  (case fmt
    "html5" #(html5 {:lang *lang*} %)
    "xhtml" #(xhtml {:lang *lang*} %)
    "html4" #(html4 %)
    #(html %)))

; =compile*
(defn- compile*
  [#^String filename data]
  {:pre [(string? filename) (sequential? data)]}
  (let [compile-fn (-> data meta :format get-compile-fn)]
    (write-data (str *public-dir* filename)
                (compile-fn data))
    true))

; =compile-tag
(defn compile-tag
  "Compile a tag page.
  return true if compile succeeded."
  [#^String tag-name]
  {:pre [(string? tag-name)]}
  (try
    (compile* (make-tag-output-filename tag-name)
              (generate-tag-html tag-name))
    (catch Exception e
      (.printStackTrace e) false)))

; =compile-template
(defn compile-template
  "Compile a specified template, and write compiled data to `*public-dir*`.
  return true if compile succeeded."
  [#^File file]
  {:pre [(file? file)]}
  (try
    (compile* (make-template-output-filename file)
              (generate-html file))
    (catch Exception e (.printStackTrace e) false)))

; =compile-clojurescripts
(defn compile-clojurescripts
  "Compile clojurescripts.
  return true if compile succeeded."
  []
  (try
    (when *cljs-compile-options*
      ; make directory if not exists
      (make-directories (:output-to *cljs-compile-options*))
      ; build clojurescript
      (build (:src-dir *cljs-compile-options*)
             *cljs-compile-options*)
      true)
    (catch Exception e (.printStackTrace e) false)))

;; ## Compile Controller

; =compile-all-tags
(defn compile-all-tags
  "Compile all tag page.
  return true if all compile succeeded."
  []
  (every? #(compile-tag (:name %)) (get-tags)))

; =compile-all-templates
(defn compile-all-templates
  "Compile all template files.
  return true if all compile succeeded."
  []
  (let [files (remove layout-file? (find-clj-files *template-dir*))]
    (every? #(compile-template %) files)))

