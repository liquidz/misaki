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

(defn load-compiler-publics
  [name]
  (let [sym (symbol (str "misaki.compiler." name ".core"))]
    (try
      (require sym)
      (if-let [target-ns (find-ns sym)]
        (ns-publics target-ns)
        (load-compiler-publics "default"))
      (catch FileNotFoundException e
        (load-compiler-publics "default")))))

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
      :compiler     (load-compiler-publics (:compiler config COMPILER)))))

; =with-config
(defmacro with-config
  "Declare config data, and wrap sexp body with them."
  [& body]
  `(let [config#   (make-basic-config-map)]
     (binding
       [*template-dir* (:template-dir config#)
        *public-dir*   (:public-dir config#)
        *port*         (:port config#)
        *url-base*     (:url-base config#)
        *compiler*     (:compiler config#)]
       ~@body)))

;; ## File Cheker

; =config-file?
(defn config-file?
  "Check whether file is config file or not."
  [#^File file]
  {:pre [(file? file)]}
  (= *config-file* (.getName file)))

;; ## Compiler config
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
    (call-compiler-fn :-all-compile config)))

(defn compiler-compile [file]
  (let [config (update-config)]
    (call-compiler-fn :-compile config file)))
