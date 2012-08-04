(ns misaki.config
  "Configuration Manager"
  (:use [misaki.util file string sequence]
        [clojure.core.incubator :only [-?> -?>>]]
        [clj-time.core :only [date-time year month day]]
        [clostache.parser :only [render]])
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
  (let [config (read-config)]
    (assoc
      config
      :public-dir   (str *base-dir* (:public-dir config))
      :template-dir (str *base-dir* (:template-dir config))
      :port         (:port config PORT)
      :lang         (:lang config LANGUAGE)
      :site         (:site config {})
      :index-name   (:index-name config "")
      :url-base     (normalize-path (:url-base config "/"))
      :detailed-log (:detailed-log config false)
      :compiler     (load-compiler-publics (:compiler config COMPILER)))))

; =with-config
(defmacro with-config
  "Declare config data, and wrap sexp body with them."
  [& body]
  `(let [config# (make-basic-config-map)]
     (binding
       [*template-dir* (:template-dir config#)
        *public-dir*   (:public-dir config#)
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

;; ## Filename Generator

(defn get-index-filename
  "Get index filename string."
  []
  (str *url-base* *index-name*))

; =absolute-path
(defn absolute-path
  "Convert path to absolute with *url-base*"
  [path]
  (if (re-seq #"^https?://" path)
    path
    (let [path (if (.startsWith path "/")
                 (apply str (drop 1 path))
                 path)]
      (str *url-base* path))))

;; ## Compiler config

; =call-compiler-fn
(defn- call-compiler-fn [fn-name & args]
  (let [fn-sym (symbol (name fn-name))
        f      (get *compiler* fn-sym)]
    (apply f args)))

; =get-watch-file-extensions
(defn get-watch-file-extensions
  "Get extensions list to watch."
  []
  (call-compiler-fn :-extension))

; =update-config
(defn update-config
  "Update basic config with plugin's -config function."
  []
  (let [config (make-basic-config-map)
        res    (call-compiler-fn :-config config)]
    (if res res config)))

; =compiler-all-compile
(defn compiler-all-compile
  "Call plugin's -all-compile function."
  []
  (let [config (update-config)]
    (call-compiler-fn :-all-compile config)))

; =compiler-compile
(defn compiler-compile
  "Call plugin's -compile function."
  [file]
  (let [config (update-config)]
    (call-compiler-fn :-compile config file)))
