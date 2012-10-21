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

(p "You can use [misaki-compiler-template](https://github.com/liquidz/misaki-compiler-template) as a template for misaki compiler.")
(p "[misaki-compiler-template](https://github.com/liquidz/misaki-compiler-template) need to install [lein-newnew](https://github.com/Raynes/lein-newnew).")

##SH
$ lein new misaki-compiler YOUR_COMPILER_NAME
$ cd YOUR_COMPILER_NAME
SH

(p "Namespace of core.clj must be **misaki.compiler.YOUR-COMPIER-NAME.core**")

#-SH
$ vi src/misaki/compiler/YOUR_COMPILER_NAME/core.clj
SH

(p "Then, edit core.clj as follows!")

;;;;;;;

(h2 "Simplest compiler sample")

(p "Following compiler append `(:text config)` to head of template file.")

#-CLJ
(ns misaki.compiler.YOUR_COMPILER_NAME.core
  "Namespace must be misaki.compiler.***.core
  '***' is a compiler name."
  (:require
    [misaki.server :as srv]))

(defn -extension
  "Specify file extensions to watch in misaki."
  []
  (list :txt))

(defn -config
  "If your compiler handles custom configuration,
  you can set original data in this function."
  [config]
  (assoc config :message "hello YOUR_COMPILER_NAME"))

(defn -compiler
  "Called when watched files are updated.
  If you returns...
     * string : Write string to file named as same as template file.
     * boolean: Do nothing(true = success, false = fail).
     * symbol : Do nothing(skip)
     * map    : Write file with detailed setting.
                `:status`        -> Compile result(true(success), false(fail) or something else(skip))
                `:filename`      -> Filename to write
                `:body`          -> Compiled body text. if body is nil, only status is checked
                `:stop-compile?` -> Flag(true/false) to stop all compilation
                `:all-compile?`  -> Flag(true/false) to force compiling all templates"
  [config file]
  (str (:message config) " " (slurp file)))


(defn -main
  "You can run misaki using this compiler with `lein run`."
  [& args]
  (apply srv/-main args))
CLJ

(h3 "-extension")
(p "Return file extension list to watch template file.
   This function is **REQUIRED**.")

(h3 "-config")
(p "Basic config data is passed, and return customized config data.
   This function is **OPTIONAL**.")

(h3 "-compile")
(p "Updated file(java.io.File) is passed, and return compile result.
   This function is **REQUIRED**.")
(p "Return value specification is following.")

(dl
  {:string (list (p "Write string to file which is named as same as template file.")
##CLJ
(defn -compile [file]
  (str "hello " (slurp file)))
; foo.txt whose body is "world" is passed,
; result file is *public-dir*/foo.txt whose body is "hello world"
CLJ)
   :boolean (list (p "misaki.core does not write file, only check compile result.")
##CLJ
(defn -compile [file]
  (compile-in-compiler file)
  true)
; true  => compile success
; false => compile failed
CLJ)
   :symbol (list (p "misaki.core skip the file.")
##CLJ
(defn -compile [file]
  (if-not (valid-file? file) 'skip))
; Skip to compile file
CLJ)
   :map (list (p "Write file with detailed setting.")
##CLJ
(defn -compile [file]
  {; compile result
   :status        true
   ; output filename
   :filename      (str (.getName file) ".html")
   ; output body
   :body          (str "hello " (slurp file))
   ; flag to stop compilation
   :stop-compile? false
   ; flat to force compiling all templates
   :all-compile?  false})
CLJ)})

(h2 "Test your compiler")
(p "misaki provides utilities to test your own compiler.")

##CLJ
(ns misaki.compiler.YOUR_COMPILER_NAME.core-test
  (:use clojure.test
        misaki.compiler.YOUR_COMPILER_NAME.core
        misaki.tester)
  (:require [clojure.string  :as str]
            [clojure.java.io :as io]))

; set base directory which include _config.clj
; default testing base directory is "test"
(set-base-dir! "test")

; define test wrapping config data as *config*
;
; This code is same as following:
;   (deftest foo-test
;     (binding [*base-dir* "test"
;               *config* (get-config)]
;       (is (= "hello") (:template-dir *config*))))
(deftest* -config-test
  ; get compiler's config which is customized by `-config`
  (is (= "hello {{name}}" (:message (get-config)))))

(deftest* -compile-test
  (let [in  (template-file "foo.txt")
        out (public-file "foo.txt")]
    ; call `-compile` to test your compling
    (is (test-compile in))
    (is (= "hello {{name}} world" (str/trim (slurp out))))

    (.delete out)))
CLJ

(p "Check [misaki.tester](/misaki/api/uberdoc.html#misaki.tester) to get detailed document.")

(h2 "Another compiler sample")

(p "You can use [misaki-clostache](https://github.com/liquidz/misaki-clostache) and [misaki API](../api/uberdoc.html) as reference of developing misaki compiler.")

(see-also ["Switch Compiler"])
