(ns misaki.evaluator
  (:require
    [clojure.string :as str]))

; =def?
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

; =wrap-list
(defn wrap-as-list
  "Wrap slurped data as a list."
  [slurped-data]
  (str "(list " slurped-data " )"))

; =wrap-as-function
(defn wrap-as-function
  [sexp]
  (let [[defs sexp] (split-with-definition sexp)]
    `(do (use 'misaki.html.core)
         ~@defs
         (fn [~'contents]
           (let [~'site (meta ~'contents)] ~sexp)))))

;(defn apply-template
;  "Apply contents data to template function."
;  [f contents]
;  (let [option   (merge (meta f) (meta contents))
;        contents (with-meta contents option)]
;    (with-meta (f contents) option)))

;;(defn comp-template-function [parent-fn child-fn]
;;  (let [option (merge (meta parent-fn) (meta child-fn))]
;;    (with-meta
;;      #(apply-template parent-fn (apply-template child-fn %))
;;      option)))
;;
;;(defn evaluate-template
;;  [templates & {:keys [allow-layout?] :or {allow-layout? true}}]
;;  (reduce
;;    (fn [parent-fn tmpl]
;;      (let [option  (meta tmpl)
;;            tmpl-fn (with-meta (eval (wrap-as-function tmpl)) option)]
;;        (if (or (nil? parent-fn) (not allow-layout?))
;;          tmpl-fn
;;          (comp-template-function parent-fn tmpl-fn))))
;;    nil
;;    templates))

(def evaluate
  (comp eval wrap-as-function read-string wrap-as-list))

;;; =*evalating-functions*
;;(def ^{:dynamic true
;;       :doc "Evaluating functions"}
;;  *evaluating-functions*
;;  (atom [wrap-list read-string wrap-function eval]))

