(ns one-hyde.core
  "one-hyde: micro static blog library core"
  (:use
    [one-hyde transform config]
;    one-hyde.transform
    [one-hyde.util file code]
    [clj-time.core :only [date-time after?]]
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

(declare get-layout)
(declare parse-template-options)
(declare generate-html)
(declare file->template-name)

;;; LAYOUTS
; =merge-meta-option-fn
(defn merge-meta-option-fn
  "Wrap function to merge content's meta data(template option) with parent's option"
  [f parent-option]
  (fn [contents]
    (with-meta
      (f contents)
      (merge parent-option (meta contents)))))

; =wrap-layout
(defn wrap-layout
  "Wrap layout function with parent layout function"
  [parent-option layout-fn]
  (merge-meta-option-fn
    (fn [contents]
      ((get-layout (:layout parent-option))
         (layout-fn contents)))
    parent-option))

; =get-layout
(defn get-layout
  "Get layout function from layout name.
  one-hyde.transform is used to convert S-exp from function."
  [layout-name]
  (let [data (slurp (str *layouts-dir* layout-name ".clj"))
        options (parse-template-options data)
        layout-fn (merge-meta-option-fn (transform data) options)]
    (if (:layout options)
      (wrap-layout options layout-fn)
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
  (str "/" *posts* (URLEncoder/encode (delete-extension file))))

; =get-date
(defn get-date
  "Get date from filename
  ex) YYYY-MM-DD
      YYYY-M-D
      YYYY_MM_DD
      YYYY_M_D"
  [#^File file]
  (let [date (nfirst (re-seq #"(\d{4})[-_](\d{1,2})[-_](\d{1,2})" (.getName file)))]
    (if date
      (apply date-time (map #(Integer/parseInt %) date))
      (last-modified-date file))))

(defn get-content
  "Get post content without layout"
  [#^File file]
  (html (generate-html (file->template-name file)
                       :allow-layout? false)))

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

;;; TEMPLATES
; =sort-by-date
(defn- sort-by-date [posts]
  (sort #(after? (:date %) (:date %2)) posts))

; =file->template-name
(defn file->template-name
  "Convert java.io.File to template name.

  ex) File<aa/bb/cc/template/index.clj>
      => template/index.clj"
  [file]
  (last (str/split (.getAbsolutePath file)
                   (re-pattern *template-dir*))))

; =parse-template-options
(defn parse-template-options
  "Parse template options

  ex) template file
      ; layout: default
      ; title: hello, world
      [:h1 \"hello world\"]"
  [data]
  (let [lines (map str/trim (str/split-lines data))
        options (take-while #(= 0 (.indexOf % ";")) lines)]
    (into {} (for [opt options]
      (let [[k & v] (str/split (str/replace-first opt #";\s*" "") #"\s*:\s*")]
        [(keyword k) (str/join ":" v)])))))

; =generate-html
(defn generate-html
  "Generate HTML from template."
  [tmpl-name & {:keys [allow-layout?] :or {allow-layout? true}}]
  (let [filename (str *template-dir* tmpl-name)
        data (slurp filename)
        options (parse-template-options data)
        site (assoc options
                    :posts (sort-by-date (get-posts))
                    :date (get-date (io/file filename)))
        contents ((merge-meta-option-fn (transform data) site)
                    (with-meta '("") site))]
    (if (and allow-layout? (:layout options))
      ((get-layout (:layout options)) contents)
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

; =compile-template
(defn compile-template
  "Compile a specified template.
  return true if compile is successed"
  [tmpl-name]
  (try
    (let [contents (generate-html tmpl-name)
          f (get-compile-fn (-> contents meta :format))
          filename (delete-extension tmpl-name)]
      (write-data (str *public-dir* filename)
                  (f contents))
      true)
  (catch Exception _ false)))

; =compile-all-templates
(defn compile-all-templates
  "Compile all template files.
  return true if all compile is successed"
  []
  (every? #(compile-template %)
          (map file->template-name (get-template-files))))

