; @layout  post
; @title   Develop Compiler

(h2 "Overview")

(p "misaki allows you to develop your own compiler.
   There are 3 function to construct misaki's compiler.")

(dl {"`-extension`" "REQUIRED"
     "`-config`"    "OPTIONAL"
     "`-compile`"   "REQUIRED"})

;;;;;;;

(h2 "Start to develop")

(p "At first, normally make new clojure template.")
#-SH
$ lein new misaki-new-compiler
SH

(p "Add [misaki module](https://clojars.org/misaki) dependency.")

#-CLJ
:dependencies [[org.clojure/clojure "1.4.0"]
               ; add
               [misaki "0.2.0-beta"]]
CLJ

(p "Namespace of core.clj must be **misaki.compiler.YOUR-COMPIER-NAME.core**")

#-SH
$ mkdir -p src/misaki/compiler/YOUR_COMPILER_NAME
$ mv src/misaki_new_compiler/core.clj src/misaki/compiler/YOUR_COMPILER_NAME/core.clj
SH

(p "Then, edit core.clj as follows!")

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
     * boolean: Do nothing(true = success, false = fail).
     * symbol : Do nothing(skip)
     * map    : Write file with detailed setting.
                `:status`   -> Compile result(true(success), false(fail) or something else(skip))
                `:filename` -> Filename to write
                `:body`     -> Compiled body text. if body is nil, only status is checked
                `:stop-compile?` -> Flag(true/false) to stop all compilation
                `:all-compile?`  -> Flag(true/false) to force compiling all templates"
  [config file]
  (str (:text config) (slurp file)))
CLJ

(p "You can use [misaki-clostache](https://github.com/liquidz/misaki-clostache) and [misaki API](../api/uberdoc.html) as reference of developing misaki compiler.")


(see-also ["Switch Compiler"])
