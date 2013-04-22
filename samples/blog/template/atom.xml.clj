(str "<?xml version=\"1.0\" encoding=\"" (:charset site) "\"?>")
[:feed {:xmlns "http://www.w3.org/2005/Atom"}
 [:title   (:site-title site)]
 [:link    {:href (str (:atom-base site) "/atom.xml"), :rel "self"}]
 [:link    {:href (:atom-base site)}]
 [:updated (date->xml-schema (:date site))]
 [:id      (:atom-base site)]
 [:author  [:name (str "@" (:twitter site))]]

 (for [post (:posts site)]
   [:entry
    [:title   (:title post)]
    [:link    (str (:atom-base site) (:url post))]
    [:updated (date->xml-schema (:date post))]
    [:id      (str (:atom-base site) (:url post))]
    [:content {:type "html"}
     (force (:lazy-content post))]])]

