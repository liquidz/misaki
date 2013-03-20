(ns misaki.compiler.copy.core
  (:require
    [misaki.util.file :refer [path has-extension?]]
    [misaki.config    :refer [*config*]]
    [clojure.java.io  :as io]
    [misaki.server    :as srv]))


(defmacro log
  [label body]
  `(if (and (:detailed-log *config*) (= :all (:-compiling *config*)))
     (srv/print-compile-result ~label ~body)
     ~body))

(defn -extension
  [] (list :*))

(defn -config
  [config]
  (merge
    {:except-extensions []
     :detailed-log      false}
    config))

(defn -compile
  [{:keys [public-dir except-extensions] :as config} file]
  (binding [*config* config]
    (if (some #(has-extension? % file) except-extensions)
      'skip
      (log (.getName file)
           (do (io/copy file (io/file (path public-dir (.getName file))))
               true)))))



