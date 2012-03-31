; @title   default title
; @format  html5

[:head [:title (:title site)]
 [:link {:rel   "shortcut icon"
         :href  "/favicon.ico"}]
 [:link {:href  "/atom.xml"
         :rel   "alternate"
         :title (:title site)
         :type  "application/atom-xml"}]
 (html/css
   "http://fonts.googleapis.com/css?family=Josefin+Sans"
   "/css/prettify.css"
   "/css/main.css"
   )]

[:body
 ; github ribbon
 [:a {:href "https://github.com/liquidz/misaki"}
  [:img {:style "position: absolute; top: 0; right: 0; border: 0;"
         :alt "Fork me on GitHub"
         :src "https://a248.e.akamai.net/assets.github.com/img/e6bef7a091f5f3138b8cd40bc3e114258dd68ddf/687474703a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f7265645f6161303030302e706e67"}]]

 [:div {:class "container"}
  contents

  [:footer {:class "footer"}
   [:p {:class "right"} (html/link "Back to top" "#")]
   [:p (html/link "@uochan" "http://twitter.com/uochan")
    "&nbsp;" 2012]]]

 (html/js
   "/js/prettify.js"
   "/js/lang-clj.js"
   "/js/main.js")]

