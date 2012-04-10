(ns misaki.config
  "misaki: configuration"
  (:require [clojure.string :as str]
            [clojure.java.io :as io]))

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
     (binding [*public-dir*   (str *base-dir* (:public-dir config#))
               *template-dir* (str *base-dir* (:template-dir config#))
               *post*         (:post-dir config#)
               *layout-dir*   (str *base-dir*
                                   (:template-dir config#)
                                   (:layout-dir config#))
               *post-dir*     (str *base-dir*
                                   (:template-dir config#)
                                   (:post-dir config#))
               *tag-out-dir*  (:tag-out-dir config#)
;               (str *base-dir*
;                    (:public-dir config#)
;                    (:tag-out-dir config#))
               *tag-layout*   (str *base-dir*
                                   (:template-dir config#)
                                   (:layout-dir config#)
                                   (:tag-layout config#) ".clj")
               *lang*         (get config# :lang "en")
               *site*         (get config# :site {})
               *compile-with-post* (:compile-with-post config#)]
       ~@body)))


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


; =config-file?
(defn config-file?
  "Check whether file is config file or not."
  [file]
  (= *config-file* (.getName file)))
