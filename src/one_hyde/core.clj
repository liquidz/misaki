(ns one-hyde.core
  "one-hyde: micro static blog library core"
  (:use
    one-hyde.transform
    [one-hyde.util file code]
    [hiccup.core :only [html]]
    [hiccup.page-helpers :only [html5 xhtml html4]])
  (:require
    html
    [clojure.string :as str]
    [clojure.java.io :as io])
  (:import
    [java.io File]
    [java.net URLEncoder]))

(declare get-layout)
(declare parse-template-options)

(def ^{:dynamic true, :doc "Public directory path. Compiled html is placed here."}
  *public-dir* "public/")
(def ^{:dynamic true, :doc "Template directory path."}
  *template-dir* "template/")
(def ^{:dynamic true, :doc "Posts placed directory name."}
  *posts* "posts/")
(def ^{:dynamic true, :doc "Layouts placed directory path."}
  *layouts-dir* (str *template-dir* "_layouts/"))
(def ^{:dynamic true, :doc "Posts placed directory path."}
  *posts-dir* (str *template-dir* *posts*))

;;; OUTPUT
; =write-data
(defn write-data
  "Write compiled data as specified filename.
  If filepath is not exists, this function make directories."
  [filename data]
  (let [filename (str *public-dir* filename)]
    (make-directories filename)
    (with-open [w (io/writer filename)]
      (spit w data))))

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
  ex)
      YYYY-MM-DD
      YYYY-M-D
      YYYY_MM_DD
      YYYY_M_D"
  [file]
  (if (= java.io.File (class file))
    (get-date (.getName file))
    (nfirst (re-seq #"(\d{4})[-_](\d{1,2})[-_](\d{1,2})" file))))

; =get-date-map
(defn get-date-map
  "Get date from filename, and return as a map"
  [file]
  (let [date (get-date file)]
    {:date date
     :date-str (if date (str/join "-" date))}))

; =get-posts
(defn get-posts
  "Get posts data from *posts-dir* directory."
  []
  (let [ls (filter #(has-extension? ".clj" %) (find-files *posts-dir*))]
    (map #(let [date (get-date %)]
            (merge
              (hash-map
                :title (get-post-title %)
                :url   (get-post-url %))
              (get-date-map %)))
         ls)))

;;; TEMPLATES
; =sort-by-date
(defn- sort-by-date [posts]
  (sort #(pos? (.compareTo (apply str (:date %))
                           (apply str (:date %2))))
        posts))

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
      (let [[k v] (str/split (str/replace-first opt #";\s*" "") #"\s*:\s*")]
        [(keyword k) v])))))

; =generate-html
(defn generate-html
  "Generate HTML from template."
  [tmpl-name]
  (let [data (slurp (str *template-dir* tmpl-name))
        options (parse-template-options data)
        site (merge options
                    (get-date-map tmpl-name)
                    {:posts (sort-by-date (get-posts))})
        contents ((merge-meta-option-fn (transform data) site)
                    (with-meta '("") site))]
    (if (:layout options)
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
      (write-data filename (f contents))
      true)
  (catch Exception _ false)))

; =compile-all-templates
(defn compile-all-templates
  "Compile all template files.
  return true if all compile is successed"
  []
  (every? #(compile-template %)
          (map file->template-name (get-template-files))))

