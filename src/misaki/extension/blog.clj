(ns misaki.extension.blog
  (:require
    [misaki.lib.blog.core :refer [blog-main-fn]]
    ))


(def -main (blog-main-fn))
