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

 ;; dev server port
 ;;   default value: 8080
 :port 8080

 ;; site language
 ;;   default value: "en"
 :lang "en"

 ;; default site data
 :site {:charset    "utf-8"
        :site-title "misaki demo page"
        :twitter    "uochan"
        :css        ["http://fonts.googleapis.com/css?family=Josefin+Sans"
                     "/css/main.css"
                     "/css/extra.css"]
        :device-css ["/css/smartphone.css"]
        :js         ["/js/main.js"]}

 ;; post file compile hook
 :compile-with-post ["index.html.clj" "atom.xml.clj"]

 ;; tag setting
 :tag-layout "tag"

 ;; post setting
 ;;   default value: #"(\d{4})[-_](\d{1,2})[-_](\d{1,2})[-_](.+)$"
 :post-filename-regexp #"(\d{4})[-_](\d{1,2})[-_](\d{1,2})[-_](.+)$"
 :post-filename-format "$(year)-$(month)/$(filename)"

 ;; post sort type (:date :name :title :date-desc :name-desc :title-desc)
 ;;   default value: :date-desc
 :post-sort-type :date-desc

 ;; regexp to detect index template
 ;;   default value: #"^index\."
 :index-template-regexp #"^index\.html\.clj$"

 ;; post number per page
 ;;   default value: nil (disabled pagination)
 :posts-per-page 2

 ;; filename format to generate index file with pagination
 ;;   default value: "page{{page}}/{{filename}}"
 :page-filename-format "page$(page)/$(filename)"

 ;; clojurescript compile options
 ;; src-dir base is `:template-dir`
 ;; output-dir base is `:public-dir`
 ;:cljs {:src-dir       "cljs"
 ;       :output-to     "js/main.js"
 ;       :optimizations :whitespace
 ;       :pretty-print true}

 ;; highlight setting
 :code-highlight {:CLJ "lang-clj", :CLOJURE "lang-clj"}

 ;; flag for detailed log
 ;;   default value: false
 :detailed-log true;false

 ;; flag for error notification
 ;;   default value: false
 :notify? false

 ;; notify setting(OPTIONAL)
 :notify-setting {;; title for fixing notification
                  ;;  default value: "{{filename}}"
                  :fixed-title  "$(filename)"
                  ;; message for fixing notication
                  ;;   default value: "FIXED"
                  :fixed        "FIXED"
                  ;; title for failing notification
                  ;;   default value: "{{filename}} : {{line}}"
                  :failed-title "$(filename) : $(line)"
                  ;; message for failing notification
                  ;;   default value: {{message}}
                  :failed       "$(message)"}

 ;; compiler setting
 ;;   default value: "default"
 :compiler "default"
 }

