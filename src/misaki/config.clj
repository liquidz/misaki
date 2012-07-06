(ns misaki.config
  "Configuration Manager"
  (:use [misaki.util file sequence]
        [clojure.core.incubator :only [-?> -?>>]]
        [clj-time.core :only [date-time year month day]]
        [clostache.parser :only [render]])
  (:require
    [clojure.string :as str]
    [clojure.java.io :as io])
  (:import [java.io File]))

;; ## Default Value
(def PORT 8080)
(def LANGUAGE "en")
(def POST_FILENAME_REGEXP    #"(\d{4})[-_](\d{1,2})[-_](\d{1,2})[-_](.+)$")
(def POST_OUTPUT_NAME_FORMAT "{{year}}/{{month}}/{{filename}}")

;; ## Declarations

;; Blog base directory
(def ^{:dynamic true
       :doc "Blog base directory."}
  *base-dir* "")
;; Config filename
(def ^{:dynamic true
       :doc "Config filename.
            Default filename is '_config.clj'."}
  *config-file* "_config.clj")

;; Public directory path. Compiled html is placed here.
(declare ^:dynamic *public-dir*)
;; Template directory path.
(declare ^:dynamic *template-dir*)
;; Posts placed directory name.
(declare ^:dynamic *post*)
;; Layouts placed directory path.
(declare ^:dynamic *layout-dir*)
;; Posts placed directory path.
(declare ^:dynamic *post-dir*)
;; Tag index placed directory path.
(declare ^:dynamic *tag-out-dir*)
;; Tag layout name.
(declare ^:dynamic *tag-layout*)
;; Default site data.
(declare ^:dynamic *site*)
;; Template names which compiled with post templates.
(declare ^:dynamic *compile-with-post*)
;; Server port.
(declare ^:dynamic *port*)
;; Site language.
(declare ^:dynamic *lang*)
;; Regexp for parse post filename.
(declare ^:dynamic *post-filename-regexp*)
;; Format rule for post filename.
(declare ^:dynamic *post-filename-format*)
;; Sort type of post list.
(declare ^:dynamic *post-sort-type*)
;; Compile options for ClojureScript
(declare ^:dynamic *cljs-compile-options*)
;; Current site data
(declare ^:dynamic *site*)
;; URL base
(def ^:dynamic *url-base* "/")


;; ## Config Data Wrapper

; =read-config
(defn read-config
  "Load `*config-file*` from `*base-dir*`."
  []
  (read-string (slurp (str *base-dir* *config-file*))))

; =with-config
(defmacro with-config
  "Declare config data, and wrap sexp body with them.


  * Configured directory and file setting
   * pubic directory: `*base-dir*` + `*public-dir*`
   * template directory : `*base-dir*` + `*template-dir*`
   * layout directory : `*base-dir*` + `*template-dir*` + `*layout-dir*`
   * post directory : `*base-dir*` + `*template-dir*` + `*post-dir*`
   * tag output directory : `*tag-out-dir*`
   * tag layout file : `*base-dir*` + `*template-dir*` + `*layout-dir*` + `*tag-layout*` + '.clj'


  * Configured clojurescript setting
   * source directory : `*base-dir*` + `*template-dir*` + `*src-dir*`
   * output directory : `*base-dir*` + `*public-dir*` + (get-parent-path `*output-to*`)
   * output to : `*base-dir*` + `*public-dir*` + `*output-to*`
  "
  [& body]
  `(let [config#   (read-config)
         public#   (str *base-dir* (:public-dir config#))
         template# (str *base-dir* (:template-dir config#))
         layout#   (str template#  (:layout-dir config#))
         cljs#     (:cljs config#)
         cljs-out# (if cljs# (str public# (:output-to cljs#)))]
     (binding
       [*public-dir*   public#
        *template-dir* template#
        *post*         (:post-dir config#)
        *layout-dir*   layout#
        *post-dir*     (str template# (:post-dir config#))
        *tag-out-dir*  (:tag-out-dir config#)
        *tag-layout*   (str layout# (:tag-layout config#) ".clj")
        *port*         (get config# :port PORT)
        *lang*         (get config# :lang LANGUAGE)
        *site*         (get config# :site {})
        *url-base*     (normalize-path (get config# :url-base "/"))
        *compile-with-post*    (:compile-with-post config#)
        *post-filename-regexp* (get config# :post-filename-regexp
                                 POST_FILENAME_REGEXP)
        *post-filename-format* (get config# :post-filename-format
                                 POST_OUTPUT_NAME_FORMAT)
        *post-sort-type*       (get config# :post-sort-type :date-desc)
        *cljs-compile-options* (if cljs#
                                 (assoc cljs#
                                   :src-dir    (normalize-path (str template# (:src-dir cljs#)))
                                   :output-dir (get-parent-path cljs-out#)
                                   :output-to  cljs-out#))]
       ~@body)))

;; ## File Cheker

; =config-file?
(defn config-file?
  "Check whether file is config file or not."
  [#^File file]
  {:pre [(file? file)]}
  (= *config-file* (.getName file)))

; =layout-file?
(defn layout-file?
  "Check whether file is layout file or not."
  [#^File file]
  {:pre [(file? file)]}
  (not= -1 (.indexOf (.getAbsolutePath file) *layout-dir*)))

; =post-file?
(defn post-file?
  "Check whether file is post file or not."
  [#^File file]
  {:pre [(file? file)]}
  (not= -1 (.indexOf (.getAbsolutePath file) *post-dir*)))

;; ## Converter

; =template-name->file
(defn template-name->file
  "Convert template name to java.io.File."
  [#^String tmpl-name]
  {:pre [(string? tmpl-name)]}
  (io/file (str *template-dir* tmpl-name)))

(defn sort-type->sort-fn
  "Convert sort-type keyword to sort function."
  []
  (case *post-sort-type*
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
                      (re-seq *post-filename-regexp*)
                      nfirst drop-last)] ; last = filename
    (if (and date-seq (= 3 (count date-seq))
             (every? #(re-matches #"^[0-9]+$" %) date-seq))
      (apply date-time (map #(Integer/parseInt %) date-seq)))))

; =remove-date-from-name
(defn remove-date-from-name
  "Remove date string from filename(String)."
  [#^String filename]
  {:pre [(string? filename)]}
  (last (first (re-seq *post-filename-regexp* filename))))

;; ## Filename Generator

; =make-tag-output-filename
(defn make-tag-output-filename
  "Make tag output filename from tag name."
  [#^String tag-name]
  {:pre [(string? tag-name)]}
  (str *tag-out-dir* tag-name ".html"))

; =make-post-output-filename
(defn make-post-output-filename
  "Make post output filename from java.io.File."
  [#^File file]
  {:pre [(file? file)]}
  (let [date     (get-date-from-file file)
        filename (if date
                   (-?> (.getName file) remove-date-from-name remove-extension)
                   (remove-extension (.getName file)))]
    (render *post-filename-format*
            {:year  (-?> date year str)
             :month (-?>> date month (format "%02d"))
             :day   (-?>> date day (format "%02d"))
             :filename filename})))

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
  (str *layout-dir* layout-name ".clj"))

;; ## URL Generator

; =make-post-url
(defn make-post-url
  "Make post url from java.io.File"
  [#^File file]
  {:pre [(file? file)]}
  (str *url-base* (make-template-output-filename file)))

; =make-ta-url
(defn make-tag-url
  "Make tag url form tag string."
  [#^String tag-name]
  {:pre [(string? tag-name)]}
  (str *url-base* (make-tag-output-filename tag-name)))

