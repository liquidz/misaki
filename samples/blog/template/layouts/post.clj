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

 ; pager
 (p {:class "pager"}
    (if-let [prev (:prev site)]
      (list "&laquo;" (link (:title prev) (:url prev))))
    (if (and (:prev site) (:next site))
      (list " | "))
    (if-let [next (:next site)]
      (list (link (:title next) (:url next)) "&raquo;")))]

