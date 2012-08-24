; @layout  post
; @title   Getting Started

(h2 "Running sample")

##SH
$ git clone git://github.com/liquidz/misaki.git
$ cd misaki
$ lein run samples/blog
SH

(p "Access " (link "http://localhost:8080"))

;;;;
(h2 "Make your own blog")

(p "Copy sample directory.")

##SH
$ cp -pir samples/blog your_blog
SH

(p "Run develop server.")

##SH
$ lein run your_blog
SH

(p "If you want to do compiling only, use `--compile` option.")

##SH
$ lein run your_blog --compile
SH

(p "Edit templates. If you update template files, misaki will compile them **automatically**, and you can preview at " (link "http://localhost:8080") " immediately.")

##SH
$ vi your_blog/templates/index.html.clj
SH

(see-also ["Directory Structure"
           "Edit Template"])

