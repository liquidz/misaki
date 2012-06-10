{
 ;; directory setting
 :public-dir   "public/"
 :tag-out-dir  "tag/"
 :template-dir "_template/"
 ;:post-dir     "{{template-dir}}_posts/"
 :post-dir     "_posts/"
 ;:layout-dir   "{{template-dir}}_layouts/"
 :layout-dir   "_layouts/"


 ;; site language
 ;;   default value: "en"
 :lang "en"

 ;; default site data
 :site {:site-title "misaki"}

 ;; post file compile hook
 :compile-with-post ["index.html.clj" "atom.xml.clj"]

 ;; tag setting
 :tag-layout "tag"

 ;; post setting
 ;;   default value: #"(\d{4})[-_](\d{1,2})[-_](\d{1,2})[-_](.+)$"
 :post-filename-regexp #"(\d{4})[-_](\d{1,2})[-_](\d{1,2})[-_](.+)$"

; :post-filename-format "%year-%month/%file"
 :post-filename-format "{{year}}-{{month}}/{{filename}}"

 ;; highlight setting
 :code-highlight {:CLJ "lang-clj", :CLOJURE "lang-clj"}
 }

