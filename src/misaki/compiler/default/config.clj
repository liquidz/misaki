(ns misaki.compiler.default.config
  "Configuration Manager"
  (:use [misaki.util file string sequence]
        [clojure.core.incubator :only [-?> -?>>]]
        [clj-time.core :only [date-time year month day]]
        [clostache.parser :only [render]])
  (:require
    [clojure.string :as str]
    [clojure.java.io :as io])
  (:import [java.io File FileNotFoundException]))

;; ## Default Value
(def POST_FILENAME_REGEXP    #"(\d{4})[-_](\d{1,2})[-_](\d{1,2})[-_](.+)$")
(def POST_OUTPUT_NAME_FORMAT "{{year}}/{{month}}/{{filename}}")

(def ^:dynamic *config* {})
(def ^:dynamic *site* {})

;; Public directory path. Compiled html is placed here.

(defn plugin-config
  [config]
  {:pre  [(map? config)]
   :post [#(map? %)]}
  (let [{:keys [template-dir public-dir url-base detailed-log]} config
        layout   (str template-dir (:layout-dir config))
        cljs     (:cljs config)
        cljs-out (if cljs (str public-dir (:output-to cljs)))]
    (assoc
      config
      :layout-dir layout
      :post-dir     (str template-dir (:post-dir config))
      :post         (:post-dir config)
      :tag-layout   (str layout (:tag-layout config) ".clj")
      :detailed-log (:detailed-log config false)
      :post-filename-regexp (:post-filename-regexp config POST_FILENAME_REGEXP)
      :post-filename-format (:post-filename-format config POST_OUTPUT_NAME_FORMAT)
      :post-sort-type       (:post-sort-type config :date-desc)
      :cljs-compile-options
      (if cljs
        (assoc cljs
               :src-dir    (normalize-path (str template-dir (:src-dir cljs)))
               :output-dir (if-let [dir (:output-dir cljs)]
                             (str public-dir dir)
                             (get-parent-path cljs-out))
               :output-to  cljs-out)))))

(defmacro with-config
  [config & body]
  `(binding [*config* ~config]
     ~@body))

;; ## File Cheker

; =layout-file?
(defn layout-file?
  "Check whether file is layout file or not."
  [#^File file]
  {:pre [(file? file)]}
  (str-contains? (.getAbsolutePath file) (:layout-dir *config*)))

; =post-file?
(defn post-file?
  "Check whether file is post file or not."
  [#^File file]
  {:pre [(file? file)]}
  (str-contains? (.getAbsolutePath file) (:post-dir *config*)))

;; ## Converter

; =template-name->file
(defn template-name->file
  "Convert template name to java.io.File."
  [#^String tmpl-name]
  {:pre [(string? tmpl-name)]}
  ;(io/file (str *template-dir* tmpl-name)))
  (io/file (str (:template-dir *config*) tmpl-name)))

(defn sort-type->sort-fn
  "Convert sort-type keyword to sort function."
  []
  (case (:post-sort-type *config*)
    :date       (partial sort-by-date :inc)
    :name       (partial sort-alphabetically #(.getName (:file %)))
    :title      (partial sort-alphabetically #(:title %))
    :date-desc  sort-by-date
    :name-desc  (partial sort-alphabetically :desc #(.getName (:file %)))
    :title-desc (partial sort-alphabetically :desc #(:title %))
    sort-by-date))


;; ## Filename Date Utility

; =get-date-from-file
(defn get-date-from-file
  "Get date from file(java.io.File) with `*post-filename-regexp*`."
  [#^File post-file]
  (let [date-seq (-?>> post-file (.getName)
                      (re-seq (:post-filename-regexp *config*))
                      nfirst drop-last)] ; last = filename
    (if (and date-seq (= 3 (count date-seq))
             (every? #(re-matches #"^[0-9]+$" %) date-seq))
      (apply date-time (map #(Integer/parseInt %) date-seq)))))
;
; =remove-date-from-name
(defn remove-date-from-name
  "Remove date string from filename(String)."
  [#^String filename]
  {:pre [(string? filename)]}
  (last (first (re-seq (:post-filename-regexp *config*) filename))))

;; ## Filename Generator

; =make-tag-output-filename
(defn make-tag-output-filename
  "Make tag output filename from tag name."
  [#^String tag-name]
  {:pre [(string? tag-name)]}
  (str (:tag-out-dir *config*) tag-name ".html"))

; =make-post-output-filename
(defn make-post-output-filename
  "Make post output filename from java.io.File."
  [#^File file]
  {:pre [(file? file)]}
  (let [date     (get-date-from-file file)
        filename (if date
                   (-?> (.getName file) remove-date-from-name remove-extension)
                   (remove-extension (.getName file)))]
    (render (:post-filename-format *config*)
            {:year  (-?> date year str)
             :month (-?>> date month (format "%02d"))
             :day   (-?>> date day (format "%02d"))
             :filename filename})))
;
; =make-template-output-filename
(defmulti make-template-output-filename
  "Make template output filename from template name."
  class)

(defmethod make-template-output-filename String
  [tmpl-name]
  (make-template-output-filename (template-name->file tmpl-name)))

(defmethod make-template-output-filename File
  [file]
  (if (post-file? file)
    (make-post-output-filename file)
    (remove-extension (.getName file))))

; =make-layout-filename
(defn make-layout-filename
  "Make layout filename from layout name(String)."
  [#^String layout-name]
  {:pre [(string? layout-name)]}
  (str (:layout-dir *config*) layout-name ".clj"))

;; ## URL Generator

; =make-post-url
(defn make-post-url
  "Make post url from java.io.File"
  [#^File file]
  {:pre [(file? file)]}
  (str (:url-base *config*) (make-template-output-filename file)))

; =make-tag-url
(defn make-tag-url
  "Make tag url form tag string."
  [#^String tag-name]
  {:pre [(string? tag-name)]}
  (str (:url-base *config*) (make-tag-output-filename tag-name)))


