(ns misaki.compiler.demo.core
  (:import [java.io File]))

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

  * Return value:
   * string? : Write string to file named as same as template file.
   * true/false : Do nothing.
   * map? : Write file with detailed setting.
     * `:status`   : Compile result (true/false).
     * `:filename` : Filename to write
     * `:body`     : Compiled body text. If body is nil, only status is checked.
     * `:stop-compile?` : Flag(true/false) to stop compilation.
     * `:all-compile?`  : Flag(true/false) to force compiling all templates.
  "
  [config #^File file]
  {:pre  [(map? config) (instance? File file)]}

  (str (:message config) (slurp file)))


