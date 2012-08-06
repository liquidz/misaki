(ns misaki.test.compiler.common
  (:use [misaki.compiler.default.config :only [*config*]]
        [misaki.config :only [with-config *compiler*]]
        )
  (require ;[misaki.config :as c]
           [misaki.tester :as t]))

(defmacro deftest* [name & body]
  `(do
     (t/set-base-dir! "test/")
     (t/deftest*
       ~name
       (let [config# (t/get-config)]
         (binding [*config*   config#
                   *compiler* (:compiler config#)]
           ~@body)))))
