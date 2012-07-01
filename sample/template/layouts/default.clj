; @title  default title
; @format html5

[:head
 [:meta {:name    "viewport"
         :content "width=device-width, initiali-scale=1.0, user-scalable=yes"}]

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

 (css ["/css/prettify.css" (:css site ())])
 (css {:media "only screen and (max-device-width:480px)"} (:device-css site))
 ]
; /head

[:body

 ; github ribbon
 (github-ribbon "https://github.com/liquidz/misaki")

 (container
  contents

  (footer
    (link (str "@" (:twitter site)) (str "http://twitter.com/" (:twitter site)))
    "&nbsp; 2012"))
 ; /container

 (js ["/js/prettify.js"
      "/js/lang-clj.js"
      (:js site ())])]
; /body
