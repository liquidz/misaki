; @layout  default
; @title   post default title

(defn post-header [[fs & rs]]
  [:div {:class "page-header"}
   [:h1 [:span fs] rs]
   [:p (conv/date->string (:date site))]])

; site header
[:header
 [:h1 (html/link (:site-title site) "/")]]

[:article
 ; page header
 [:div {:class "page-header"}
  [:h1 [:span (-> site :title first)]
   (-> site :title rest)]
  [:p (-> site :date conv/date->string)]]
 ; contents
 [:div {:class "post"} contents]]

