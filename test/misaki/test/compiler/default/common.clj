(ns misaki.test.compiler.default.common
  (:use [misaki.config :only [*config*]])
  (require [misaki.tester :as t]))

(defmacro deftest* [name & body]
  `(t/deftest*
       ~name
       (let [config# (t/get-config :merge? true)]
         (binding [*config* config#]
           ~@body))))
