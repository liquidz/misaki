; @title  default title
; @format html5

(def ID (atom 0))
(def ^:dynamic *group* {})

(defn- rad [n]
  (Math/toRadians (double n)))

(defn- rotate [x y rad]
  (let [sin-r (Math/sin rad)
        cos-r (Math/cos rad)]
    (map #(Math/round %)
         [(- (* x cos-r) (* y sin-r))
          (+ (* y cos-r) (* x sin-r))])))

(defn merge-group
  [{x :data-x, y :data-y, :or {x 0, y 0} :as opt}]
  opt
  (let [{gx :data-x, gy :data-y, grotate :data-rotate, gscale :data-scale
         :or {gx 0, gy 0, grotate 0, gscale 1}} *group*
        [rx ry] (rotate x y (rad grotate))]
    (merge
      opt
      ; x
      (if (or (contains? *group* :data-x) (contains? opt :data-x))
        (let [nx (if (contains? *group* :data-rotate) rx x)
              nx (if (contains? *group* :data-scale) (* gscale nx) nx)]
          {:data-x (+ gx nx)}))
      ; y
      (if (or (contains? *group* :data-y) (contains? opt :data-y))
        (let [ny (if (contains? *group* :data-rotate) ry y)
              ny (if (contains? *group* :data-scale) (* gscale ny) ny)]
          {:data-y (+ gy ny)}))
      ; scale
      {:data-scale (* (:data-scale *group* 1) (:data-scale opt 1))}
      ; rotate
      {:data-rotate (+ (:data-rotate *group* 0) (:data-rotate opt 0))})))


(defn- default-opt []
  {:data-x (* (dec @ID) 1000)
   :data-y 0})

(defn- parse-opt [{:keys [id class]
                   :or   {id (str "p" @ID), class ""}
                   :as   opt}]
  (merge
    {:id id :class (if (= "" class) "step" (str "step " class))}
    (into {} (for [k (keys (dissoc opt :id :class)) :let [v (get opt k)]]
               [(keyword (str "data-" (name k)))
                (get opt k)]))))

(defmacro group [group-opt & body]
  `(binding [*group* (merge-group (parse-opt ~group-opt))]
     (list ~@body)))

(defn slide [& body]
  (swap! ID inc)
  (let [[opt & body] (if (-> body first map?) body (cons {} body))
        parsed-opt (merge-group (parse-opt opt))
        attrs      (merge (default-opt) parsed-opt)]
    [:div attrs body]))

(defn arrange [x y & body]
  [:div {:style (str "position: absolute; left: " x "px; top: " y "px")}
   body])

[:head
 [:meta {:charset (:charset site)}]
 [:title (:title site)]
 (absolute-css ["/css/prettify.css"
                (:css site ())])]
; /head

[:body

 [:div {:class "fallback-message"}
  (p "Your browser **doesn't support the features required** by impress.js, so you are presented with a simplified version of this presentation.")
  (p "For the best experience please use the latest **Chrome**, **Safari** or **Firefox** browser.")]

 [:div {:id "impress"}
  contents]

 (absolute-js ["/js/impress.js"
               "/js/prettify.js"
               "/js/lang-clj.js"
               "/js/main.js"])]
; /body
