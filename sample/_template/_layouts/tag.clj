; @layout  default
; @title   tag default title

; site header
[:header
 [:h1 (link (:site-title site) "/")]]

[:article
 ; page header
 [:div {:class "page-header"}
  [:h1 [:span (-> site :tag-name first)]
   (-> site :tag-name rest)]]

 (ul
   #(link (:title %) (:url %))
   (:posts site)) ]

