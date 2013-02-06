; parts definition
(def common (list :margin 0 :padding 0))

; rule with variable
[:div common :color "#f00"]

; rule list
(map
  (fn [tag] [tag :font-size "150%"])
  [:h1 :h2])
