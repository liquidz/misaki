(ns one-hyde.core
  "one-hyde: micro static blog library core"
  (:use
    [one-hyde util transform]
    [hiccup.core :only [html]])
  (:require
    html
    [clojure.string :as str]
    [clojure.java.io :as io])
  (:import [java.net URLEncoder]))

(declare parse-template-options)

(def ^:dynamic *public* "public/")
(def ^:dynamic *template* "template/")
(def ^:dynamic *layouts* (str *template* "_layouts/"))
(def ^:dynamic *posts* (str *template* "posts/"))

;;; OUTPUT
(defn write-data [filename data]
  (let [filename (str *public* filename)]
    (make-directories filename)
    (with-open [w (io/writer filename)]
      (spit w data))))

;;; LAYOUTS
(defn get-layout [layout-name]
  (transform (slurp (str *layouts* layout-name ".clj"))))

(defn layout-file?
  [file]
  (not= -1 (.indexOf (.getAbsolutePath file) *layouts*)))


;;; POSTS
(defn get-post-title
  "get post title"
  [file]
  (->> (.getName file) (str *posts*) slurp parse-template-options :title))

(defn get-post-url
  "generate post url from java.io.File"
  [file]
  (str "/" *posts* (URLEncoder/encode (replace-extension file ".clj" ".html"))))

(defn get-posts
  "get posts data from *posts* directory"
  []
  (let [ls (filter #(has-extension? ".clj" %) (find-files *posts*))]
    (map #(hash-map
            :title (get-post-title %)
            :url   (get-post-url %)
            :date  (get-last-modified-date %)) ls)))

;;; TEMPLATES

(defn- sort-by-url [posts]
  (sort #(pos? (.compareTo (:url %) (:url %2))) posts))

(defn- file->template-name [file]
  (last (str/split (.getAbsolutePath file) (re-pattern *template*))))

(defn parse-template-options
  "Parse template options

  ex) template file
    ; layout: default
    ; title: hello, world
    [:h1 \"hello world\"]
  "
  [data]
  (let [lines (map str/trim (str/split-lines data))
        options (take-while #(= 0 (.indexOf % ";")) lines)]
    (into {} (for [opt options]
      (let [[k v] (str/split (str/replace-first opt #";\s*" "") #"\s*:\s*")]
        [(keyword k) v])))))

(defn generate-html [filename]
  (let [data (slurp (str *template* filename))
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

(defn -main []
  ;(some println (get-post-list))
  (compile-all-templates)
  )
