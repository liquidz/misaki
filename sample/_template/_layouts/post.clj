; @layout  default
; @title   post default title

(defn h2 [s]
  [:h2 [:span (first s)] (rest s)])

; site header
[:header
 [:h1 (link (:site-title site) "/")]]


[:article
 ; page header
 [:div {:class "page-header"}
  [:h1 [:span (-> site :title first)]
   (-> site :title rest)]
  [:p (-> site :date date->string)]]

 ; post tag
 [:div {:class "tag"}
  (ul #(link (str "[" (:name %) "]") (:url %))
           (:tag site))]

 ; contents
 [:div {:class "post"} contents]]

