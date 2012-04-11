{
 ;; directory setting
 :public-dir   "./"
 :tag-out-dir  "tag/"
 :template-dir "_template/"
 :post-dir     "_posts/"
 :layout-dir   "_layouts/"

 ;; site language
 :lang "en"

 ;; default site data
 :site {:site-title "misaki"}

 ;; post file compile hook
 :compile-with-post ["index.html.clj" "atom.xml.clj"]

 :tag-layout "tag"

 ;; highlight setting
 :code-highlight {:CLJ "lang-clj", :CLOJURE "lang-clj"}
 }

