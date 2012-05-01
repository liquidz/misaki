(ns misaki.loader
  (:use misaki.config
        [clojure.core.incubator :only [-?>]])
  (:require
    [clojure.java.io :as io]
    [clojure.string :as str])
  (:import [java.io File]))

(defmulti read-template-sexp class)
(defmulti parse-template-option class)

(defn parse-tag
  [#^String tags]
  (if (nil? tags) ()
    (distinct
      (for [tag (str/split tags #"[\s\t]+")]
        {:name tag
         :url (str "/" (make-tag-output-filename tag))}))))

(defn parse-tag-option
  [option]
  (assoc option :tag (parse-tag (:tag option))))

(defmethod parse-template-option File
  [file] (parse-template-option (slurp file)))

(defmethod parse-template-option String
  [data]
  (let [lines  (map str/trim (str/split-lines data))
        params (remove nil? (map #(re-seq #"^;+\s*@(\w+)\s+(.+)$" %) lines))
        option (into {} (for [[[_ k v]] params] [(keyword k) v]))]
    (parse-tag-option option)))


(defmethod read-template-sexp File
  [file] (read-template-sexp (slurp file)))

(defmethod read-template-sexp String
  [data]
  (read-string (str "(list " data ")")))


(defn load-template
  [#^File tmpl]
  (let [data (slurp tmpl)
        option (parse-template-option data)
        s-exp  (read-template-sexp data)
        result (list (with-meta s-exp option))]
    (if-let [parent (-?> option :layout make-layout-filename io/file)]
      (concat (load-template parent) result)
      result)))
