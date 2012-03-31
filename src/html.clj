(ns html
  "1hyde: html utility for template"
  (:refer-clojure :exclude [quote])
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
  ([f ls] [:ul (map (fn [x]
                      (if (and (tag? x) (= :ul (first x)))
                        (f x)
                        [:li (f x)])) ls)]))


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

(defn quote [& xs]
  [:blockquote
   (map
     #(if (string? %)
        ;(interpose [:br] (map (fn [x] [:p x]) (str/split-lines %)))
        (map (fn [x] [:p x]) (str/split-lines %))
        [:p %])
     xs)])

(defn code [s]
  [:code {:class "prettyprint"} s])

(defn table
  ([bodies] (table nil bodies))
  ([head bodies]
   [:table
    (if head [:thead [:tr (for [h head] [:th h])]])
    [:tbody
     (for [body bodies]
       [:tr (for [b body] [:td b])])]]))

