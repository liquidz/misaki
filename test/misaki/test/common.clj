(ns misaki.test.common
  (:use misaki.config
        clojure.test))

(defmacro with-test-data [& body]
  `(binding [*base-dir* "./test/"]
     (with-config ~@body)))

(defmacro deftest* [name & body]
  `(deftest ~name
     (binding [*base-dir* "./test/"]
       (with-config ~@body))))
