; @layout  post
; @title   Pagination
; @tag     tag3

(h1 (:page site))

(p "Pagination setting.")
##CLJ
:index-template-regexp #"^index\.html\.clj$"
:posts-per-page 2
:page-filename-format "page{{page}}/{{filename}}"
CLJ


