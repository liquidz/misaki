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
  +- css/
  |
  +- js/
  |
  +- _config.clj"]


;----
(h3 "root/")
(p "All public static files such as JavaScripts and StyleSheets are here. Compiled tempates are also putted here.")
;----
(h3 "tempalte/")
(p "Template root directory.")
;----
(h3 "template/posts/")
(p "Blog posts data directory. All post files should be named **YYYY-MM-DD-posttitle.html.clj** as same as [Jekyll](https://github.com/mojombo/jekyll) filename format.
  This naming format can be configured **_config.clj**")
;----
(h3 "template/layouts/")
(p "All layout files are here.")
;----
(h3 "template/index.html.clj")
(p "Template file. When misaki compile templates, last extension(`.clj` in this case) is removed.

To edit templates, See [Edit Template](title:Edit Template).")

#-TEXT
index.html.clj => COMPILE => index.html
TEXT

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
 ;       :optimizations :advanced}

 ;; highlight setting
 :code-highlight {:CLJ "lang-clj", :CLOJURE "lang-clj"}
 }
CLJ

(p "See [Highlight Setting](title: Highlight Setting) about code highlight setting.")


