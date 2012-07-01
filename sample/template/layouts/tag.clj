; @layout  default
; @title   tag default title

; site header
(header (:site-title site))

[:article
 ; page header
 [:div {:class "page-header"}
  (h1 (:tag-name site))]

 (ul #(link (:title %) (:url %))
     (:posts site))]

