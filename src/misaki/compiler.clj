(ns misaki.compiler
  (:use [misaki config]
        [misaki.util file]
        [hiccup.core :only [html]]
        [hiccup.page :only [html5 xhtml html4]]
        [cljs.closure :only [build]])
  (:require [clojure.string :as str])
  )


; =get-compile-fn
(defn get-compile-fn
  "Get hiccup functon to compile sexp."
  [fmt]
  (case fmt
    "html5" #(html5 {:lang *lang*} %)
    "xhtml" #(xhtml {:lang *lang*} %)
    "html4" #(html4 %)
    #(html %)))

(defn make-filename
  [option]
  (cond
    (contains? option :tag-name) (make-tag-output-filename (:tag-name option))
    (post-file? (:file option)) (make-post-output-filename (:file option))
    :else (make-template-output-filename (:file option))))

(defn compile*
  [shtml]
  (try
    (let [filename (make-filename (meta shtml))
          compile-fn (-> shtml meta :format get-compile-fn)]
      (write-data (str *public-dir* filename)
                  (compile-fn shtml)))
    (catch Exception e
      (println "COMPILE ERROR") ; TODO: use ascii color
      (.printStackTrace e) false))
  true)

(defn cljs-compile
  []
  (try
    (make-directories (:output-to *cljs-compile-options*))
    (build (:src-dir *cljs-compile-options*)
           *cljs-compile-options*)
    (catch Exception e (.printStackTrace e) false))
  true)

