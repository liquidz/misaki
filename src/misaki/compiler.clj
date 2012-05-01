(ns misaki.compiler
  (:use [misaki config]
        [misaki.util file]
        [hiccup.core :only [html]]
        [hiccup.page-helpers :only [html5 xhtml html4]])
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

(defn compile*
  [filename shtml]
  (let [compile-fn (-> shtml meta :format get-compile-fn)]
    (write-data (str *public-dir* filename)
                (compile-fn shtml)))
  true)

(defn compile-template
  [shtml]
  (let [filename (-> shtml meta :file make-template-output-filename)]
    (compile* filename shtml)))

