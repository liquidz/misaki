(ns misaki.html.core
  "misaki: html utility for template"
  (:require
    [clojure.string :as str]
    [hiccup.page-helpers :as page]))

(defn- tag? [x]
  (and (vector? x) (keyword? (first x))))

(defn- name*
  "(name :a/b)  => \"b\"
   (name* :a/b) => \"a/b\""
  [k]
  (apply str (rest (str k))))

(defn js [& args]
  (apply page/include-js args))

(defn css [& args]
  (apply page/include-css args))


(defn ul
  ([ls] (ul identity ls))
  ([f ls]
   [:ul (for [x ls] [:li [:span (f x)]])]))


(defn dl
  [x]
  (if (map? x) (dl (mapcat identity x))
    [:dl
     (map (fn [[dt dd]]
            (list [:dt (name* dt)] [:dd dd]))
          (partition 2 x))]))


(defn img
  ([src] (img "" src))
  ([alt src]
   [:img {:alt alt :src src}]))

(defn link
  ([href] (link href href))
  ([label href] [:a {:href href} label]))

(defn blockquote [& xs]
  [:blockquote
   (map
     #(if (string? %)
        (map (fn [x] [:p x]) (str/split-lines %))
        [:p %])
     xs)])

(defmacro code [s]
  [:code {:class "prettyprint"} (str s)])

(defn table
  ([bodies] (table nil bodies))
  ([head bodies]
   [:table
    (if head [:thead [:tr (for [h head] [:th h])]])
    [:tbody
     (for [body bodies]
       [:tr (for [b body] [:td b])])]]))


(defn links [& title-url-pairs]
  (ul #(apply link %) (partition 2 title-url-pairs)))

(defn tweet-button [& {:keys [id label lang] :or {id "tweet_button", label "Tweet", lang "en"}}]
  [:div {:id id}
    [:a {:href "https://twitter.com/share"
         :class "twitter-share-button"
         :data-count "horizontal"
         :data-lang lang}
     label]
    (js "//platform.twitter.com/widgets.js")])


