; @layout  default
; @title   post default title

(defn post-header [s]
  [:div {:class "page-header"}
   [:h1 [:span (first s)] (rest s)]
   [:p (conv/date->string (:date site))]])

; site header
[:header
 [:h1 (html/link (list [:span "m"] "isaki") "/")]]

[:article
 ; page header
 [:div {:class "page-header"}
  [:h1 [:span (-> site :title first)]
   (-> site :title rest)]
  [:p (-> site :date conv/date->string)]]
 ; contents
 [:div {:class "post"} contents]]

[:footer {:class "footer"}
 [:p {:class "right"} (html/link "Back to top" "#")]
 [:p (html/link "@uochan" "http://twitter.com/uochan")
  "&nbsp;" 2012]]
