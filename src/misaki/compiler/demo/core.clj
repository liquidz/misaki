(ns misaki.compiler.demo.core)

(defn -extension
  "Set watch target extension as keyword. (REQUIRED)"
  []
  {:post [#(sequential? %)]}
  (list :txt))

(defn -config
  "Set custom configuration. (OPTIONAL)"
  [config]
  {:pre  [(map? config)]
   :post [#(map? %)]}

  (assoc config :message "hello! "))

(defn -compile
  "Compile specified java.io.File. (REQUIRED)

  Return value:
    string? ----> write string file which has same name with template file
    true/false -> do nothing
    map? -------> :status compile-result(true/false)
                  :filename filename to output
                  :body     compiled body text. if body is nil, only check status
                  :stop-compile? flag(true/false) to stop compilation
  "
  [config #^File file]
  {:pre  [(map? config) (instance? File file)]}

  (str (:message config) " (slurp file)))


