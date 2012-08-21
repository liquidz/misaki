(ns misaki.tester
  "Compiler Testing Utilities"
  (:use
    [misaki.core      :only [update-config call-compile]]
    [misaki.config    :only [*base-dir* *config* make-basic-config-map with-config]]
    [misaki.util.file :only [normalize-path]]
    [clojure.test     :only [deftest]])
  (:require
    [clojure.string :as str]))

;; default base-dir for tester is "test/"
(def _test-base-dir_ (atom "test/"))

; =set-base-dir!
(defn set-base-dir!
  "Set base directory for testing.
  Default base directory is \"test/\"."
  [base-dir]
  (reset! _test-base-dir_ (normalize-path base-dir)))

; =with-test-base-dir
(defmacro with-test-base-dir
  "Bind test base directory to `*base-dir*`."
  [& body]
  `(binding [*base-dir* @_test-base-dir_]
     ~@body))

; =get-base-config
(defn get-base-config
  "Get basic config map. Basically you should use `get-config`."
  []
  (with-test-base-dir
    (make-basic-config-map)))

; =get-config
(defn get-config
  "Get compiler config map."
  []
  (with-test-base-dir
    (update-config)))

; =test-compile
(defn test-compile
  "Run test compile."
  [file]
  (with-test-base-dir
    (call-compile file)))

; =deftest*
(defmacro deftest*
  "Define test macro for using test base directory and config."
  [name & body]
  `(deftest ~name
     (with-test-base-dir
       (with-config
         ~@body))))

; =bind-config
(defmacro bind-config
  "Binding config value.

      (bind-config [:post-dir \"foo/bar\"]
        (println (:post-dir *config*)))
  "
  [bind-vec & body]
  `(binding [*config* (assoc *config* ~@bind-vec)]
     ~@body))

