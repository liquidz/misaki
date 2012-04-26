(ns misaki.config
  "misaki: configuration"
  (:use misaki.util.file
    [clojure.core.incubator :only [-?> -?>>]]
    [clj-time.core :only [date-time year month day]]
    [clj-time.core :only [month year]])
  (:require
    [clojure.string :as str]
    [clojure.java.io :as io])
  (:import [java.io File]))

;; ## Declarations

;; Blog base directory
;(def ^{:dynamic true} *base-dir* "./")
(def ^{:dynamic true} *base-dir* "")
;; Config filename
(def ^{:dynamic true} *config-file* "_config.clj")

;; Public directory path. Compiled html is placed here.
(declare ^{:dynamic true} *public-dir*)
;; Template directory path.
(declare ^{:dynamic true} *template-dir*)
;; Posts placed directory name.
(declare ^{:dynamic true} *post*)
;; Layouts placed directory path.
(declare ^{:dynamic true} *layout-dir*)
;; Posts placed directory path.
(declare ^{:dynamic true} *post-dir*)
;; Tag index placed directory path.
(declare ^{:dynamic true} *tag-out-dir*)
;; Tag layout name.
(declare ^{:dynamic true} *tag-layout*)
;; Default site data.
(declare ^{:dynamic true} *site*)
;; Template names which compiled with post templates.
(declare ^{:dynamic true} *compile-with-post*)
;; Site language.
(declare ^{:dynamic true} *lang*)
;; Regexp for parse post filename.
(declare ^{:dynamic true} *post-filename-regexp*)
;; Format rule for post filename.
(declare ^{:dynamic true} *post-filename-format*)
;; Compile options for ClojureScript
(declare ^{:dynamic true} *cljs-compile-options*)

;; ## Config Data Wrapper

; =load-config
(defn load-config
  "Load and read config file"
  []
  (read-string (slurp (str *base-dir* *config-file*))))

; =with-config
(defmacro with-config
  "Wrap sexp with config data"
  [& body]
  `(let [config# (load-config)
         public# (str *base-dir* (:public-dir config#))
         template# (str *base-dir* (:template-dir config#))
         cljs# (get config# :cljs {})]
     (binding
       [*public-dir*   public#
        *template-dir* template#
        *post*         (:post-dir config#)
        *layout-dir*   (str *base-dir*
                            (:template-dir config#)
                            (:layout-dir config#))
        *post-dir*     (str *base-dir*
                            (:template-dir config#)
                            (:post-dir config#))
        *tag-out-dir*  (:tag-out-dir config#)
        *tag-layout*   (str *base-dir*
                            (:template-dir config#)
                            (:layout-dir config#)
                            (:tag-layout config#) ".clj")
        *lang*         (get config# :lang "en")
        *site*         (get config# :site {})
        *compile-with-post* (:compile-with-post config#)
        *post-filename-regexp* (get config# :post-filename-regexp
                                 #"(\d{4})[-_](\d{1,2})[-_](\d{1,2})[-_](.+)$")
        *post-filename-format* (get config# :post-filename-format
                                 "%year/%month/%file")
        *cljs-compile-options* (assoc (dissoc cljs# :output-dir)
                                      :src-dir template#
                                      :output-to (str public# (:output-to cljs#)))]
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

;; ## file <-> template converter

; =file->template-name
(defn file->template-name
  "Convert java.io.File to template name.

      File<aa/bb/cc/template/index.clj>
      ;=> template/index.clj"
  [#^File file]
  (last (str/split (.getAbsolutePath file)
                   (re-pattern *template-dir*))))

; =template-name->file
(defn template-name->file
  "Convert template name to java.io.File"
  [#^String tmpl-name]
  (io/file (str *template-dir* tmpl-name)))

;; ## Filename Date Utility

; =get-date-from-file
(defn get-date-from-file
  "Get date from filename with *post-filename-regexp*

   By default:

       YYYY-MM-DD
       YYYY-M-D
       YYYY_MM_DD
       YYYY_M_D"
  [#^File file]
  (if-let [date (-?>> (.getName file)
                      (re-seq *post-filename-regexp*)
                      nfirst
                      drop-last)] ; last = filename
    (apply date-time (map #(Integer/parseInt %) date))
    (last-modified-date file)))

; =remove-date-from-name
(defn remove-date-from-name
  "Remove date string from filename"
  [#^String filename]
  (last (first (re-seq *post-filename-regexp* filename))))

;; ## Filename and URL generater

; =make-tag-output-filename
(defn make-tag-output-filename
  "Make tag output filename from tag name"
  [#^String tag-name]
  (str *tag-out-dir* tag-name ".html"))

; =make-template-output-filename
(defn make-template-output-filename
  "Make template output filename from template name"
  [#^String tmpl-name]
  (let [file (template-name->file tmpl-name)
        date (get-date-from-file file)
        filename (-?> tmpl-name remove-date-from-name delete-extension)]
    (if (post-file? file)
      (-> *post-filename-format*
        (str/replace #"%year"  (-> date year str))
        (str/replace #"%month" (->> date month (format "%02d")))
        (str/replace #"%day"   (->> date day (format "%02d")))
        (str/replace #"%file"  filename))
      (delete-extension tmpl-name))))

; =make-post-url
(defn make-post-url
  "Make post url from file(java.io.File)"
  [#^File file]
  (str "/" (make-template-output-filename (str *post* (.getName file)))))

; =make-layout-filename
(defn make-layout-filename
  "Make layout filename from layout name(String)"
  [#^String layout-name]
  (str *layout-dir* layout-name ".clj"))

