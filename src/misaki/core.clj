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
  [#^File file]
  (html (generate-html file :allow-layout? false)))

; =get-post-data
(defn get-post-data
  "Get post template data from java.io.File.

  Content data(`:lazy-content`) is delayed."
  [#^File file]
  (assoc (parse-template-option  file)
         :file file
         :url  (make-post-url file)
         :date (get-date-from-file file)
         :lazy-content (delay (escape-string (generate-post-content file)))))

; =post-contains-tag?
(defn post-contains-tag?
  "Check whether post contains tag or not."
  [post-data #^String tag]
  (let [tags  (get post-data :tag [])
        names (set (map :name tags))]
    (contains? names tag)))

; =get-posts
(defn get-posts
  "Get posts data from *post-dir* directory."
  [& {:keys [tag]}]
  (filter
    #(or (nil? tag)
         (and (sequential? tag)
              (every? (partial post-contains-tag? %) tag)))
    (map get-post-data (find-clj-files *post-dir*))))

;; ## Tag Functions

; =get-all-tags
(defn get-all-tags
  "Get all(unfiltered) tags from post list."
  []
  (let [post-files (find-clj-files *post-dir*)]
    (remove nil? (mapcat (comp :tag parse-template-option) post-files))))

; =get-tags
(defn get-tags
  "Get tags from post list."
  [& {:keys [count?] :or {count? false}}]
  (let [tags (get-all-tags)]
    (->> (if count?
           (map #(assoc (first %) :count (count %)) (vals (group-by :name tags)))
           tags)
         (sort-alphabetically :name)
         distinct)))

;; ## S-exp Template Applier
(defn make-site-data
  "Make site meta data from java.io.File for HTML generator."
  [#^File file & {:keys [base tag] :or {base {}, tag nil}}]
  (let [tag? (and (not (nil? tag)) (sequential? tag))]
    (assoc (merge *site* base)
           :file     file
           :posts    (sort-by-date (if tag? (get-posts :tag tag) (get-posts)))
           :tags     (sort-alphabetically :name (get-tags :count? true))
           :tag-name (if tag? (str/join "," tag))
           :date     (get-date-from-file file))))

; =generate-html
(defn generate-html
  "Generate HTML from template file(java.io.File)."
  [#^File file & {:keys [allow-layout?] :or {allow-layout? true}}]
  (let [tmpl-fn    (load-template file allow-layout?)
        site-data  (make-site-data file)
        empty-data (with-meta '("") site-data)]

    (apply-template tmpl-fn empty-data)))


; =generate-tag-html
(defn generate-tag-html
  "Generate tag HTML from tag name(String) with `*tag-layout*` layout."
  [tag-name]
  (let [file       (io/file *tag-layout*)
        tmpl-fn    (load-template file)
        site-data  (make-site-data file :tag [tag-name])
        empty-data (with-meta '("") site-data)]
    (apply-template tmpl-fn empty-data)))

;; ## HTML Compiler

; =get-compile-fn
(defn get-compile-fn
  "Get hiccup functon from format option."
  [fmt]
  (case fmt
    "html5" #(html5 {:lang *lang*} %)
    "xhtml" #(xhtml {:lang *lang*} %)
    "html4" #(html4 %)
    #(html %)))

; =compile*
(defn- compile* [filename data]
  (let [compile-fn (-> data meta :format get-compile-fn)]
    (write-data (str *public-dir* filename)
                (compile-fn data))
    true))

; =compile-tag
(defn compile-tag
  "Compile a tag page.
  return true if compile succeeded."
  [tag-name]
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

