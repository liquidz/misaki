; @layout  post
; @title   Switch Compiler

(h2 "Kind of compilers")

(p "Now, there are 2 official compiler.")

(ul ["default"
     "clostache"])

(h3 "Default compiler")
(p "Explained in this document. S-expression to HTML compiler.")

(h3 "Clostache compiler")

(p "HTML to HTML compiler using [clostache](https://github.com/fhd/clostache).
   If you are poor at S-exp, clostache compiler is good choice.

   Clostache compiler is maintained at [misaki-clostache](https://github.com/liquidz/misaki-clostache),")

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


(see-also ["Develop Compiler"])

