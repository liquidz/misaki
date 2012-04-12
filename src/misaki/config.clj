(ns misaki.config
  "misaki: configuration"
  (:use
    misaki.util.file
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
(declare ^{:dynamic true, :doc "Template names which compiled with post templates"}
         *compile-with-post*)
(declare ^{:dynamic true, :doc "Site language"}
         *lang*)

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
        *compile-with-post* (:compile-with-post config#)]
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
        date (get-date-from-file file)]
    (if (post-file? file)
      (format "%04d/%02d/%s" (year date) (month date)
              (delete-extension
                (remove-date-from-name tmpl-name)))
      (delete-extension tmpl-name))))

; =make-post-url
(defn make-post-url
  "Make post url from file(java.io.File)"
  [#^File file]
  (str "/" (make-template-output-filename (str *post* (.getName file)))))


