; @layout  post
; @title   Switch Compiler

(h2 "Kind of compilers")

(p "Now, there are 2 official compiler.")

(ul ["default"
     "clostache"])

(h3 "Default compiler")
(p "Explained in this document")

(h3 "Clostache compiler")

(p "HTML to HTML compiler using [clostache](https://github.com/fhd/clostache).
   If you are poor at S-exp, clostache compiler is good choice.

   Clostache compiler's source code is [misaki-clostache](https://github.com/liquidz/misaki-clostache),")

;;;;

(h2 "Switch compiler")

(p "Edit `:compiler` config in _config.clj")
#-CLJ
{
 ; other settings...

 ; compiler setting
 :compiler "default"
 }
CLJ


(see-also ["Develop Compiler"])

