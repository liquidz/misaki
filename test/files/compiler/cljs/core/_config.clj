{
 ;; directory setting
 :public-dir   "public/"
 :template-dir "template/"

 ;; clojurescript compile options
 ;; src-dir base is `:template-dir`
 ;; output-dir base is `:public-dir`
 :cljs {:optimizations :advanced}

 :compiler ["cljs"]
 }

