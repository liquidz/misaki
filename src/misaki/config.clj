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

(def PORT     "Default dev server port." 8080)
(def LANGUAGE "Default language."        "en")
(def COMPILER "Default compiler."        "default")
(def POST_FILENAME_REGEXP
  "Default regexp to parse post filename."
  #"(\d{4})[-_](\d{1,2})[-_](\d{1,2})[-_](.+)$")
(def POST_OUTPUT_NAME_FORMAT
  "Default format to generage post output filename."
  "{{year}}/{{month}}/{{filename}}")

;; ## Declarations

(def ^:dynamic *base-dir*
  "Blog base directory."
  "")
(def ^:dynamic *config-file*
  "Config filename.
  Default filename is '_config.clj'."
  "_config.clj")
(def ^:dynamic *config*
  "Current config map."
  {})

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
  "Load specified compiler's public method map.
  Compiler's namespace must be **misaki.compiler.FOO.core**.
  "
  [name]
  {:pre [(string? name)]}
  (let [sym (symbol (str "misaki.compiler." name ".core"))]
    (try
      (require sym)
      (if-let [target-ns (find-ns sym)]
        (ns-publics target-ns)
        (load-compiler-publics "default"))
      (catch FileNotFoundException e
        (println (red (str " * Compiler \"" name "\" is not found."
                           " Default compiler is used.")))
        (load-compiler-publics "default")))))

; =make-basic-config-map
(defn make-basic-config-map
  "Make basic config to pass plugin's configuration."
  []
  (let [config       (read-config)
        template-dir (path *base-dir* (:template-dir config))]
    (assoc
      config
      :public-dir     (path *base-dir* (:public-dir config))
      :template-dir   template-dir
      :post-dir       (if-let [post-dir (:post-dir config)]
                        (path template-dir post-dir))
      :post-sort-type (:post-sort-type config :date-desc)
      :port           (:port config PORT)
      :lang           (:lang config LANGUAGE)
      :site           (:site config {})
      :index-name     (:index-name config "")
      :url-base       (normalize-path (:url-base config "/"))
      :compiler       (load-compiler-publics (:compiler config COMPILER))
      :compile-with-post    (:compile-with-post config ())
      :post-filename-regexp (:post-filename-regexp config POST_FILENAME_REGEXP)
      :post-filename-format (:post-filename-format config POST_OUTPUT_NAME_FORMAT))))

; =with-config
(defmacro with-config
  "Declare config data, and wrap sexp body with them."
  [& body]
  `(binding [*config* (make-basic-config-map)]
     ~@body))

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
  (and (:post-dir *config*) (str-contains? (.getAbsolutePath file)
                                           (:post-dir *config*))))

;; ## Filename Date Utility

; =get-date-from-file
(defn get-date-from-file
  "Get date from file(java.io.File) with `(:post-filename-regexp *config*)`."
  [#^File post-file]
  {:pre [(or (nil? post-file) (file? post-file))]}
  (let [date-seq (-?>> post-file (.getName)
                      (re-seq (:post-filename-regexp *config*))
                      nfirst drop-last)] ; last = filename
    (if (and date-seq (= 3 (count date-seq))
             (every? #(re-matches #"^[0-9]+$" %) date-seq))
      (apply date-time (map #(Integer/parseInt %) date-seq)))))

; =remove-date-from-name
(defn remove-date-from-name
  "Remove date string from filename(String)."
  [#^String filename]
  {:pre [(string? filename)]}
  (last (first (re-seq (:post-filename-regexp *config*) filename))))


;; ## Converter

(defn sort-type->sort-fn
  "Convert sort-type keyword to sort function."
  []
  (case (:post-sort-type *config*)
    :date       (partial sort-by-date :inc get-date-from-file)
    :name       (partial sort-alphabetically #(.getName %))
    :date-desc  (partial sort-by-date :desc get-date-from-file)
    :name-desc  (partial sort-alphabetically :desc #(.getName %))
    sort-by-date))

;; ## Filename Generator

; =get-index-filename
(defn get-index-filename
  "Get index filename string."
  []
  (path (:url-base *config*) (:index-name *config*)))

; =make-post-output-filename
(defn make-post-output-filename
  "Make post output filename from java.io.File."
  [#^File file]
  {:pre [(file? file)]}
  (let [date     (get-date-from-file file)
        filename (if date (remove-date-from-name (.getName file))
                          (.getName file))]
    (render (:post-filename-format *config*)
            {:year     (-?>  date year  str)
             :month    (-?>> date month (format "%02d"))
             :day      (-?>> date day   (format "%02d"))
             :filename filename})))

; =make-output-filename
(defn make-output-filename
  "Make output filename from java.io.File."
  [#^File file]
  {:pre [(file? file)]}
  (if (post-file? file)
    (make-post-output-filename file)
    (.getName file)))

; =make-output-url
(defn make-output-url
  "Make output url from java.io.File."
  [#^File file]
  {:pre [(file? file)]}
  (path (:url-base *config*) (make-output-filename file)))

; =template-name->file
(defn template-name->file
  "Convert template name to java.io.File."
  [#^String tmpl-name]
  {:pre [(string? tmpl-name)]}
  (io/file (path (:template-dir *config*) tmpl-name)))

; =absolute-path
(defn absolute-path
  "Convert path to absolute with `(:url-base *config*)`"
  [path-str]
  {:pre [(string? path-str)]}
  (if (re-seq #"^https?://" path-str)
    path-str
    (path (:url-base *config*) path-str)))

; =add-public-dir
(defn add-public-dir
  "Add public dir to specified path."
  [filename]
  {:pre (string? filename)}
  (path (:public-dir *config*) filename))

