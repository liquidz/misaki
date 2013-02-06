(ns misaki.compiler.css.core
  "CSS compiler for misaki."
  (:require
    [misaki.compiler.default.reader :as reader]
    [misaki.config    :as cnf]
    [misaki.util.file :as file]
    [gaka.core        :as gaka])
  (:import [java.io File]))

(defn- css-compile [coll]
  (if (seq? coll)
    (map css-compile coll)
    (gaka/css coll)))

; =-extension
(defn -extension
  "Watch *.css.clj."
  []
  {:post [#(sequential? %)]}
  (list :css.clj))


; =-compile
(defn -compile
  "Compile CSS file with gaka(https://github.com/briancarper/gaka)."
  [config #^File file]
  {:pre  [(map? config) (instance? File file)]}

  (let [{:keys [public-dir]} config
        filename (->> (cnf/make-output-filename file)
                      (file/path public-dir)
                      file/remove-last-extension)]
    ; generate css and write file
    (->> (reader/read-from-string (slurp file) :path (.getAbsolutePath file))
         (cons 'list)
         eval
         (remove var?)
         css-compile
         flatten
         (apply str)
         (file/write-file filename))
    true))


