;; Define template options here
; @layout  default
; @title   home

;; Your own function in template
(defn page-header [[fs & rs]]
  [:div {:class "page-header"}
   [:h1 [:span fs] rs]])

; Template is compiled with hiccup
(header
  (:title site)
  (link "Jekyll" "https://github.com/mojombo/jekyll")
  " inspired static site generator in Clojure")

;; Sample posts
(page-header "Sample posts")
(post-list)

;; Sample post tags
(page-header "Sample tags")
(tag-list)

;; Template source
(page-header "Template source")
[:p "you can highlight your code with "
 (link "google-code-prettify" "http://code.google.com/p/google-code-prettify/")]
#-CLOJURE
;; Define template options here
; @layout  default
; @title   home

;; Your own function in template
(defn page-header [[fs & rs]]
  [:div {:class "page-header"}
   [:h1 [:span fs] rs]])

; Template is compiled with hiccup
(header
  (:title site)
  (link "Jekyll" "https://github.com/mojombo/jekyll")
  " inspired static site generator in Clojure")

;; Sample posts
(page-header "Sample posts")
(post-list)

;; Sample post tags
(page-header "Sample tags")
(tag-list)

;; Template source
(page-header "Template source")
[:p "you can highlight your code with "
 (link "google-code-prettify" "http://code.google.com/p/google-code-prettify/")]
#-CLJ
CLJ

;; Document
(page-header "Document")
; Markdown like format with "p" function
(p "See " (link "http://liquidz.github.com/misaki/demo"))
CLOJURE

;; Document
(page-header "Document")
; Markdown like format with "p" function
(p "See " (link "http://liquidz.github.com/misaki/"))
