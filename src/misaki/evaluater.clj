(ns misaki.evaluater
  (:require
    [clojure.string :as str]))

(defn def?
  "Check whether `def` or `defn` s-exp or not."
  [x]
  (and (seq? x)
       (or (= 'def (first x))
           (= 'defn (first x)))))

; =split-with-definition
;; Split s-exp with def?
(def split-with-definition
  (juxt (partial filter def?)
        (partial remove def?)))

(defn wrap-as-function
  [sexp]
  (let [[defs sexp] (split-with-definition sexp)]
    `(do ~@defs
         (fn [~'contents]
           (use 'misaki.html.core)
           (let [~'site (meta ~'contents)] ~sexp)))))

(defn apply-template
  "Apply contents data to template function."
  [f contents]
  (let [option   (merge (meta f) (meta contents))
        contents (with-meta contents option)]
    (with-meta (f contents) option)))

(defn comp-template-function [parent-fn child-fn]
  (let [option (merge (meta parent-fn) (meta child-fn))]
    (with-meta
      #(apply-template parent-fn (apply-template child-fn %))
      option)))

(defn evaluate-template
  [templates & {:keys [allow-layout?] :or {allow-layout? true}}]
  (reduce
    (fn [parent-fn tmpl]
      (let [option  (meta tmpl)
            tmpl-fn (with-meta (eval (wrap-as-function tmpl)) option)]
        (if (or (nil? parent-fn) (not allow-layout?))
          tmpl-fn
          (comp-template-function parent-fn tmpl-fn))))
    nil
    templates))


