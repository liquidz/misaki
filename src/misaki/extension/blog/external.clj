(ns misaki.extension.blog.external
  (:require
    [clojure.java.shell   :refer [sh]]
    [misaki.lib.blog.core :refer [blog-main-fn]]))

(defn render-with-external-command
  [content]
  (let [res (sh "pandoc" "-f" "markdown_github" :in content)]
    ;(shutdown-agents)
    (:out res)))

(def -main (blog-main-fn render-with-external-command))

