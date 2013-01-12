{
 ;; directory setting
 :public-dir   "public/"
 :template-dir "template/"
 :post-dir     "_posts/"
 :layout-dir   "_layouts/"

 ;; default site data
 :site {:default-title "default title"}

 :tag-layout "tag.test"
 :tag-out-dir "tag/"

 ;; templates which compiled with post data
 :compile-with-post ["index.html.clj"]

 :post-filename-regexp #"(\d{4})[.](\d{1,2})[.](\d{1,2})[-_](.+)$"
 :post-filename-format "{{year}}-{{month}}/{{filename}}"

 ;; clojurescript compile options
 ;; src-dir base is `:template-dir`
 ;; output-dir base is `:public-dir`
 :cljs {:src-dir       "cljs"
        :output-to     "js/main.js"
        :optimizations :advanced}

 ;; highlight setting
 :code-highlight {:CLJ "lang-clj"}

 :compiler ["default"]
 }

