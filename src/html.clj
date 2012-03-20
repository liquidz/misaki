(ns html
  (:require [hiccup.page-helpers :as page]))

(defn js [& args]
  (apply page/include-js args))

(defn css [& args]
  (apply page/include-css args))


(defn ul
  ([ls] (ul identity ls))
  ([f ls] [:ul (map (fn [x] [:li (f x)]) ls)]))



(defn img
  ([src] (img "" src))
  ([alt src]
   [:img {:alt alt :src src}]))

(defn link
  ([href] (link href href))
  ([label href] [:a {:href href} label]))

;(defn table
;  [opt & rows]
;  (if-not (map? opt)
;    (apply table {} opt rows)
;    [:table
;     (dissoc opt :head)
;     ; head
;     (aif (:head opt)
;          [:thead [:tr (for [h it] [:th h])]])
;     ; body
;     [:tbody
;      (for [row rows]
;        [:tr (for [column row] [:td column])])]]))



