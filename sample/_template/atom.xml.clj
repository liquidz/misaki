; @title  1hyde
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

;<?xml version="1.0" encoding="utf-8"?>
;<feed xmlns="http://www.w3.org/2005/Atom">
;    <title>(code "liquidz.uo")</title>
;    <link href="http://liquidz.github.com/atom.xml" rel="self"/>
;    <link href="http://liquidz.github.com/"/>
;    <updated>{{ site.time | date_to_xmlschema }}</updated>
;    <id>http://liquidz.github.com/</id>
;    <author>
;        <name>uochan</name>
;    </author>
;
;    {% for post in site.posts %}
;    <entry>
;        <title>{{ post.title }}</title>
;        <link href="http://liquidz.github.com{{ post.url }}"/>
;        <updated>{{ post.date | date_to_xmlschema }}</updated>
;        <id>http://liquidz.github.com{{ post.id }}</id>
;        <content type="html">{{ post.content | xml_escape }}</content>
;    </entry>
;    {% endfor %}
;
;</feed>



