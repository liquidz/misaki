; @layout  post
; @title   Develop Compiler

(h2 "Overview")

(p "misaki allows you to develop your own compiler.
   There are 3 function to construct misaki's compiler.")

(dl {"`-extension`" "REQUIRED"
     "`-config`"    "OPTIONAL"
     "`-compile`"   "REQUIRED"})

;;;;;;;

(h2 "Simplest compiler sample")

(p "Following compiler append `(:text config)` to head of template file.")

#-CLJ
(ns misaki.compiler.hello.core
  "Namespace must be misaki.compiler.***.core
  '***' is a compiler name.")

(defn -extension
  "Specify file extensions to watch in misaki."
  []
  (list :txt))

(defn -config
  "If your compiler handles custom configuration,
  you can set original data in this function."
  [config]
  (assoc config :text "hello, "))

(defn -compiler
  "Called when watched files are updated.
  If you returns...
     * string : Write string to file named as same as template file.
     * boolean: Do nothing.
     * map    : Write file with detailed setting.
                `:status`   -> Compile result(true/false)
                `:filename` -> Filename to write
                `:body`     -> Compiled body text. if body is nil, only status is checked
                `:stop-compile?` -> Flag(true/false) to stop all compilation
                `:all-compile?`  -> Flag(true/false) to force compiling all templates"
  [config file]
  (str (:text config) (slurp file)))
CLJ

