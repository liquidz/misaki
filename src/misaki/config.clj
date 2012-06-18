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
(def LANGUAGE "en")
(def POST_FILENAME_REGEXP #"(\d{4})[-_](\d{1,2})[-_](\d{1,2})[-_](.+)$")
(def POST_FILENAME_FORMAT "{{year}}/{{month}}/{{filename}}")

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


;; ## Config Data Wrapper

; =load-config
(defn load-config
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
   * output directory : `*base-dir*` + `*public-dir*` + (delete-filename `*output-to*`)
   * output to : `*base-dir*` + `*public-dir*` + `*output-to*`
  "
  [& body]
  `(let [config#   (load-config)
         public#   (str *base-dir* (:public-dir config#))
         template# (str *base-dir* (:template-dir config#))
         layout#   (str template# (:layout-dir config#))
         cljs#     (:cljs config#);(get config# :cljs {})
         cljs-out# (if cljs# (str public# (:output-to cljs#)))]
     (binding
       [*public-dir*   public#
        *template-dir* template#
        *post*         (:post-dir config#)
        *layout-dir*   layout#
        *post-dir*     (str template# (:post-dir config#))
        *tag-out-dir*  (:tag-out-dir config#)
        *tag-layout*   (str layout# (:tag-layout config#) ".clj")
        *lang*         (get config# :lang LANGUAGE)
        *site*         (get config# :site {})
        *compile-with-post* (:compile-with-post config#)
        *post-filename-regexp* (get config# :post-filename-regexp
                                 POST_FILENAME_REGEXP)
        *post-filename-format* (get config# :post-filename-format
                                 POST_FILENAME_FORMAT)
        *post-sort-type* (get config# :post-sort-type :date)
        *cljs-compile-options* (if cljs#
                                 (assoc cljs#
                                        :src-dir (add-path-slash (str template# (:src-dir cljs#)))
                                        :output-dir (delete-filename cljs-out#)
                                        :output-to cljs-out#))]
       ~@body)))

;; ## File Cheker

; =config-file?
(defn config-file?
  "Check whether file is config file or not."
  [#^File file]
  (= *config-file* (.getName file)))

; =layout-file?
(defn layout-file?
  "Check whether file is layout file or not."
  [#^File file]
  (not= -1 (.indexOf (.getAbsolutePath file) *layout-dir*)))

; =post-file?
(defn post-file?
  "Check whether file is post file or not."
  [#^File file]
  (not= -1 (.indexOf (.getAbsolutePath file) *post-dir*)))

;; ## Converter

; =template-name->file
(defn template-name->file
  "Convert template name to java.io.File."
  [#^String tmpl-name]
  (io/file (str *template-dir* tmpl-name)))

(defn sort-type->sort-fn
  "Convert sort-type keyword to sort function."
  []
  (case *post-sort-type*
    :date  sort-by-date ; desc
    :name  (partial sort-alphabetically #(.getName (:file %))) ; inc
    :title (partial sort-alphabetically #(:title %)) ; inc
    ;:date-desc  sort-by-date
    ;:name-desc  (partial sort-alphabetically #(.getName (:file %)))
    ;:title-desc (partial sort-alphabetically #(:title %))
    sort-by-date))


;; ## Filename Date Utility

; =get-date-from-file
(defn get-date-from-file
  "Get date from file(java.io.File) with `*post-filename-regexp*`."
  [#^File file]
  (if-let [date (-?>> (.getName file)
                      (re-seq *post-filename-regexp*)
                      nfirst
                      drop-last)] ; last = filename
    (apply date-time (map #(Integer/parseInt %) date))
    (last-modified-date file)))

; =remove-date-from-name
(defn remove-date-from-name
  "Remove date string from filename(String)."
  [#^String filename]
  (last (first (re-seq *post-filename-regexp* filename))))

;; ## Filename Generator

; =make-tag-output-filename
(defn make-tag-output-filename
  "Make tag output filename from tag name."
  [#^String tag-name]
  (str *tag-out-dir* tag-name ".html"))

; =make-post-output-filename
(defn make-post-output-filename
  "Make post output filename from java.io.File."
  [#^File file]
  (let [date (get-date-from-file file)
        filename (-?> (.getName file) remove-date-from-name delete-extension)]
    (render *post-filename-format*
            {:year  (-> date year str)
             :month (->> date month (format "%02d"))
             :day   (->> date day (format "%02d"))
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
    (delete-extension (.getName file))))

; =make-layout-filename
(defn make-layout-filename
  "Make layout filename from layout name(String)."
  [#^String layout-name]
  (str *layout-dir* layout-name ".clj"))

;; ## URL Generator

; =make-post-url
(defn make-post-url
  "Make post url from java.io.File"
  [#^File file]
  (str "/" (make-template-output-filename file)))

