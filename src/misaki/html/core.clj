(ns misaki.html.core
  "misaki: HTML utility for template"
  (:use [misaki.config :only [*site*]])
  (:require
    [clojure.string :as str]
    [hiccup.core :as hiccup]
    [hiccup.page :as page]
    [misaki.html.conv :as conv]))

(declare link)

;; ## Utilities

(defn- tag? [x]
  (and (vector? x) (keyword? (first x))))

(defn- name*
  "`name` function ignoring namespaced keyword

      (name :a/b)
      ;=> \"b\"
      (name* :a/b)
      ;=> \"a/b\""
  [k]
  (if (keyword? k) (apply str (rest (str k))) k))

(defmacro defparser
  "Macro to define string parser."
  [name regexp result-fn]
  `(defn- ~name [arg#]
     (if (string? arg#)
       (str/replace arg# ~regexp ~result-fn)
       arg#)))

;; Parse link
(defparser parse-link
  #"\[(.+?)\]\((.+?)\)"
  #(hiccup/html (link (nth % 1) (nth % 2))))

;; Parse emphasized
;;
;;      *hello*
;;      ;=> <em>hello</em>
(defparser parse-emphasized
  #"\*(.+?)\*" #(hiccup/html [:em (second %)]))

;; Parse strong
;;
;;      **hello**
;;      ;=> <strong>hello</strong>
(defparser parse-strong
  #"\*\*(.+?)\*\*" #(hiccup/html [:strong (second %)]))

;; Parse inline code
;;
;;     `hello`
;;     ;=> <code class="prettyprint">hello</code>
(defparser parse-inline-code
  #"`([^`]+)`" #(hiccup/html [:code {:class "prettyprint"} (second %)]))

;; Function to apply string parsers
(def ^:private parse-string
  (comp parse-link parse-emphasized parse-strong parse-inline-code))

;; ## HTML Tags

(defn js
  "Include JavaScript

      (js \"foo.js\" \"bar.js\")
      ;=> <script type=\"text/javascript\" src=\"foo.js\"></script>
      ;=> <script type=\"text/javascript\" src=\"bar.js\"></script>"
  [& args]
  (apply page/include-js (flatten args)))

(defn css
  "Include Cascading Style Sheet

      (css \"foo.css\" \"bar.css\")
      ;=> <link rel=\"stylesheet\" type=\"text/css\" href=\"foo.css\" />
      ;=> <link rel=\"stylesheet\" type=\"text/css\" href=\"bar.css\" />"
  [& args]
  (let [args (flatten args)
        [opt & hrefs] (if (map? (first args)) args (cons {} args))
        attrs (map #(merge {:rel "stylesheet" :type "text/css" :href %} opt) hrefs)]
    (map #(vector :link %) attrs)))

(defn heading
  "Make heading tag"
  [n s]
  (let [tag (keyword (str "h" n))]
    [tag [:span (first s)] (rest s)]))
(def h1 (partial heading 1))
(def h2 (partial heading 2))
(def h3 (partial heading 3))
(def h4 (partial heading 4))
(def h4 (partial heading 5))
(def h4 (partial heading 6))

(defn ul
  "Make unordered list

      (ul [1 2])
      ;=> <ul><li><span>1</span></li><li><span>2</span></li></ul> "
  ([ls] (ul parse-string ls))
  ([f ls]
   [:ul (for [x ls] [:li [:span (f x)]])]))


(defn dl
  "Make definition list

      (dl {:foo \"bar\"})
      ;=> <dl><dt>foo</dt><dd>bar</dd></dl>
      (dl [:foo \"bar\"])
      ;=> <dl><dt>foo</dt><dd>bar</dd></dl>"
  [x]
  (if (map? x) (dl (mapcat identity x))
    [:dl
     (map (fn [[dt dd]]
            (list [:dt (parse-string (name* dt))]
                  [:dd (parse-string dd)]))
          (partition 2 x))]))


(defn img
  "Make image

      (img \"bar.jpg\")
      ;=> <img src=\"bar.jpg\" />
      (img \"foo\" \"bar.jpg\")
      ;=> <img alt=\"foo\" src=\"bar.jpg\" />"
  ([src] (img "" src))
  ([alt src]
   [:img {:alt alt :src src}]))

(defn link
  "Make link

      (link \"foo.html\")
      ;=> <a href=\"foo.html\">foo.html</a>
      (link \"foo\" \"bar.html\")
      ;=> <a href=\"foo.html\">bar</a>"
  ([href] (link href href))
  ([label href] [:a {:href href} (parse-string label)]))

(defn blockquote
  "Make blockquote

      (blockquote \"foo\" \"bar\")
      ;=> <blockquote><p>foo</p><p>bar</p></blockquote>"
  [& xs]
  [:blockquote
   (map
     #(if (string? %)
        (map (fn [x] [:p x]) (str/split-lines %))
        [:p %])
     xs)])

(defmacro code
  "Make inline code

      (code hello)
      ;=> <code class=\"prettyprint\">hello</code>"
  [s]
  [:code {:class "prettyprint"} (str s)])

(defn table
  "Make table

      (table [[1 2]])
      ;=> <table><tbody><tr><td>1</td><td>2</td></tr></tbody></table>
      (table '[a b] [[1 2]])
      ;=> <table><thead><tr><th>a</th><th>b</th></tr></thead>
      ;          <tbody><tr><td>1</td><td>2</td></tr></tbody></table>"
  ([bodies] (table nil bodies))
  ([head bodies]
   [:table
    (if head [:thead [:tr (for [h head] [:th h])]])
    [:tbody
     (for [body bodies]
       [:tr (for [b body] [:td (parse-string b)])])]]))


(defn links
  "Make link list

      (links \"aa\" \"aa.html\"
             \"bb\" \"bb.html\")
      ;=> <ul><li><span><a href=\"aa.html\">aa</a></span></li>
              <li><span><a href=\"bb.html\">bb</a></span></li></ul>"
  [& title-url-pairs]
  (ul #(apply link %) (partition 2 title-url-pairs)))

(defn p
  "Make paragraph"
  [& s]
  [:p {:class "paragraph"} (map parse-string s)])

(defn- header-decoration [[first-char & rest-chars]]
  (list [:span {:class "first_char"} first-char]
        rest-chars))

(defn header [h & p]
  [:header
   [:h1 (link (header-decoration h) "/")]
   (if p [:p p])])

(defn container [& body]
  [:div {:class "container"} body])

(defn footer [& p]
  [:footer {:class "footer"}
   [:p {:class "right"} (link "Back to top" "#")]
   [:p p]])

(defn post-list []
  (ul
    #(list
       (conv/date->string (:date %))
       "&nbsp;-&nbsp;"
       (link (:title %) (:url %)))
    (:posts *site*)))

(defn tag-list []
  (ul
    #(link (str (:name %) " (" (:count %) ")")
           (:url %))
    (:tags *site*)))


(defn post-tags
  [& {:keys [class] :or {class "tag"}}]
  [:div {:class class}
   (ul #(link (:name %) (:url %)) (:tag *site*))])

(defn post-date
  []
  [:p {:class "date"} (-> *site* :date conv/date->string)])

