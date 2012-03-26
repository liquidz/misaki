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

(h2 "Block quote")
#-CLJ
(html/quote
  "foo
  bar"
  [:a {:href "#"} "baz"])
CLJ
(html/quote
  "foo
  bar"
  [:a {:href "#"} "baz"])

(h2 "Inline code")
#-CLJ
(html/code "clojure.core/+")
CLJ
(html/code "clojure.core/+")

(h2 "Source code")
[:p "Comment out following code."]
#-CLJ
;#-CLJ
;(let [msg "world"]
;  (println "hello," msg))
;CLJ
CLJ

#-CLJ
(let [msg "world"]
  (println "hello," msg))
CLJ
[:p "&quot;#-FOO .... FOO&quot; will be highlighted source code.
    &quot;FOO&quot; can be replaced any string,
    and if you define highlight setting in _config.clj,
    you can specify what the language is with this string. (e.g., CLJ)"]

(h2 "JavaScript")
#-CLJ
(html/js "a.js" "b.js")
CLJ

(h2 "Style Sheet")
#-CLJ
(html/css "a.css" "b.css")
CLJ
