; @title   default title
; @format  html5

[:head
 [:title
  (if (= (:title site) "home")
    (:site-title site)
    (str (:site-title site) " - " (:title site)))]

 [:link {:rel   "shortcut icon"
         :href  "/favicon.ico"}]
 [:link {:href  "/atom.xml"
         :rel   "alternate"
         :title (:title site)
         :type  "application/atom-xml"}]
 (css
   "http://fonts.googleapis.com/css?family=Josefin+Sans"
   "/css/prettify.css"
   "/css/main.css")]

[:body

 ; github ribbon
 (github-ribbon "https://github.com/liquidz/misaki")

 [:div {:class "container"}
;  [:header
;   [:h1 (link (:title site) "/")]
;   [:p (:copy site)]]

  contents

  [:footer {:class "footer"}
   [:p {:class "right"} (link "Back to top" "#")]
;   [:p (link (str "@" (:twitter-account site))
;             (str "http://twitter.com/" (:twitter-account site)))]
   [:p (link "@uochan" "http://twitter.com/uochan")
    "&nbsp;" 2012]]]

 (js
   "/js/prettify.js"
   "/js/lang-clj.js"
   "/js/main.js")]

