; @layout  default
; @title   tag default title

; site header
[:header
 [:h1 (html/link (:site-title site) "/")]]

[:article
 ; page header
 [:div {:class "page-header"}
  [:h1 [:span (-> site :tag-name first)]
   (-> site :tag-name rest)]]

 (html/ul
   #(html/link (:title %) (:url %))
   (:posts site)) ]

