(ns misaki.test.compiler.default.common
  (:require
    [misaki [config :refer [*config*]]
            [tester :as t]]))

(defmacro deftest* [name & body]
  `(t/deftest*
       ~name
       (let [config# (t/get-config :merge? true)]
         (binding [*config* config#]
           ~@body))))
