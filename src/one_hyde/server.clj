(ns one-hyde.server
  (:use
    watchtower.core
    [one-hyde.core :only [*template* file->template-name compile-template]]))

(defn -main []
  (watcher
    [*template*]
    (rate 50)
    (file-filter ignore-dotfiles)
    (file-filter (extensions :clj))
    (on-change #(doseq [file %]
                  (println " * compiling: " (.getName file))
                  (compile-template (file->template-name file))
                  (println " * done")))))
