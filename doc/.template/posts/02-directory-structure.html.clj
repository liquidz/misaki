; @layout  post
; @title   Directory Structure


(h2 "Default structure")
[:pre {:class "block"} "
root/
  |
  +- template/
  |   |
  |   +- posts/
  |   |   |
  |   |   +-  YYYY-MM-DD-posttitle.html.clj
  |   |
  |   +- layouts/
  |   |   |
  |   |   +- default.clj
  |   |
  |   +- index.html.clj
  |
  +- public/
  |   |
  |   +- css/
  |   |
  |   +- js/
  |
  +- _config.clj"]


(h3 "root/")
(p "All public static files such as JavaScripts and StyleSheets are here. Compiled tempates are also putted here.")

(h3 "template/")
(p "Template root directory.")

(h3 "template/posts/")
(p "Blog posts data directory. All post files should be named **YYYY-MM-DD-posttitle.html.clj** as same as [Jekyll](https://github.com/mojombo/jekyll) filename format.
  This naming format can be configured **_config.clj**")

(h3 "template/layouts/")
(p "All layout files are here.")

(h3 "template/index.html.clj")
(p "Template file. When misaki compile templates, last extension(`.clj` in this case) is removed.

To edit templates, See [Edit Template](title:Edit Template).")

#-TEXT
index.html.clj => COMPILE => index.html
TEXT

(h3 "public/")
(p "Public root directory. Static files are here.")

(h3 "_config.clj")
(p "Configuration file for misaki.")
#-CLJ
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
 :site {:site-title "misaki"
        :twitter    "uochan"
        :css        ["http://fonts.googleapis.com/css?family=Josefin+Sans"
                     "/css/main.css"]
        :device-css ["/css/smartphone.css"]
        :js         ["/js/main.js"]}

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
 ;       :optimizations :whitespace
 ;       :pretty-print true}

 ;; highlight setting
 :code-highlight {:CLJ "lang-clj", :CLOJURE "lang-clj"}

 ;; flag for detailed log
 ;;   default value: false
 :detailed-log false

 ;; flag for error notification
 ;;   default value: false
 :notify? false

 ;; notify setting(OPTIONAL)
 :notify-setting {;; title for fixing notification
                  ;;  default value: "{{filename}}"
                  :fixed-title  "{{filename}}"
                  ;; message for fixing notication
                  ;;   default value: "FIXED"
                  :fixed        "FIXED"
                  ;; title for failing notification
                  ;;   default value: "{{filename}} : {{line}}"
                  :failed-title "{{filename}} : {{line}}"
                  ;; message for failing notification
                  ;;   default value: {{message}}
                  :failed       "{{message}}"}

 ;; compiler setting
 ;;   default value: "default"
 :compiler "default"
 }
CLJ

(ul [">= 0.2.6, Growl notify only support GNTP. If you want to use Growl notification with UDP, please checkout <= 0.2.5 version."
     "See [Highlight Setting](title: Highlight Setting) about code highlight setting."])

(see-also ["Edit Template"
           "Highlight Setting"])
