(ns one-hyde.core
  "one-hyde: micro static blog library core"
  (:use
    [one-hyde transform config]
    [one-hyde.util file code]
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

(declare ^{:dynamic true, :doc "Template and layout option in generating template"}
         *this-option*)
(def ^:dynamic *post-filename-regexp*
  #"(\d{4})[-_](\d{1,2})[-_](\d{1,2})[-_](.+)$")

; =merge-option!
(defn merge-option!
  "Merge option to current template option (DESTRUCTIVE)"
  [opt]
  (swap! *this-option* #(merge %2 %) opt))

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

; =get-layout
(defn get-layout
  "Get layout function from layout name.
  one-hyde.transform is used to convert S-exp from function."
  [layout-name]
  (let [data (slurp (str *layouts-dir* layout-name ".clj"))
        options (parse-template-options data)
        layout-fn (transform data)]
    (merge-option! options)
    (if (:layout options)
      (fn [contents]
        ((get-layout (:layout options)) (layout-fn contents)))
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
        data (slurp filename)
        options (parse-template-options data)]
    ; set initial option
    (merge-option!  (assoc options :posts (sort-by-date (get-posts))
                                   :date (get-date (io/file filename))))
    (let [contents ((transform data) "")]
      (if (and allow-layout? (:layout options))
        ((get-layout (:layout options)) contents)
        contents))))

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
    (binding [*this-option* (atom {})]
      (let [contents ((get-compile-fn (:format @*this-option*))
                        (generate-html tmpl-name))]
        (write-data
          (str *public-dir* (make-output-filename tmpl-name))
          contents)
        true))
    (catch Exception e (.printStackTrace e) false)))

; =compile-all-templates
(defn compile-all-templates
  "Compile all template files.
  return true if all compile is successed"
  []
  (every? #(compile-template %)
          (map file->template-name (get-template-files))))

