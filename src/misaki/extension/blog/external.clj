(ns misaki.extension.blog.external
  (:require
    [clojure.java.shell :refer [sh]]
    [misaki.lib.blog.core :refer [blog-main-fn]]
    [clojure.java.io :as io]
    ))

(defn spit-to-temporary
  [^String content]
  (let [filename (str "." (gensym ))
        file     (io/file filename)]
    (spit file content)
    file))

(defn with-temporary-file
  [content f]
  (let [file   (spit-to-temporary content)
        result (f file)]
    (.delete file)
    result))

(defn render-with-external-command
  [content]
  (with-temporary-file
    content
    (fn [^java.io.File file]
      ;; FIXME
      (:out (sh "pandoc" "-f" "markdown_github" (.getAbsolutePath file))))))

(def -main (blog-main-fn render-with-external-command))

