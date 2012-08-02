(ns misaki.config
  "Configuration Manager"
  ;(:use [misaki.util file string sequence]
  (:use [misaki.util file string sequence]
        [clojure.core.incubator :only [-?> -?>>]]
        [clj-time.core :only [date-time year month day]]
        [clostache.parser :only [render]])
  (:require
    [clojure.string :as str]
    [clojure.java.io :as io])
  (:import [java.io File FileNotFoundException]))

;; ## Default Value
(def PORT 8080)
(def LANGUAGE "en")
(def COMPILER "default")
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

(declare ^:dynamic *config*)

(declare ^:dynamic *template-dir*)
(declare ^:dynamic *port*)
(declare ^:dynamic *url-base*)
(declare ^:dynamic *public-dir*)
(def ^:dynamic *compiler* "default")
;(declare ^:dynamic *compiler*)

;; ## Config Data Wrapper

; =read-config
(defn read-config
  "Load `*config-file*` from `*base-dir*`."
  ([]
   (read-string (slurp (str *base-dir* *config-file*))))
  ([default-value]
   (try (read-config)
        (catch FileNotFoundException e
          default-value))))

(defn load-compiler-publics [name]
  (let [sym (symbol (str "misaki.compiler." name ".core"))]
    (try
      (require sym)
      (if-let [target-ns (find-ns sym)]
        (ns-publics target-ns)
        (load-compiler-publics "default")
        )
      (catch FileNotFoundException e
        (load-compiler-publics "default")
        )
      )
    ))

(defn make-basic-config-map []
  (let [config (read-config)]
    (assoc
      config
      :public-dir   (str *base-dir* (:public-dir config))
      :template-dir (str *base-dir* (:template-dir config))
      :port         (:port config PORT)
      :lang         (:lang config LANGUAGE)
      :site         (:site config {})
      :url-base     (normalize-path (:url-base config "/"))
      :detailed-log (:detailed-log config false)
      :compiler     (load-compiler-publics (:compiler config COMPILER))
      )))

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
  `(let [config#   (make-basic-config-map)]
     (binding
       [*template-dir* (:template-dir config#)
        *public-dir*   (:public-dir config#)
        *port*         (:port config# PORT)
        *url-base*     (normalize-path (:url-base config# "/"))
        *compiler*     (load-compiler-publics (get config# :compiler "default"))]
       ~@body)))

;; ## File Cheker

; =config-file?
(defn config-file?
  "Check whether file is config file or not."
  [#^File file]
  {:pre [(file? file)]}
  (= *config-file* (.getName file)))

;; =layout-file?
;(defn layout-file?
;  "Check whether file is layout file or not."
;  [#^File file]
;  {:pre [(file? file)]}
;  (str-contains? (.getAbsolutePath file) *layout-dir*))

;; =post-file?
;(defn post-file?
;  "Check whether file is post file or not."
;  [#^File file]
;  {:pre [(file? file)]}
;  (str-contains? (.getAbsolutePath file) *post-dir*))

;; ## Converter

;; =template-name->file
;(defn template-name->file
;  "Convert template name to java.io.File."
;  [#^String tmpl-name]
;  {:pre [(string? tmpl-name)]}
;  (io/file (str *template-dir* tmpl-name)))
;
;(defn sort-type->sort-fn
;  "Convert sort-type keyword to sort function."
;  []
;  (case *post-sort-type*
;    :date       (partial sort-by-date :inc)
;    :name       (partial sort-alphabetically #(.getName (:file %)))
;    :title      (partial sort-alphabetically #(:title %))
;    :date-desc  sort-by-date
;    :name-desc  (partial sort-alphabetically :desc #(.getName (:file %)))
;    :title-desc (partial sort-alphabetically :desc #(:title %))
;    sort-by-date))
;
;
;;; ## Filename Date Utility
;
;; =get-date-from-file
;(defn get-date-from-file
;  "Get date from file(java.io.File) with `*post-filename-regexp*`."
;  [#^File post-file]
;  (let [date-seq (-?>> post-file (.getName)
;                      (re-seq *post-filename-regexp*)
;                      nfirst drop-last)] ; last = filename
;    (if (and date-seq (= 3 (count date-seq))
;             (every? #(re-matches #"^[0-9]+$" %) date-seq))
;      (apply date-time (map #(Integer/parseInt %) date-seq)))))
;
;; =remove-date-from-name
;(defn remove-date-from-name
;  "Remove date string from filename(String)."
;  [#^String filename]
;  {:pre [(string? filename)]}
;  (last (first (re-seq *post-filename-regexp* filename))))
;
;;; ## Filename Generator
;
;(defn get-index-filename
;  "Get index filename string."
;  []
;  (str *url-base* *index-name*))
;
;; =make-tag-output-filename
;(defn make-tag-output-filename
;  "Make tag output filename from tag name."
;  [#^String tag-name]
;  {:pre [(string? tag-name)]}
;  (str *tag-out-dir* tag-name ".html"))
;
;; =make-post-output-filename
;(defn make-post-output-filename
;  "Make post output filename from java.io.File."
;  [#^File file]
;  {:pre [(file? file)]}
;  (let [date     (get-date-from-file file)
;        filename (if date
;                   (-?> (.getName file) remove-date-from-name remove-extension)
;                   (remove-extension (.getName file)))]
;    (render *post-filename-format*
;            {:year  (-?> date year str)
;             :month (-?>> date month (format "%02d"))
;             :day   (-?>> date day (format "%02d"))
;             :filename filename})))
;
;; =make-template-output-filename
;(defmulti make-template-output-filename
;  "Make template output filename from template name."
;  class)
;
;(defmethod make-template-output-filename String
;  [tmpl-name]
;  (make-template-output-filename (template-name->file tmpl-name)))
;
;(defmethod make-template-output-filename File
;  [file]
;  (if (post-file? file)
;    (make-post-output-filename file)
;    (remove-extension (.getName file))))
;
;; =make-layout-filename
;(defn make-layout-filename
;  "Make layout filename from layout name(String)."
;  [#^String layout-name]
;  {:pre [(string? layout-name)]}
;  (str *layout-dir* layout-name ".clj"))
;
;;; ## URL Generator
;
;; =make-post-url
;(defn make-post-url
;  "Make post url from java.io.File"
;  [#^File file]
;  {:pre [(file? file)]}
;  (str *url-base* (make-template-output-filename file)))
;
;; =make-ta-url
;(defn make-tag-url
;  "Make tag url form tag string."
;  [#^String tag-name]
;  {:pre [(string? tag-name)]}
;  (str *url-base* (make-tag-output-filename tag-name)))

;; =absolute-path
;(defn absolute-path
;  "Convert path to absolute with *url-base*"
;  [path]
;  (if (re-seq #"^https?://" path)
;    path
;    (let [path (if (.startsWith path "/")
;                 (apply str (drop 1 path))
;                 path)]
;      (str *url-base* path))))


;; ## Compiler config
;(defn- call-compiler-fn [fn-name & args]
;  (let [fn-sym (symbol (name fn-name))]
;    (if-let [f (get *compiler* fn-sym)]
;      (apply f args))))
(defn- call-compiler-fn [fn-name & args]
  (let [fn-sym (symbol (name fn-name))
        f      (get *compiler* fn-sym)]
    (apply f args)))

(defn get-watch-file-extensions []
  (call-compiler-fn :-extension))

(defn update-config []
  (let [config (make-basic-config-map)
        res    (call-compiler-fn :-config config)]
    (if res res config)))


(defn compiler-all-compile []
  (let [config (update-config)]
    (println "kiteru" (get *compiler* '-all-compile))
    ((get *compiler* '-all-compile) config)
    ;(call-compiler-fn :-all-compile config)
    ))

(defn compiler-compile [file]
  (let [config (update-config)]
    ((get *compiler* '-compile) config file)))

