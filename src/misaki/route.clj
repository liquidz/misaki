(ns misaki.route
  "FIXME"
  (:require
    [misaki.loader  :refer [load-functions]]
    [misaki.config  :refer :all]))

(def ^{:dynamic true :doc ""}
  *extension-ns-prefix*
  "misaki.extension")

(defn load-extension
  ""
  [ext-name]
  (:-main (load-functions *extension-ns-prefix* ext-name)))

(defn get-route
  ""
  [data-type-keyword]
  (let [routes (:route *config*)]
    (if-let [route (data-type-keyword routes)]
      route
      (:* routes []))))

(defn parse-route
  ""
  [route]
  (let [[name & args] (if (sequential? route) route [route])]
    (list
      (load-extension name)
      args)))

(defn add-error
  [data error-message]
  (update-in data [:errors] #(conj (or % ()) error-message)))

(defn apply-route
  ""
  [data]
  (let [route (get-route (:type data))]
    (reduce
      (fn [res r]
        (let [[f args] (parse-route r)]
          (if f
            (apply f res args)
            (add-error res (str r " is not found."))
            )
          ))
      data
      route)))

;(defn- find-first
;  [pred col]
;  (loop [col col]
;    (if-let [x (first col)]
;      (if (pred x)
;        x
;        (recur (rest col))))))
