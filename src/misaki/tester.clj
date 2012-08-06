(ns misaki.tester
  "Plugin Testing Utilities"
  (:use
    [misaki.core :only [update-config]]
    [misaki.config :only [*base-dir* make-basic-config-map with-config]]
    [misaki.util.file :only [normalize-path]]
    [clojure.test :only [deftest]])
  (:require
    [clojure.string :as str]))

(def _test-base-dir_ (atom "."))

(defn set-base-dir!
  [base-dir]
  (reset! _test-base-dir_ (normalize-path base-dir)))

(defmacro with-test-base-dir
  [& body]
  `(binding [*base-dir* @_test-base-dir_]
     ~@body))

(defn get-base-config
  []
  (with-test-base-dir
    (make-basic-config-map)))

(defn get-config
  []
  (with-test-base-dir
    (update-config)))

(defmacro deftest*
  [name & body]
  `(deftest ~name
     (with-test-base-dir
       (with-config
         ~@body))))

