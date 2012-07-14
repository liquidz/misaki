; @layout  default
; @title   home

(header
  (:title site)
  (p "misaki is [Jekyll](https://github.com/mojombo/jekyll) inspired static site generator in [Clojure](http://clojure.org).")
  )


(two-column
  (list
    (h2 "Documents")
    (ul
      #(link (:title %) (:url %))
      (:posts site))

    (h2 "Demo")
    (ul [(link "http://liquidz.github.com/misaki/demo/")])

    (h2 "API")
    (ul
      [(link "API Index" "api/uberdoc.html")
       (list "Built in functions"
             (ul
               (fn [[k v]] (link k v))
               {"misaki.html.core" "api/uberdoc.html#misaki.html.core"
                "misaki.html.conv" "api/uberdoc.html#misaki.html.conv"
                "misaki.html.util" "api/uberdoc.html#misaki.html.util"}))]))

  (list
    (h2 "Try sample")
#-SH
$ git clone git://github.com/liquidz/misaki.git
$ cd misaki
$ lein run sample
SH

    (h2 "misaki?")
    (p "\"misaki(美咲)\" is woman's name in Japan, and it means \"Bloom beautifully\".")

    (h2 "License")
    (p "Copyright (C) 2012 Masashi Iizuka([@uochan](http://twitter.com/uochan/))

       Distributed under the Eclipse Public License, the same as Clojure.")))
