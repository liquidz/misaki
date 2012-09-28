; @layout  default
; @title   post default title

; site header
(header (:site-title site))

[:article
 ; page header
 [:div {:class "page-header"}
  ; post title
  (h1 (:title site))
  ; post tags
  (post-tags)
  ; post date
  (post-date)]

 ; contents
 [:div {:class "post"} contents]

 ; previous/next post
 (prev-next-post-link)]

