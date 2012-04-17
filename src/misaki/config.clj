(ns misaki.config
  "misaki: configuration"
  (:use
    misaki.util.file
    [clojure.core.incubator :only [-?> -?>>]]
    [clj-time.core :only [date-time year month day]]
    [clj-time.core :only [month year]])
  (:require
    [clojure.string :as str]
    [clojure.java.io :as io])
  (:import [java.io File]))

(def ^:dynamic *base-dir* "./")

(def ^:dynamic *config-file* "_config.clj")
(defn load-config []
  (read-string (slurp (str *base-dir* *config-file*))))

(declare ^{:dynamic true, :doc "Public directory path. Compiled html is placed here."}
         *public-dir*)
(declare ^{:dynamic true, :doc "Template directory path."}
         *template-dir*)
(declare ^{:dynamic true, :doc "Posts placed directory name."}
         *post*)
(declare ^{:dynamic true, :doc "Layouts placed directory path."}
         *layout-dir*)
(declare ^{:dynamic true, :doc "Posts placed directory path."}
         *post-dir*)
(declare ^{:dynamic true, :doc "Tag index placed directory path."}
         *tag-out-dir*)
(declare ^{:dynamic true, :doc "Tag layout name."}
         *tag-layout*)
(declare ^{:dynamic true, :doc "Default site data."}
         *site*)
(declare ^{:dynamic true, :doc "Template names which compiled with post templates."}
         *compile-with-post*)
(declare ^{:dynamic true, :doc "Site language."}
         *lang*)
(declare ^{:dynamic true, :doc "Regexp for parse post filename."}
         *post-filename-regexp*)
(declare ^{:dynamic true, :doc "Format rule for post filename."}
         *post-filename-format*)

; =with-config
(defmacro with-config
  "Wrap sexp with config data"
  [& body]
  `(let [config# (load-config)]
     (binding
       [*public-dir*   (str *base-dir* (:public-dir config#))
        *template-dir* (str *base-dir* (:template-dir config#))
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
                                 "%year/%month/%file")]
       ~@body)))

; =config-file?
(defn config-file?
  "Check whether file is config file or not."
  [file]
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

; =file->template-name
(defn file->template-name
  "Convert java.io.File to template name.

  ex) File<aa/bb/cc/template/index.clj>
      => template/index.clj"
  [file]
  (last (str/split (.getAbsolutePath file)
                   (re-pattern *template-dir*))))

; =template-name->file
(defn template-name->file
  "Convert template name to java.io.File"
  [tmpl-name]
  (io/file (str *template-dir* tmpl-name)))

; =get-date-from-file
(defn get-date-from-file
  "Get date from filename with *post-filename-regexp*
  ex) YYYY-MM-DD
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
  [filename]
  (last (first (re-seq *post-filename-regexp* filename))))

; =make-tag-output-filename
(defn make-tag-output-filename
  "Make tag output filename from tag name"
  [tag-name]
  (str *tag-out-dir* tag-name ".html"))

; =make-template-outpu-filename
(defn make-template-output-filename
  "Make template output filename from template name"
  [tmpl-name]
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


