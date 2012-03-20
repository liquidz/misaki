(ns one-hyde.core
  "one-hyde: micro static blog library core"
  (:use
    [one-hyde util transform]
    [hiccup.core :only [html]])
  (:require
    html
    [clojure.string :as str]
    [clojure.java.io :as io])
  (:import
    [java.io File]
    [java.net URLEncoder]))

(declare parse-template-options)

(def ^{:dynamic true, :doc "Public directory path. Compiled html is placed here."}
  *public* "public/")
(def ^{:dynamic true, :doc "Template directory path."}
  *template* "template/")
(def ^{:dynamic true, :doc "Posts placed directory name."}
  *posts* "posts/")
(def ^{:dynamic true, :doc "Layouts placed directory path."}
  *layouts-dir* (str *template* "_layouts/"))
(def ^{:dynamic true, :doc "Posts placed directory path."}
  *posts-dir* (str *template* *posts*))

;;; OUTPUT
(defn write-data
  "Write compiled data as specified filename.
  If filepath is not exists, this function make directories."
  [filename data]
  (let [filename (str *public* filename)]
    (make-directories filename)
    (with-open [w (io/writer filename)]
      (spit w data))))

;;; LAYOUTS
(defn get-layout
  "Get layout function from layout name.
  one-hyde.transform is used to convert S-exp from function."
  [layout-name]
  (transform (slurp (str *layouts-dir* layout-name ".clj"))))

(defn layout-file?
  "Check whether file is layout file or not."
  [#^File file]
  (not= -1 (.indexOf (.getAbsolutePath file) *layouts-dir*)))


;;; POSTS
(defn get-post-title
  "Get post title from post file(java.io.File)."
  [#^File file]
  (->> (.getName file) (str *posts-dir*) slurp parse-template-options :title))

(defn get-post-url
  "Generate post url from file(java.io.File)."
  [#^File file]
  (str "/" *posts* (URLEncoder/encode (replace-extension file ".clj" ".html"))))

(defn get-posts
  "Get posts data from *posts-dir* directory."
  []
  (let [ls (filter #(has-extension? ".clj" %) (find-files *posts-dir*))]
    (map #(hash-map
            :title (get-post-title %)
            :url   (get-post-url %)
            :date  (get-last-modified-date %)) ls)))

;;; TEMPLATES

(defn- sort-by-url [posts]
  (sort #(pos? (.compareTo (:url %) (:url %2))) posts))

(defn file->template-name
  "Convert java.io.File to template name.

  ex) File<aa/bb/cc/template/index.clj>
      => template/index.clj"
  [file]
  (last (str/split (.getAbsolutePath file) (re-pattern *template*))))

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

(defn generate-html
  "Generate HTML from template."
  [tmpl-name]
  (let [data (slurp (str *template* tmpl-name))
        options (parse-template-options data)
        site (assoc options :posts (sort-by-url (get-posts)))
        contents ((transform data) site)]
    (if (:layout options)
      ((get-layout (:layout options)) site contents)
      contents)))

(defn get-template-files []
  (remove #(or (.isDirectory %) (layout-file? %))
          (find-files *template*)))

(defn compile-template [tmpl-name]
  (let [data (html (generate-html tmpl-name))
        filename (replace-extension tmpl-name ".clj" ".html")]
    (write-data filename data)))

(defn compile-all-templates []
  (doseq [tmpl-name (map file->template-name (get-template-files))]
    (compile-template tmpl-name)))
