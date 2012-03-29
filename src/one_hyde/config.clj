(ns one-hyde.config
  "1hyde: configuration"
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
         *posts*)
(declare ^{:dynamic true, :doc "Layouts placed directory path."}
         *layouts-dir*)
(declare ^{:dynamic true, :doc "Posts placed directory path."}
         *posts-dir*)

; =with-config
(defmacro with-config
  "Wrap sexp with config data"
  [& body]
  `(let [config# (load-config)]
     (binding [*public-dir*   (str *base-dir* (:public-dir config#))
               *template-dir* (str *base-dir* (:template-dir config#))
               *posts*        (:posts config#)
               *layouts-dir*  (str *base-dir*
                                   (:template-dir config#)
                                   (:layouts config#))
               *posts-dir*    (str *base-dir*
                                   (:template-dir config#)
                                   (:posts config#))]
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

