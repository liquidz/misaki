(ns misaki.compiler.default.html.conv
  "Data converting utilities for template"
  (:use
    [misaki.compiler.default.core :only [get-posts]]
    [misaki.compiler.default.config :only [*site*]]
    [misaki.util.sequence :only [find-first]]
    [clojure.core.incubator :only [-?>>]])
  (:require
    [clojure.string :as str]
    [clj-time.core :as t]
    [clj-time.format :as fmt]))

;; ## Converter for post data

; =post-title->url
(defn post-title->url
  "Convert post title to post url."
  [#^String post-title]
  (let [posts (:posts *site*)
        posts (if posts posts (get-posts))]
    (-?>> posts (find-first #(= post-title (:title %))) :url)))

