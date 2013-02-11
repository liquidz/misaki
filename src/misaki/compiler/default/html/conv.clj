(ns misaki.compiler.default.html.conv
  "Data converting utilities for template"
  (:require
    [misaki.compiler.default [core :refer [get-posts]]
                             [config :refer [*site*]]]
    [misaki.util [sequence :refer [find-first]]
                 [string   :refer [str-split-last]]]
    [clj-time [core   :as t]
              [format :as fmt]]
    [clojure.core.incubator :refer [-?>>]]
    [clojure.string         :as str]))

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

