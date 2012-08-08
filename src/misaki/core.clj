(ns misaki.core
  (:use misaki.config
        [misaki.util file string sequence]
        [pretty-error.core :only [print-pretty-stack-trace]]))

;; util
(defn key->sym [k] (symbol (name k)))

;; ## Compiler Utilities

; =stop-compile?
(defn- stop-compile? [compile-result]
  (and (map?   compile-result)
       (true? (:stop-compile? compile-result))))

; =call-compiler-fn
(defn- call-compiler-fn [fn-key & args]
  (let [fn-sym (key->sym fn-key)
        f      (get *compiler* fn-sym)]
    (if f (apply f args))))

;; ## Compiler Functions

; =get-watch-file-extensions
(defn get-watch-file-extensions
  "Get extensions list to watch."
  []
  (call-compiler-fn :-extension))

; =get-template-files
(defn get-template-files
  "Get all template files."
  []
  (let [exts (get-watch-file-extensions)]
    (filter
      (fn [file]
        (some #(has-extension? % file) exts))
      (find-files *template-dir*))))

; =update-config
(defn update-config
  "Update basic config with plugin's -config function."
  []
  (let [config (make-basic-config-map)
        res    (call-compiler-fn :-config config)]
    (if res res config)))

; =process-compile-result
(defn process-compile-result
  ""
  [result default-filename]
  (cond
    ; output with default filename
    (string? result)
    (if default-filename
      (do (write-file (add-public-dir default-filename) result)
          true)
      false)

    ; only check status
    (or (true? result) (false? result))
    result

    ; output with detailed data
    (map? result)
    (let [{:keys [status   filename body]
           :or   {status   false
                  filename default-filename}} result]
      (if (and filename body)
        (do (write-file (add-public-dir filename) body)
            status)
        status))

    ; error
    :else false))

(defn- make-compile-param [file]
  {:file file
   :date (get-date-from-file file)
   :out-name
     (cond
       (post-file? file) (make-post-output-filename file)
       :else             (.getName file))})

(defn compile* [config file]
  (try
    (let [param          (make-compile-param file)
          compile-result (call-compiler-fn :-compile config param)
          process-result (process-compile-result compile-result (.getName file))]
      [process-result compile-result])
    (catch Exception e
      (print-pretty-stack-trace
        e :filter #(str-contains? (:str %) "misaki"))
      [false {:stop-compile? true}])))

; =compiler-all-compile
(defn compiler-all-compile
  "Call plugin's -compile function for all template files."
  []
  (let [config (update-config)
        files  (get-template-files)]
    (loop [[file & rest-files] files, success? true]
      (if file
        (let [[process-result compile-result] (compile* config file)
              result (and success? process-result)]
          (if (stop-compile? compile-result)
            result
            (recur rest-files result)))
        success?))))

; =compiler-compile
(defn compiler-compile
  "Call plugin's -compile function."
  [file]
  (let [config   (update-config)
        [result] (compile* config file)]
    (if (post-file? file)
      ; compile with post
      (every? #(true? (first %))
              (for [file (map template-name->file *compile-with-post*)]
                (compile* config file)))
      result)))






