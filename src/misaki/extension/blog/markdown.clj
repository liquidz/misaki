(ns misaki.extension.blog.markdown
  (:require
    [misaki.lib.blog.core :refer [blog-main-fn]]
    [markdown.core :refer [md-to-html-string]]))

(def -main
  (blog-main-fn
    md-to-html-string))
