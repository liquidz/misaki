; @layout  default
; @title   post default title

(defn see-also [titles]
  (list
    (h2 "See also..")
    (ul #(p (str "[" % "](title: " % ")")) titles)))

[:article
 ; page header
 [:div {:class "page-header"}
  ; post title
  (h1 (link (:title site) (:index site)))
  ; post tags
  (post-tags)
  ; post date
  (post-date)]

 ; contents
 [:div {:class "post"} contents
  [:p {:class "back"} "&raquo; " (link "Back to Top" (:index site))]]]

