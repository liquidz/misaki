(ns misaki.compiler.default.html.conv
  "Data converting utilities for template"
  (:use
    [misaki.compiler.default.core   :only [get-posts]]
    [misaki.compiler.default.config :only [*site*]]
    [misaki.util.sequence           :only [find-first]]
    [misaki.util.string             :only [str-split-last]]
    [clojure.core.incubator         :only [-?>>]])
  (:require
    [clojure.string :as str]
    [clj-time.core :as t]
    [clj-time.format :as fmt]))

;; ## Converter for post data

; =post-title->url
(defn post-title->url
  "Convert post title to post url."
  [#^String post-title]
  (let [[title jump] (str-split-last post-title #"#")
        posts (:posts *site*)
        posts (if posts posts (get-posts))
        url   (-?>> posts (find-first #(= title (:title %))) :url)]

    (if url
      (if jump (str url "#" jump) url))))

