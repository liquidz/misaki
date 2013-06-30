(ns misaki.core
  "Misaki Controll Core"
  (:require
    [misaki.config :refer :all]
    [misaki.util [file     :refer :all]
                 [string   :refer :all]
                 [sequence :refer :all]
                 [notify   :refer :all]]
    [text-decoration.core  :refer [green]]
    [pretty-error.core     :refer [print-pretty-stack-trace]]
    [clojure.math.numeric-tower :as math])
  (:import [java.io File]))

(declare index-compile*
         call-index-compile)

;; ## Util

(defn key->sym [k] (symbol (name k)))

;; ## Compiler Utilities

; =stop-compile?
(defn- stop-compile? [compile-result]
  (and (map?  compile-result)
       (true? (:stop-compile? compile-result))))

; =all-compile?
(defn- all-compile? [compile-result]
  (and (map?  compile-result)
       (true? (:all-compile? compile-result))))

; =skip-compile?
(defn- skip-compile? [compile-result]
  (or (symbol? compile-result)
      (and (map?    compile-result)
           (symbol? (:status compile-result))
           (every?  #(not (% compile-result)) [stop-compile? all-compile?]))))

; =call-compiler-fn
(defn- call-compiler-fn
  "Call compiler's function.

      (call-compiler-fn :-compile file)
      (let [compiler {'-extension #(list :clj %)}]
        (call-compiler-fn compiler :-extension :cljs))
  "
  [& params]
  (let [[compiler fn-key & args] (if (-> params first map?)
                                   params
                                   (cons (:compiler *config*) params))
        fn-sym (key->sym fn-key)]
    (if (sequential? compiler)
      (mapcat #(apply call-compiler-fn % fn-sym args) compiler)
      (if-let [f (get compiler fn-sym)] (apply f args)))))

; =get-watch-file-extensions
(defn get-watch-file-extensions
  "Get extensions list to watch."
  []
  (map normalize-extension (distinct (call-compiler-fn :-extension))))

; =handleable-compiler?
(defn handleable-compiler?
  [compiler file]
  (let [exts (call-compiler-fn compiler :-extension)]
    (not (nil? (some #(has-extension? % file) exts)))))

; =get-template-files
(defn get-template-files
  "Get all template files. Find specified directory with `:dir` option."
  [& {:keys [dir] :or {dir (:template-dir *config*)}}]
  (let [exts (get-watch-file-extensions)
        has-target-extension? (fn [file] (some #(has-extension? % file) exts))]
    (->> (find-files dir)
         (filter #(.isFile %))
         (filter has-target-extension?)
         (remove config-file?))))

; =get-post-files
(defn get-post-files
  "Get post files.
  Sort file list with `:sort?` option(default setting is FALSE)."
  [& {:keys [sort? all?] :or {sort? false, all? false}}]

  (let [files (get-template-files :dir (:post-dir *config*))
        page? (not all?)]
    (cond-> files
            sort? ((sort-type->sort-fn))
            page? get-page-posts)))


;; ## Compiler Functions

; =update-config
(defn update-config
  "Update basic config with plugin's -config function."
  ([]
   (let [compilers (-> *config* :compiler list flatten)
         configs   (map update-config compilers)]
     (if (next configs)
       configs
       (first configs))))
  ([compiler]
   (let [config (make-basic-config-map)]
     (or (call-compiler-fn compiler :-config config) config))))


; =process-compile-result
(defn process-compile-result
  "Process compile result and return process result.

  * string?
    * Write file with default filename.
  * true? or false? or symbol?
    * Do nothing.
      * `true`  : Success
      * `false` : Fail
      * `symbol`: Skip
  * map?
    * Write file with detailed setting.
      * `:status`  : True(success), false(fail) or something else(skip)
      * `:filename`: Filename to write
      * `:body`    : Compiled body text. if body is nil, only status is checked
  "
  [result default-filename]
  (cond
    ; output with default filename
    (string? result)
    (if default-filename
      (do (write-file (public-path default-filename) result)
          true)
      false)

    ; only check status
    (or (true? result) (false? result))
    result

    ; output with detailed data
    (map? result)
    (let [{:keys [status filename body]
           :or   {status false
                  filename default-filename}} result]
      (if (and filename body)
        (do (write-file (public-path filename) body)
            status)
        status))

    ; error
    :else false))

; =compile*
(defn compile*
  "Common function to compile java.io.File with config."
  ([file] (compile* {} file))
  ([optional-config file]
   (try
     (some-with-default-value
       #(if (handleable-compiler? % file)
          (let [config         (merge (update-config %) optional-config)
                compile-result (call-compiler-fn % :-compile config file)
                process-result (process-compile-result
                                 compile-result
                                 (make-output-filename file))]
            (when-not (skip-compile? compile-result)
              (if (:notify? *config*) (notify-result file process-result))
              [process-result compile-result])))
       (flatten (list (:compiler *config*)))
       [true 'skip])

     (catch Exception e
       (if *print-stack-trace?*
         (print-pretty-stack-trace
           e :filter #(str-contains? (:str %) "misaki")))
       ; notify error
       (if (:notify? *config*) (notify-result file false e))
       [false {:stop-compile? true}]))))

; =call-all-compile
(defn call-all-compile
  "Call plugin's -compile function for all template files."
  []
  (loop [[file & rest-files] (get-template-files), success? true]
    (if file
      (let [compile-fn (if (index-file? file) index-compile* compile*)
            [process-result compile-result] (compile-fn {:-compiling :all} file)
            result (and success? (or (symbol? process-result)
                                     (true? process-result)))]
        (if (stop-compile? compile-result)
          result
          (recur rest-files result)))
      success?)))

; =call-compile
(defn call-compile
  "Call plugin's -compile function."
  ([file] (call-compile {} file))
  ([optional-config file]
   (let [[process-result compile-result]
         (compile* (merge optional-config {:-compiling :single}) file)]
     (cond
       ; all compile
       (all-compile? compile-result)
       (do (println (green "   Switch to all compiling"))
           (call-all-compile))

       ; post compile
       (post-file? file)
       (every? #(true? (first %))
               (for [file (map template-name->file (:compile-with-post *config*))]
                 ((if (index-file? file) index-compile* compile*)
                    (merge optional-config {:-compiling :single}) file)))

       :else process-result))))

; =index-compile*
(defn index-compile*
  "Common function to compile index file(java.io.File) with config."
  ([file] (index-compile* {} file))
  ([optional-config file]
   (if-let [ppp (:posts-per-page *config*)]
     (let [post-count (count (get-post-files :all? true))
           last-page  (math/ceil (/ post-count ppp))]
       (last (map #(binding [*page-index* %]
                     (compile* (merge optional-config
                                      (make-page-data file % last-page))
                               file ))
                  (range last-page))))
     (compile* optional-config file))))

; =call-index-compile
(defn call-index-compile
  "Call plugin's -compile function to compile index template defined by :index-template-regexp."
  ([file] (call-index-compile {} file))
  ([optional-config file]
   (let [[process-result compile-result] (index-compile* optional-config file)]
     (if (all-compile? compile-result)
       (do (println (green "   Switch to all compiling"))
           (call-all-compile))
       process-result))))

