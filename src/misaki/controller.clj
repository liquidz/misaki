(ns misaki.controller
  (:use [misaki config loader evaluator compiler]
        [misaki.util file seq]
        [hiccup.core :only [html]]
        )
  (:require [clojure.string :as str]
            [clojure.java.io :as io])
  (:import [java.io File])
  )

(declare get-tags)
(declare get-posts)

(defn make-site-data
  [#^File file & {:keys [base] :or {base {}}}]
  (assoc (merge *site* base)
         :file  file
         :posts (sort-by-date (get-posts))
         :tags  (sort-alphabetically :name (get-tags))
         :date  (get-date-from-file file)))

;; String

; =escape-content
(defn escape-content
  "Escape content"
  [content]
  (-> content
      (str/replace #"&" "&amp;")
      (str/replace #"\"" "&quot;")
      (str/replace #"<" "&lt;")
      (str/replace #">" "&gt;")))

;; Files
(defn find-clj-files [dir]
  (extension-filter ".clj" (find-files dir)))

(defn get-template-files [] (find-clj-files *template-dir*))
(defn get-posts-files [] (find-clj-files *post-dir*))

;; Posts

; =get-post-content
(defn get-post-content
  "Get post content without layout"
  [#^File file]
  (let [f (evaluate-template (load-template file) :allow-layout? false)
        site (make-site-data file :base (meta f))]
    (html (apply-template f (with-meta '() site)))))

(defn get-post-data
  [#^File file]
  (let [option (parse-template-option file)]
    (assoc option
           :file file
           :url  (make-post-url file)
           :date (get-date-from-file file)
           :lazy-content (delay (escape-content (get-post-content file))))))

(defn tag-contains? [post-data #^String tag]
  (let [tags  (get post-data :tag [])
        names (set (map :name tags))]
    (contains? names tag)))

(defn get-posts
  [& {:keys [tag]}]
  (filter
    #(or (nil? tag)
         (and (seq? tag)
              (every? (partial tag-contains? %) tag)))
    (map get-post-data (get-posts-files))))

;; Tags

(defn get-template-tag [#^File file]
  (:tag (parse-template-option file)))

(defn get-tags []
  (distinct (mapcat get-template-tag (get-template-files))))


;; Compile
(defn do-template-compile
  [#^File file]
  (try
    (let [tmpl-fn   (evaluate-template (load-template file))
          site-data (make-site-data file :base (meta tmpl-fn))]
        (compile* (apply-template tmpl-fn (with-meta '() site-data))))
    (catch Exception e
      (println "LOAD AND EVALUATION ERROR") ; use ascii color
      (.printStackTrace e)
      false)))

(defn do-tag-compile
  [tag-data]
  (try
    (let [file (io/file *tag-layout*)
          tmpl-fn (evaluate-template (load-template file))
          site-data (make-site-data file :base (meta tmpl-fn))
          site-data (vary-meta site-data assoc :tag-name (:name tag-data))]
      (compile* (apply-template tmpl-fn (with-meta '() site-data))))
    (catch Exception e
      (println "LOAD AND EVALUATION ERROR")
      (.printStackTrace e)
      false)))

