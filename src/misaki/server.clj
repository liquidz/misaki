(ns misaki.server
  "Development server

  Listen `*port*` to publish developing site,
  and watch template updates.
  "
  (:require
    [misaki [core   :refer :all]
            [config :refer :all]]
    [misaki.util.file     :refer [find-clj-files normalize-path has-extension? file?]]
    [misaki.util.string   :refer [msec->string]]
    [text-decoration.core :refer [cyan red bold]]
    [watchtower.core      :refer :all]
    [compojure.core       :refer [routes]]
    [compojure.route      :refer [files]]
    [ring.adapter.jetty   :refer [run-jetty]]))

; =elapsing
(defmacro elapsing
  [& body]
  `(let [start-time# (System/currentTimeMillis)
         ~'get-elapsed-time (fn [] (- (System/currentTimeMillis) start-time#))]
     ~@body))

; =get-result-text
(defn get-result-text
  [result & optional-string]
  (case result
    true  (cyan (apply str "DONE" optional-string))
    false (red  (apply str "FAIL" optional-string))
    (cyan "SKIP")))

; =print-result
(defmacro print-compile-result
  "Print colored compile result."
  [#^String message, compile-sexp]
  `(do
     (println (str " * Compiling " (bold ~message)))
     (flush)
     (elapsing
       (let [result#  ~compile-sexp
             elapsed# (msec->string (~'get-elapsed-time))]
         (println "  " (get-result-text result# " in " elapsed#))
         result#))))


;; ## Dev Compiler

; =do-all-compile
(defn do-all-compile
  []
  (print-compile-result "all templates" (call-all-compile))
  (println " * Finish Compiling"))

; =do-compile
(defn do-compile
  [#^java.io.File file]

  (cond
    (config-file? file) (print-compile-result "all templates" (call-all-compile))
    (index-file? file)  (print-compile-result "index templates" (call-index-compile file))
    :else               (print-compile-result (.getName file) (call-compile file)))

  (println " * Finish Compiling"))

;; ## Template Watcher

; =start-watcher
(defn start-watcher
  "Start watchtower watcher to compile changed templates"
  [template-dir]
  (let [ext-chk-fn (apply extensions (get-watch-file-extensions))]
    (watcher
      [template-dir
       (str *base-dir* *config-file*)]
      (rate 50)
      (change-first? false) ; do not compile each templates at first
      (file-filter ignore-dotfiles)
      (file-filter #(or (config-file? %) (ext-chk-fn %)))
      (on-change #(doseq [file %]
                    ; use `wrap-config` to apply config file updates
                    (with-config (do-compile file)))))))

;; ## main

; =main
(defn -main [& [dir :as args]]
  (binding [*base-dir* (normalize-path dir)]
    (with-config
      ; compile all templates at first
      (do-all-compile)

      ; compile all only if '--compile' option is specified
      (when-not (contains? (set args) "--compile")
        (start-watcher (:template-dir *config*))
        (println " * starting server: "
                 (cyan (str "http://localhost:"
                            (:port *config*)
                            (:url-base *config*))))
        (run-jetty
          (routes (files (:url-base *config*)
                         {:root (:public-dir *config*)}))
          {:port (:port *config*)})))))

