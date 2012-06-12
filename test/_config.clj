{
 ;; directory setting
 :public-dir   "public/"
 :template-dir "template/"
 :post-dir     "_posts/"
 :layout-dir   "_layouts/"
 ;:post-dir     "{{template-dir}}_posts/"
 ;:layout-dir   "{{template-dir}}_layouts/"

 ;; default site data
 :site {:default-title "default title"}

 ;:tag-layout "{{layout-dir}}tag.test.clj"
 :tag-layout "tag.test"
 ;:tag-out-dir "{{public-dir}}tag/"
 :tag-out-dir "tag/"

 ;; templates which compiled with post data
 :compile-with-post ["index.html.clj"]

 :post-filename-regexp #"(\d{4})[.](\d{1,2})[.](\d{1,2})[-_](.+)$"
 ;:post-filename-format "%year-%month/%file"
 :post-filename-format "{{year}}-{{month}}/{{filename}}"

 ;; clojurescript compile options
 ;; src-dir is `:template-dir`
 ;; output-dir is `:public-dir`
 :cljs {:output-to     "js/main.js"
        :optimizations :whitespace
        ;:optimizations :simple
        :pretty-print  true}

 ;; highlight setting
 :code-highlight {:CLJ "lang-clj"}
 }

