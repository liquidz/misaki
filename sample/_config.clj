{
 ;directory setting
 :public-dir   "./"
 :template-dir "_template/"
 :posts        "_posts/"
 :layouts      "_layouts/"

 ; default site data
 :site {:site-title "misaki"}

 ; post file compile hook
 :compile-with-post ["index.html.clj" "atom.xml.clj"]

 ;highlight setting
 :code-highlight {:CLJ "lang-clj"}
 }

