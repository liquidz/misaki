; layout: post
; title: Sample components

(defn h2 [s]
  [:h2 [:span (first s)] (rest s)])

(h2 "Link")
#-CLJ
(html/link "label" "http://localhost/")
CLJ
(html/link "label" "http://localhost/")

(h2 "Unordered list")
#-CLJ
(html/ul (range 3))
CLJ
(html/ul (range 3))

(h2 "Definition list")
#-CLJ
(html/dl {:a 1, :b 2})
(html/dl [:hello "world" :foo "bar"])
CLJ
(html/dl {:a 1, :b 2})
(html/dl [:hello "world" :foo "bar"])

(h2 "JavaScript")
#-CLJ
(html/js "a.js" "b.js")
CLJ

(h2 "Style Sheet")
#-CLJ
(html/css "a.css" "b.css")
CLJ
