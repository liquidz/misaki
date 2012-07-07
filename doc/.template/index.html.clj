; @layout  default
; @title   home

(header
  (:title site)
  (p "misaki Documents"))

(h2 "Table of Contents")
(ul
  #(link (:title %) (:url %))
  (:posts site))

(h2 "API")

(ul
  [(link "API Index" "api/uberdoc.html")
   (list "Built in functions"
         (ul
           (fn [[k v]] (link k v))
           {"misaki.html.core" "api/uberdoc.html#misaki.html.core"
            "misaki.html.conv" "api/uberdoc.html#misaki.html.conv"
            "misaki.html.util" "api/uberdoc.html#misaki.html.util"}))])

(h2 "Demo")
(ul [(link "http://liquidz.github.com/project/misaki/")])

