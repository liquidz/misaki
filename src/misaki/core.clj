(ns misaki.core
  "misaki: Jekyll inspired static site generator in Clojure"
  (:use
    [misaki transform config]
    [misaki.util file code]
    [clj-time.core :only [date-time after? month day year]]
    [hiccup.core :only [html]]
    [hiccup.page-helpers :only [html5 xhtml html4]])
  (:require
    html
    conv
    [clojure.string :as str]
    [clojure.java.io :as io])
  (:import
    [java.io File]
    [java.net URLEncoder]))

(declare generate-html)
(declare make-output-filename)

(def ^:dynamic *post-filename-regexp*
  #"(\d{4})[-_](\d{1,2})[-_](\d{1,2})[-_](.+)$")

; =parse-template-options
(defn parse-template-options
  "Parse template options

  ex) template file
      ; @layout default
      ; @title hello, world
      [:h1 \"hello world\"]

      => {:layout \"default\", :title \"hello, world\"}"
  [data]
  (let [lines (map str/trim (str/split-lines data))
        comments (filter #(= 0 (.indexOf % ";")) lines)
        params (remove nil? (map #(re-seq #";\s*@(\w+)\s+(.+)$" %) comments))]

    (into {} (for [[[_ k v]] params] [(keyword k) v]))))

; =load-template
(defn load-template
  "Load template file, and transform to function.
  Template options are contained as meta data."
  [filename]
  (let [data (slurp filename)
        option (parse-template-options data)]
    (with-meta (transform data) option)))

; =apply-template
(defn apply-template
  "Apply contents data to template function."
  [f contents]
  (let [option (merge (meta f) (meta contents))
        contents (with-meta contents option)]
    (with-meta (f contents) option)))

; =get-layout
(defn get-layout
  "Get layout function from layout name.
  misaki.transform is used to convert S-exp from function."
  [layout-name]
  (let [layout-fn (load-template (str *layouts-dir* layout-name ".clj"))
        option (meta layout-fn)]
    (if (:layout option)
      (let [parent-layout (-> option :layout get-layout)]
        (with-meta
          (fn [contents]
            (apply-template
              parent-layout
              (apply-template layout-fn contents)))
          (merge (meta parent-layout) option)))
      layout-fn)))

; =layout-file?
(defn layout-file?
  "Check whether file is layout file or not."
  [#^File file]
  (not= -1 (.indexOf (.getAbsolutePath file) *layouts-dir*)))

;;; POSTS
; =get-post-title
(defn get-post-title
  "Get post title from post file(java.io.File)."
  [#^File file]
  (->> (.getName file) (str *posts-dir*) slurp parse-template-options :title))

; =get-post-url
(defn get-post-url
  "Generate post url from file(java.io.File)."
  [#^File file]
  (str "/" (make-output-filename (str *posts* (.getName file)))))

; =get-date
(defn get-date
  "Get date from filename
  ex) YYYY-MM-DD
      YYYY-M-D
      YYYY_MM_DD
      YYYY_M_D"
  [#^File file]
  (let [date (nfirst (re-seq *post-filename-regexp* (.getName file)))]
    (if date
      (apply date-time (map #(Integer/parseInt %)
                            ; last => filename
                            (drop-last date)))
      (last-modified-date file))))

; =get-content
(defn get-content
  "Get post content without layout"
  [#^File file]
  (html (generate-html (file->template-name file)
                       :allow-layout? false)))

; =get-escaped-content
(defn get-escaped-content
  "Get escaped post content without layout"
  [#^File file]
  (-> (get-content file)
    (str/replace #"&" "&amp;")
    (str/replace #"\"" "&quot;")
    (str/replace #"<" "&lt;")
    (str/replace #">" "&gt;")))

; =get-posts
(defn get-posts
  "Get posts data from *posts-dir* directory."
  []
  (let [ls (filter #(has-extension? ".clj" %) (find-files *posts-dir*))]
    (map #(hash-map
            :file  %
            :title (get-post-title %)
            :url   (get-post-url %)
            :date  (get-date %)
            :lazy-content (delay (get-content %)))
         ls)))

; =post-file?
(defn post-file?
  "Check whether file is post file or not."
  [#^File file]
  (not= -1 (.indexOf (.getAbsolutePath file) *posts-dir*)))

;;; TEMPLATES
; =sort-by-date
(defn- sort-by-date [posts]
  (sort #(after? (:date %) (:date %2)) posts))

; =generate-html
(defn generate-html
  "Generate HTML from template."
  [tmpl-name & {:keys [allow-layout?] :or {allow-layout? true}}]
  (let [filename (str *template-dir* tmpl-name)
        tmpl-fn (load-template filename)
        empty-data (with-meta '("") {:posts (sort-by-date (get-posts))
                                     :date  (get-date (io/file filename))})
        contents (apply-template tmpl-fn empty-data)]

    (if (and allow-layout? (-> tmpl-fn meta :layout))
      (apply-template (-> tmpl-fn meta :layout get-layout) contents)
      contents)))

; =get-template-files
(defn get-template-files
  "get all template files(java.io.File) from *template-dir*"
  []
  (remove #(or (.isDirectory %) (layout-file? %))
          (find-files *template-dir*)))

;; COMPILE
; =get-compile-fn
(defn get-compile-fn
  "Get hiccup functon to compile sexp"
  [fmt]
  (case fmt
    "html5" #(html5 %)
    "xhtml" #(xhtml %)
    "html4" #(html4 %)
    #(html %)))

; =make-output-filename
(defn make-output-filename
  "Make output filename from template name"
  [tmpl-name]
  (let [file (template-name->file tmpl-name)
        date (get-date file)]
    (if (post-file? file)
      (format "%04d/%02d/%s" (year date) (month date)
              (delete-extension
                (last (first (re-seq *post-filename-regexp* tmpl-name)))))
      (delete-extension tmpl-name))))

; =compile-template
(defn compile-template
  "Compile a specified template.
  return true if compile is successed"
  [tmpl-name]
  (try
      (let [data (generate-html tmpl-name)
            compile-fn (-> data meta :format get-compile-fn)]
        (write-data
          (str *public-dir* (make-output-filename tmpl-name))
          (compile-fn data))
        true)
    (catch Exception e (.printStackTrace e) false)))

; =compile-all-templates
(defn compile-all-templates
  "Compile all template files.
  return true if all compile is successed"
  []
  (every? #(compile-template %)
          (map file->template-name (get-template-files))))

