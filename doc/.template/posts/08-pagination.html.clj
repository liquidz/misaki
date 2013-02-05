; @layout  post
; @title   Pagination

(h2 "Pagination Setting")

(p "Pagination is defined by `:posts-per-page` option in _config.clj.

   Page filename can be customized with `:post-filename-format`.")

##CLJ
{
 ;; post number per page
 ;;   default value: nil (disabled pagination)
 :posts-per-page 5

 ;; filename format to generate index file with pagination
 ;;   default value: "page{{page}}/{{filename}}"
 ;;     @page    : page number(1..N)
 ;;     @filename: front page's filename
 :post-filename-format "page{{page}}/{{filename}}"
 }
CLJ

(h2 "Pagination links")
(p "If pagination is enabled, `site` variable contains `:next-url` and `:prev-url`.")

##CLJ
; link to next page
(if-let [url (:next-url site)]
  (link "next page" url))

; link to previous page
(if-let [url (:prev-url site)]
  (link "prev page" urj))
CLJ

(p "If you want to specify front page's filename,
   define `:index-template-regexp` in _config.clj.")

##CLJ
{
 ;; default value is #"^index\."
 :index-template-regexp #"^frontpage\.html\.clj"
 }
CLJ

