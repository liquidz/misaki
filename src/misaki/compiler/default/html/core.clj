(ns misaki.compiler.default.html.core
  "HTML utility for template"
  (:use
    [misaki.compiler.default.config :only [*site*]]
    [misaki.config :only [get-index-filename absolute-path]]
    [misaki.compiler.default.html.conv :only [post-title->url]])
  (:require
    [clojure.string :as str]
    [hiccup.core :as hiccup]
    [hiccup.page :as page]
    [misaki.compiler.default.html.conv :as conv]
    [misaki.util.date :as date]))

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

(defn- link-from-title? [s]
  (if-let [m (re-seq #"^title:\s*(.+?)$" s)]
    (-> m first second)))

;; Parse link
;;
;;      [hello](world)
;;      ;=> <a href="world">hello</a>
;;
;;      [hello](title: POST TITLE)
;;      ;=> <a href="POST URL">hello</a>
(defparser parse-link
  #"\[(.+?)\]\((.+?)\)"
  #(let [[_ alt href] %]
     (if-let [title (link-from-title? href)]
       (hiccup/html (link alt (post-title->url title)))
       (hiccup/html (link alt href)))))

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

(defparser parse-new-line
  #"(\r?\n){2}" (fn [_] (hiccup/html [:br])))

;; Function to apply string parsers
(def ^:private parse-string
  (comp parse-new-line parse-link parse-emphasized parse-strong parse-inline-code))

;; ## HTML Tags

(defn js
  "Include JavaScript

      (js \"foo.js\" \"bar.js\")
      ;=> <script type=\"text/javascript\" src=\"foo.js\"></script>
      ;=> <script type=\"text/javascript\" src=\"bar.js\"></script>"
  [& args]
  (apply page/include-js (flatten args)))

(defn absolute-js
  "Include JavaScript from *url-base* setting."
  [& args]
  (let [args (map #(absolute-path %) (flatten args))]
    (apply js args)))

(defn css
  "Include Cascading Style Sheet.

      (css \"foo.css\" \"bar.css\")
      ;=> <link rel=\"stylesheet\" type=\"text/css\" href=\"foo.css\" />
      ;=> <link rel=\"stylesheet\" type=\"text/css\" href=\"bar.css\" />
      (css {:media \"screen\"} \"foo.css\" \"bar.css\")
      ;=> <link rel=\"stylesheet\" type=\"text/css\" media=\"screen\" href=\"foo.css\" />
      ;=> <link rel=\"stylesheet\" type=\"text/css\" media=\"screen\" href=\"bar.css\" />"
  [& args]
  (let [args (flatten args)
        [opt & hrefs] (if (map? (first args)) args (cons {} args))
        attrs (map #(merge {:rel "stylesheet" :type "text/css" :href %} opt) hrefs)]
    (map #(vector :link %) attrs)))

(defn absolute-css
  "Include Cascading Style Sheet from *url-base* setting.

   ex) :url-base \"/foo\"

      (absolute-css \"bar.css\")
      ;=> <link rel=\"stylesheet\" type=\"text/css\" href=\"/foo/bar.css\" />
      (absolute-css \"/bar.css\")
      ;=> <link rel=\"stylesheet\" type=\"text/css\" href=\"/foo/bar.css\" />
      (absolute-css \"http://localhost/bar.css\")
      ;=> <link rel=\"stylesheet\" type=\"text/css\" href=\"http://localhost/bar.css\" />"
  [& args]
  (let [args (flatten args)
        [opt & args] (if (map? (first args)) args (cons {} args))
        args (map #(absolute-path %) args)]
    (apply css (cons opt args))))

(defn heading
  "Make heading tag

      (heading 1 \"hello\")
      ;=> <h1><span>h</span>ello</h1>
      (heading 1 {:class \"foo\"} \"hello\")
      ;=> <h1 class=\"foo\"><span>h</span>ello</h1>
  "
  ([n s]
   (heading n {} s))
  ([n attr s]
   (let [tag (keyword (str "h" n))]
     [tag attr [:span (first s)] (rest s)])))
(def h1 (partial heading 1))
(def h2 (partial heading 2))
(def h3 (partial heading 3))
(def h4 (partial heading 4))
(def h5 (partial heading 5))
(def h6 (partial heading 6))

(defn ul
  "Make unordered list

      (ul [1 2])
      ;=> <ul><li><span>1</span></li><li><span>2</span></li></ul>
      (ul inc [1 2])
      ;=> <ul><li><span>2</span></li><li><span>3</span></li></ul>
      (ul {:class \"foo\"} [1 2])
      ;=> <ul class=\"foo\"><li><span>1</span></li><li><span>2</span></li></ul>
      (ul inc {:class \"foo\"} [1 2])
      ;=> <ul class=\"foo\"><li><span>2</span></li><li><span>3</span></li></ul>
  ;
  "
  ([ls] (ul parse-string {} ls))
  ([x ls]
   (cond
     (fn? x)  (ul x {} ls)
     (map? x) (ul parse-string x ls)
     :else    (ul parse-string {} ls)))
  ([f attr ls]
   [:ul attr (for [x ls] [:li [:span (f x)]])]))


(defn dl
  "Make definition list

      (dl {:foo \"bar\"})
      ;=> <dl><dt>foo</dt><dd>bar</dd></dl>
      (dl [:foo \"bar\"])
      ;=> <dl><dt>foo</dt><dd>bar</dd></dl>
      (dl {:class \"foo\"} {:foo \"bar\"})
      ;=> <dl class=\"foo\"><dt>foo</dt><dd>bar</dd></dl>
  "
  ([x] (dl {} x))
  ([attr x]
   (if (map? x) (dl attr (mapcat identity x))
     [:dl
      attr
      (map (fn [[dt dd]]
             (list [:dt (parse-string (name* dt))]
                   [:dd (parse-string dd)]))
           (partition 2 x))])))


(defn img
  "Make image

      (img \"bar.jpg\")
      ;=> <img src=\"bar.jpg\" />
      (img \"foo\" \"bar.jpg\")
      ;=> <img alt=\"foo\" src=\"bar.jpg\" />
      (img {:class \"foo\"} \"bar.jpg\")
      ;=> <img class=\"foo\" src=\"bar.jpg\" />
      (img {:class \"foo\"} \"foo\" \"bar.jpg\")
      ;=> <img alt=\"foo\" class=\"foo\" src=\"bar.jpg\" />
  "
  ([src] (img {} "" src))
  ([x src]
   (cond
     (string? x) (img {} x src)
     (map? x)    (img x "" src)
     :else       (img {} "" src)))
  ([attr alt src]
   [:img (merge attr {:alt alt :src src})]))

(defn link
  "Make link

      (link \"foo.html\")
      ;=> <a href=\"foo.html\">foo.html</a>
      (link \"foo\" \"bar.html\")
      ;=> <a href=\"bar.html\">foo</a>
      (link {:class \"foo\"} \"foo.html\")
      ;=> <a class=\"foo\" href=\"foo.html\">foo.html</a>
      (link {:class \"foo\"} \"foo\" \"bar.html\")
      ;=> <a class=\"foo\" href=\"bar.html\">foo</a>
  "
  ([href] (link {} href href))
  ([x href]
   (cond
     (or (string? x) (vector? x)) (link {} x href)
     (map? x)    (link x href href)
     :else       (link {} href href)))
  ([attr label href]
   [:a (merge attr {:href href}) (parse-string label)]))

(defn blockquote
  "Make blockquote

      (blockquote \"foo\" \"bar\")
      ;=> <blockquote><p>foo</p><p>bar</p></blockquote>
      (blockquote \"foo\\nbar\")
      ;=> <blockquote><p>foo</p><p>bar</p></blockquote>
      (blockquote {:class \"bar\"} \"foo\")
      ;=> <blockquote class=\"bar\"><p>foo</p></blockquote>
  "
  [& xs]
  (let [[attr & xs] (if (-> xs first map?) xs (cons {} xs))]
    [:blockquote
     attr
     (map
       #(if (string? %)
          (map (fn [x] [:p x]) (str/split-lines %))
          [:p %])
       xs)]))

(defmacro code
  "Make inline code

      (code hello)
      ;=> <code class=\"prettyprint\">hello</code>
      (code {:class \"foo\"} hello)
      ;=> <code class=\"prettyprint foo\">hello</code>
  "
  ([s] `(code {} ~s))
  ([attr s]
   [:code
    (merge-with #(str % " " %2) {:class "prettyprint"} attr) (str s)]))

(defn table
  "Make table

      (table [[1 2]])
      ;=> <table><tbody><tr><td>1</td><td>2</td></tr></tbody></table>
      (table '[a b] [[1 2]])
      ;=> <table><thead><tr><th>a</th><th>b</th></tr></thead>
      ;          <tbody><tr><td>1</td><td>2</td></tr></tbody></table>
      (table {:class \"foo\"} [[1 2]])
      ;=> <table class=\"foo\"><tbody><tr><td>1</td><td>2</td></tr></tbody></table>
      (table {:class \"foo\"} '[a b] [[1 2]])
      ;=> <table class=\"foo\"><thead><tr><th>a</th><th>b</th></tr></thead>
      ;          <tbody><tr><td>1</td><td>2</td></tr></tbody></table>
  "
  ([bodies] (table {} nil bodies))
  ([x bodies]
   (cond
     (sequential? x) (table {} x bodies)
     (map? x)        (table x nil bodies)
     :else           (table {} nil bodies)))
  ([attr head bodies]
   [:table
    attr
    (if (and head (sequential? head))
      [:thead [:tr (for [h head] [:th h])]])
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
  "Make paragraph

      (p \"hello\")
      ;=> <p class=\"paragraph\">hello</p>
      (p {:class \"foo\"} \"hello\")
      ;=> <p class=\"paragraph foo\">hello</p>
  "
  [& s]
  (let [[opt & s] (if (-> s first map?) s (cons {} s))
        attr (merge-with #(str/join " " %&) {:class "paragraph"} opt)]
    [:p attr (map parse-string s)]))

(defn- header-decoration [x]
  (if (string? x)
    (let [[first-char & rest-chars] x]
      (list [:span {:class "first_char"} first-char]
            rest-chars))
    x))

(defn header
  "Make default header tag."
  [h & p]
  [:header
   [:h1 (link (header-decoration h) (get-index-filename))]
   (if p [:p p])])

(defn container
  "Make default container tag."
  [& body]
  [:div {:class "container"} body])

(defn footer
  "Make default footer."
  [& p]
  [:footer {:class "footer"}
   [:p {:class "right back_to_top"} (link "Back to top" "#")]
   [:p p]])

(defn post-list
  "Make default all posts unordered list.

      (post-list)
      (post-list {:class \"foo \"})
  "
  ([] (post-list {}))
  ([attr]
   (ul
     #(list
        (date/date->string (:date %))
        "&nbsp;-&nbsp;"
        (link (:title %) (:url %)))
     attr
     (:posts *site*))))

(defn tag-list
  "Make default all tags unordered list.

      (tag-list)
      (tag-list {:class \"foo\"})
  "
  ([] (tag-list {}))
  ([attr]
   (ul
     #(link (str (:name %) " (" (:count %) ")")
            (:url %))
     attr
     (:tags *site*))))


(defn post-tags
  "Make default post tags unordered list."
  [& {:keys [class] :or {class "tag"}}]
  [:div {:class class}
   (ul #(link (:name %) (:url %)) (:tag *site*))])

(defn post-date
  "Make default post date tag."
  []
  [:p {:class "date"} (-> *site* :date date/date->string)])

(defn two-column
  "Make 2 column"
  [left right]
  [:div {:class "column"}
   [:div {:class "w50per"} left]
   [:div {:class "w50per"} right]])
