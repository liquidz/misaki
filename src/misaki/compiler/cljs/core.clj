(ns misaki.compiler.cljs.core
  "ClojureScript compiler for misaki."
  (:require
    [misaki.util.file :refer :all]
    [misaki.config    :refer [*config*]]
    [cljs.closure     :refer [build]]
    [misaki.server    :as srv])
  (:import [java.io File]))

(def DEFAULT_CLJS_OPTION
  "Default clojurescript compiling options."
  {:src-dir       "cljs"
   :output-to     "js/main.js"
   :optimizations :whitespace
   :pretty-print  true})

; =log
(defmacro log
  "Print compile result log with `:detailed-log` option."
  ([label body]
   `(if (and (:detailed-log *config*) (= :all (:-compiling *config*)))
      (srv/print-compile-result ~label ~body)
      ~body))
  ([label body force?]
   `(if (and (:detailed-log *config*) ~force?)
      (srv/print-compile-result ~label ~body)
      ~body)))

; =-extension
(defn -extension
  "Watch *.cljs extension."
  []
  {:post [#(sequential? %)]}
  (list :cljs))

; =-config
(defn -config
  "ClojureScript compling configuration.

  * _config.clj
    `:cljs-compile-options`: Setting for clojurescript compiling.

  * default setting
    {:src-dir       \"cljs\"
     :output-to     \"js/main.js\"
     :optimizations :whitespace
     :pretty-print  true}
  "
  [config]
  {:pre  [(map? config)]
   :post [#(map? %)]}

  (let [{:keys [template-dir public-dir]} config
        cljs     (merge DEFAULT_CLJS_OPTION (:cljs config))
        cljs-out (path public-dir (:output-to cljs))]
    (assoc config
           :cljs-compile-options
           (assoc cljs
                  :src-dir    (normalize-path (str template-dir (:src-dir cljs)))
                  :output-dir (if-let [dir (:output-dir cljs)]
                                (path public-dir dir)
                                (get-parent-path cljs-out))
                  :output-to  cljs-out))))

; =-compile
(defn -compile
  "Compile clojurescripts."
  [config #^File file]
  {:pre  [(map? config) (instance? File file)]}

  (binding [*config* config]
    (let [option (:cljs-compile-options config)]
      (log "clojurescript"
           (do
             ; make directory if not exists
             (make-directories (:output-to option))
             ; delete existing files
             (delete-file (:output-to option))
             (delete-file (str (:output-dir option) "/cljs"))
             ; build clojurescript
             (build (:src-dir option) option)
             true)))))
