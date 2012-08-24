{
 ;; directory setting
 :public-dir   "public/"
 :template-dir "template/"
 :layout-dir   "layouts/"

 ;; posts and tags url setting
 ;;   default value: "/"
 ;;   ex)
 ;;     "/"    => "/YYYY-MM/POST.html"
 ;;     "/foo" => "/foo/YYYY-MM/POST.html"
 :url-base     "/misaki/demo/presentation"

 ;; dev server port
 ;;   default value: 8080
 :port 8080

 ;; site language
 ;;   default value: "en"
 :lang "en"

 ;; default site data
 :site {:charset "utf-8"
        :css     ["http://fonts.googleapis.com/css?family=Josefin+Sans"
                  "/css/common.css"
                  "/css/main.css"]}

 ;; highlight setting
 :code-highlight {:CLJ "lang-clj", :CLOJURE "lang-clj"}

 ;; compiler setting
 ;;   default value: "default"
 :compiler "default"
 }

