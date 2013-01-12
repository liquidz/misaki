(ns misaki.test.compiler.common
  (:use [misaki.config :only [*config*]])
  (require [misaki.tester :as t]))

(defmacro deftest* [name & body]
  `(do
     (t/set-base-dir! "test/")
     (t/deftest*
       ~name
       (let [config# (t/get-config :merge? true)]
         (binding [*config* config#]
           ~@body)))))
