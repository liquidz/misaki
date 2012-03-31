; Define template options here
;
; @layout  default
; @title   1hyde

; You can define your function in template
(defn h1 [s]
  [:h1 [:span (first s)] (rest s)])

(defn page-header [s]
  [:div {:class "page-header"} (h1 s)])

; Template is compiled with hiccup
[:header
 (h1 (:title site))
 [:p (html/link "Jekyll" "https://github.com/mojombo/jekyll")
  " inspired static site generator written by Clojure"]]

(page-header "Sample posts")
(html/ul
  #(html/link (str (conv/date->string (:date %))
                   " / " (:title %))
              (:url %))
  (:posts site))

(page-header "Template source")
[:p "you can highlight your code with "
 (html/link "google-code-prettify" "http://code.google.com/p/google-code-prettify/")]
#-CLJ
; Define template options here
;
; @layout  default
; @title   1hyde

; You can define your function in template
(defn h1 [s]
  [:h1 [:span (first s)] (rest s)])

(defn page-header [s]
  [:div {:class "page-header"} (h1 s)])

; Template is compiled with hiccup
[:header
 (h1 (:title site))
 [:p (html/link "Jekyll" "https://github.com/mojombo/jekyll")
  " inspired static site generator written by Clojure"]]

(page-header "Sample posts")
(html/ul
  #(html/link (str (conv/date->string (:date %))
                   " / " (:title %))
              (:url %))
  (:posts site))

(page-header "Template source")
[:p "you can highlight your code with "
 (html/link "google-code-prettify" "http://code.google.com/p/google-code-prettify/")]
;#-CLJ
;CLJ

(page-header "Documents")
[:p "See " (html/link "github Wiki" "https://github.com/liquidz/one-hyde/wiki") "."]

[:footer {:class "footer"}
 [:p {:class "right"} (html/link "Back to top" "#")]
 [:p (html/link "@uochan" "http://twitter.com/uochan") "&nbsp;" 2012]]
CLJ

(page-header "Documents")
[:p "See " (html/link "github Wiki" "https://github.com/liquidz/one-hyde/wiki") "."]

[:footer {:class "footer"}
 [:p {:class "right"} (html/link "Back to top" "#")]
 [:p (html/link "@uochan" "http://twitter.com/uochan") "&nbsp;" 2012]]
