; @title  misaki
; @base   http://localhost:8080

"<?xml version=\"1.0\" encoding=\"utf-8\"?>"
[:feed {:xmlns "http://www.w3.org/2005/Atom"}
 [:title (:title site)]
 [:link {:href (str (:base site) "/atom.xml"), :rel "self"}]
 [:link {:href (:base site)}]
 [:updated (conv/date->xml-schema (:date site))]
 [:id (:base site)]
 [:author [:name "@uochan"]]

 (map
   (fn [post]
     [:entry
      [:title (:title post)]
      [:link  (str (:base site) (:url post))]
      [:updated (conv/date->xml-schema (:date post))]
      [:id (str (:base site) (:url post))]
      [:content {:type "html"}
       (force (:lazy-content post) )]])
   (:posts site))]

