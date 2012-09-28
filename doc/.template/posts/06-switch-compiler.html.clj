; @layout  post
; @title   Switch Compiler

(h2 "Kind of compilers")

(p "Now, there are 3 official compiler.")

(ul ["default"
     "clostache"
     "copy"
     ])

; --
(h3 "Default compiler")
(p "Explained in this document. S-expression to HTML compiler.")
; --
(h3 "Clostache compiler")
(p "HTML to HTML compiler using [clostache](https://github.com/fhd/clostache).
   If you are poor at S-exp, clostache compiler is good choice.

   Clostache compiler is maintained at [misaki-clostache](https://github.com/liquidz/misaki-clostache),")
; --
(h3 "Copy compiler")
(p "File copying compiler. If you want to copy template file without changes, use this compiler.
   Target template extension is `*`(all extensions).")
(p "Copy compiler has custom option named `:except-extensions`. If you specify this option in _config.clj, copy compiler except files which has specified extension.")
##CLJ
{
 ; other settings...

 ; excepting extensions
 ; (setting for copy compiler)
 :except-extensions [:jpg :png :gif]
 }
CLJ

;;;;

(h2 "Switch compiler")

(p "Edit `:compiler` setting in _config.clj")
#-CLJ
{
 ; other settings...

 ; compiler setting
 :compiler "default"
 }
CLJ

(h3 "Use misaki-clostache")
(p "Add misaki-clostache dependency.")

##CLJ
{
 :dependencies [
    ; other dependencies
    [misaki-clostache "0.0.1-alpha"]] ; add misaki-clostache

 ; set clostache as compiler
 :compiler "clostache"
 }
CLJ

##SH
$ lein deps
$ lein run YOUR_SITE
SH

;;;;

(h2 "Use multiple compilers")

(p "You can use multiple compilers at the same time.")
##CLJ
{
 ; other settings...

 ; multiple compiler setting
 :compiler ["default" "copy"]
 }
CLJ

(p "In this case, `default` compiler is called at first. If `default` compiler returns success result, compiling template is finished.
   If `default` compiler skip to compile the template, `copy` compiler is call.")


(see-also ["Develop Compiler"])

