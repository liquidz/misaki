;; Define template options here
; @layout  default
; @title   misaki

;; You can define your function in template
(defn page-header [[fs & rs]]
  [:div {:class "page-header"}
   [:h1 [:span fs] rs]])

;; Template is compiled with hiccup
[:header
 [:h1 (html/link (:title site) "/")]
 [:p (html/link "Jekyll" "https://github.com/mojombo/jekyll")
  " inspired static site generator in Clojure"]]

;; Sample posts
(page-header "Sample posts")
(html/ul
  #(html/link (:title %) (:url %))
  (:posts site))

;; Sample post tags
(page-header "Sample tags")
(html/ul
  #(html/link (str (:name %) " (" (:count %) ")")
              (:url %))
  (:tags site))

;; Template source
(page-header "Template source")
[:p "you can highlight your code with "
 (html/link "google-code-prettify" "http://code.google.com/p/google-code-prettify/")]
#-CLOJURE
;; Define template options here
; @layout  default
; @title   misaki

;; You can define your function in template
(defn page-header [[fs & rs]]
  [:div {:class "page-header"}
   [:h1 [:span fs] rs]])

;; Template is compiled with hiccup
[:header
 [:h1 (html/link (:title site) "/")]
 [:p (html/link "Jekyll" "https://github.com/mojombo/jekyll")
  " inspired static site generator in Clojure"]]

;; Sample posts
(page-header "Sample posts")
(html/ul
  #(html/link (:title %) (:url %))
  (:posts site))

;; Sample post tags
(page-header "Sample tags")
(html/ul
  #(html/link (str (:name %) " (" (:count %) ")")
              (:url %))
  (:tags site))

;; Template source
(page-header "Template source")
[:p "you can highlight your code with "
 (html/link "google-code-prettify" "http://code.google.com/p/google-code-prettify/")]
#-CLJ
CLJ

;; Document
(page-header "Document")
[:p "See " (html/link "github Wiki" "https://github.com/liquidz/misaki/wiki") "."]
CLOJURE

;; Document
(page-header "Document")
[:p "See " (html/link "github Wiki" "https://github.com/liquidz/misaki/wiki") "."]

