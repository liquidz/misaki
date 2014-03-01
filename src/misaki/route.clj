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

(defn add-error
  [data error-message]
  (update-in data [:errors] #(conj (or % ()) error-message)))

(defn apply-route
  ""
  ([data]
   (apply-route data (get-route (:type data)))
   )
  ([data route]
   (when (seq route)
     (let [data (assoc-in data [:applying-route] route)]
       (reduce
         (fn [res r]
           (let [{name :name, args :args} (parse-config-args r)
                 f (load-extension name)]
             (if f
               (apply f res args)
               (add-error res (str r " is not found.")))))
         data
         route)))
   ))
