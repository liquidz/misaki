; @layout  impress
; @title   misaki intro

;; ==
(group
  {:x 0 :y 0}
  (slide
    (h1 {:class "largest"} "misaki"))

  (slide
    {:x -210 :y 150 :scale 0.5}
    (p {:class "large"} "**Static site generator**"
    " in Clojure, inspired by [Jekyll](https://github.com/mojombo/jekyll)")))

;; ==
(group
  {:x 800 :y 400
   :rotate 30
   }
  (slide
    (h2 {:class "xx-large"} "What is advantage?"))

  (group
    {:scale 0.5}
    (slide
      {:class "code_sample"
       :x -400 :y 700}
      (h1 "Blog")
#-CLOJURE
; @layout default
; @title  blog sample
(header (:title site)
        "Welcome to my blog")
(h1 "Posts")
(post-list)
CLOJURE)

    (slide
      {:class "code_sample"
       :x 400 :y 760}
      (h1 "Presentation")
      (p "powered by [impress.js](http://bartaz.github.com/impress.js/)")
#-CLOJURE
; @layout impress
; @title  presen sample
(slide
  (h1 "hello world"))

(group {:rotate 90}
  (slide {:x 10 :y 20} "foo")
  (slide {:scale 2} "bar"))
CLOJURE)))

;; ==
(group
  {:x -200 :y 1000 :rotate 150}

  (slide
    (h2 {:class "x-large line-space"} "S-expression only ?"))

  (slide
    {:class "code_sample"
     :x -300 :y 400
     :scale 0.3
     }
    (h1 "Switch compiler!")
    (p "misaki supports [clostache](https://github.com/fhd/clostache) as compiler plugin.")
#-HTML
; @layout default
; @title  sample title
<h1>{{title}}</h1>
<h2>posts</h2>
<ul>
    {{#posts}}
    <li><a href="{{url}}">{{date}} - {{title}}</a></li>
    {{/posts}}
</ul>
HTML))

;; ==
(group
  {:x -600 :y 500
   :rotate -90
   :scale 0.3}

  (slide
    {:class "center"}
    (h1 {:class "xx-large"} "Customize as you want !"))

  (slide
    {:class "right" :x 0 :y -700}
    (p {:class "center"} (img "img/octocat.png"))
    (p {:class "center large"}
       "[Fork me on GitHub !](https://github.com/liquidz/misaki)")))


(slide
  {:x 200 :y 550 :scale 2 :id "overview"}
  "")


;; !! Overwrite layout specification in sample codes !!
; @layout  impress
; @title   misaki intro
