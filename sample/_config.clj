{
 ;; directory setting
 :public-dir   "public/"
 :tag-out-dir  "tag/"
 :template-dir "template/"
 :post-dir     "posts/"
 :layout-dir   "layouts/"

 ;; posts and tags url setting
 ;;   default value: "/"
 ;;   ex)
 ;;     "/"    => "/YYYY-MM/POST.html"
 ;;     "/foo" => "/foo/YYYY-MM/POST.html"
 :url-base     "/"
 ;:url-base     "/u/14918307/misaki-mac-sample/"

 ;; dev server port
 ;;   default value: 8080
 :port 8080

 ;; site language
 ;;   default value: "en"
 :lang "en"

 ;; default site data
 :site {:site-title "misaki"
        :twitter    "uochan"
        :css        ["http://fonts.googleapis.com/css?family=Josefin+Sans"
                     "/css/main.css"]
        :device-css ["/css/smartphone.css"]
        :js         ["/js/main.js"]}
;                     "/u/14918307/misaki-mac-sample/css/main.css"]
;        :device-css ["/u/14918307/misaki-mac-sample/css/smartphone.css"]
;        :js         ["/u/14918307/misaki-mac-sample/js/main.js"]}

 ;; post file compile hook
 :compile-with-post ["index.html.clj" "atom.xml.clj"]

 ;; tag setting
 :tag-layout "tag"

 ;; post setting
 ;;   default value: #"(\d{4})[-_](\d{1,2})[-_](\d{1,2})[-_](.+)$"
 :post-filename-regexp #"(\d{4})[-_](\d{1,2})[-_](\d{1,2})[-_](.+)$"
 :post-filename-format "{{year}}-{{month}}/{{filename}}"

 ;; post sort type (:date :name :title :date-desc :name-desc :title-desc)
 ;;   default value: :date-desc
 :post-sort-type :date-desc

 ;; clojurescript compile options
 ;; src-dir base is `:template-dir`
 ;; output-dir base is `:public-dir`
 ;:cljs {:src-dir       "cljs"
 ;       :output-to     "js/main.js"
 ;       :optimizations :simple
 ;       :pretty-print  true}

 ;; highlight setting
 :code-highlight {:CLJ "lang-clj", :CLOJURE "lang-clj"}
 }

