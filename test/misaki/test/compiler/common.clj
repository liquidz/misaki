(ns misaki.test.compiler.common
  (:use [misaki.compiler.default.config :only [*config*]]
;        clojure.test
        )
  (require [misaki.tester :as t])
  )

;;(defmacro with-test-data [& body]
;;  `(binding [*base-dir* "test/"]
;;     (with-config ~@body)))
;;
;;;(defmacro deftest* [name & body]
;;;  `(deftest ~name
;;;     (binding [*base-dir* "test/"]
;;;       (with-config ~@body))))
;;
;;
;;(defmacro deftest* [name & body]
;;  `(deftest ~name
;;     (binding [*base-dir* "test/"]
;;       (with-config
;;         (binding[*config* (update-config)]
;;           ~@body)))))
;;


(defmacro deftest* [name & body]
  `(do
     (t/set-base-dir! "test/")
     (t/deftest*
       ~name
       (binding [*config* (t/get-config)]
         ~@body))))
