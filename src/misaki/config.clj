(ns misaki.config
  "Configuration Manager"
  (:use [misaki.util file string sequence]
        [clojure.core.incubator :only [-?> -?>>]]
        [clj-time.core          :only [date-time year month day]]
        [text-decoration.core   :only [cyan red bold]]
        [clostache.parser       :only [render]])
  (:require
    [clojure.string  :as str]
    [clojure.java.io :as io])
  (:import [java.io File FileNotFoundException]))

;; ## Default Value
(def PORT 8080)
(def LANGUAGE "en")
(def COMPILER "default")
(def POST_FILENAME_REGEXP    #"(\d{4})[-_](\d{1,2})[-_](\d{1,2})[-_](.+)$")
(def POST_OUTPUT_NAME_FORMAT "{{year}}/{{month}}/{{filename}}")

(defn bool? [x] (or (true? x) (false? x)))

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
(declare ^:dynamic *index-name*)
(declare ^:dynamic *public-dir*)
(declare ^:dynamic *post-dir*)
(declare ^:dynamic *compiler*)

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

; =load-compiler-publics
(defn load-compiler-publics
  "Load specified compiler's public method map."
  [name]
  (let [sym (symbol (str "misaki.compiler." name ".core"))]
    (try
      (require sym)
      (if-let [target-ns (find-ns sym)]
        (ns-publics target-ns)
        (load-compiler-publics "default"))
      (catch FileNotFoundException e
        (load-compiler-publics "default")))))

; =make-basic-config-map
(defn make-basic-config-map
  "Make basic config to pass plugin's configuration."
  []
  (let [config       (read-config)
        template-dir (combine-path *base-dir* (:template-dir config))]
    (assoc
      config
      :public-dir   (combine-path *base-dir* (:public-dir config))
      :template-dir template-dir
      :post         (:post-dir config)
      :post-dir     (combine-path template-dir (:post-dir config))
      :post-filename-regexp (:post-filename-regexp config POST_FILENAME_REGEXP)
      :post-filename-format (:post-filename-format config POST_OUTPUT_NAME_FORMAT)
      :port         (:port config PORT)
      :lang         (:lang config LANGUAGE)
      :site         (:site config {})
      :index-name   (:index-name config "")
      :url-base     (normalize-path (:url-base config "/"))
      :compiler     (load-compiler-publics (:compiler config COMPILER)))))

; =with-config
(defmacro with-config
  "Declare config data, and wrap sexp body with them."
  [& body]
  `(let [config# (make-basic-config-map)]
     (binding
       [*template-dir* (:template-dir config#)
        *public-dir*   (:public-dir config#)
        *post-dir*     (:post-dir config#)
        *port*         (:port config#)
        *url-base*     (:url-base config#)
        *index-name*   (:index-name config#)
        *compiler*     (:compiler config#)]
       ~@body)))

;; ## File Cheker

; =config-file?
(defn config-file?
  "Check whether file is config file or not."
  [#^File file]
  {:pre [(file? file)]}
  (= *config-file* (.getName file)))

; =post-file?
(defn post-file?
  "Check whether file is post file or not."
  [#^File file]
  {:pre [(file? file)]}
  (str-contains? (.getAbsolutePath file) *post-dir*))

;; ## Filename Generator

; =get-index-filename
(defn get-index-filename
  "Get index filename string."
  []
  (combine-path *url-base* *index-name*))

; =template-name->file
(defn template-name->file
  "Convert template name to java.io.File."
  [#^String tmpl-name]
  {:pre [(string? tmpl-name)]}
  (io/file (combine-path *template-dir* tmpl-name)))

; =absolute-path
(defn absolute-path
  "Convert path to absolute with *url-base*"
  [path]
  (if (re-seq #"^https?://" path)
    path
    (combine-path *url-base* path)))

; =add-public-dir
(defn add-public-dir
  "Add public dir to specified path."
  [filename]
  (combine-path *public-dir* filename))

