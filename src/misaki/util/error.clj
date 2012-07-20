(ns misaki.util.error
  (:use [misaki.util.string :only [blue red]]
        [clostache.parser :only [render]]))


(declare throwable->map)

(defn- green [s] (str "\033[32m" s "\033[0m"))
(defn- bold [s] (str "\033[1m" s "\033[22m"))
(defn- underline [s] (str "\033[4m" s "\033[24m"))
(defn- italic [s] (str "\033[3m" s "\033[23m"))
(defn- inverse [s] (str "\033[7m" s "\033[27m"))
(defn- strikethrough [s] (str "\033[9m" s "\033[29m"))

(defn- get-causes [#^Throwable ex]
  (map throwable->map
       (take-while (comp not nil?) (iterate #(.getCause %) ex))))

(defn- stack-trace->map [#^StackTraceElement st]
  {:class    (.getClassName st)
   :filename (.getFileName st)
   :line     (.getLineNumber st)
   :method   (.getMethodName st)
   :native?  (.isNativeMethod st)
   :str      (.toString st)})

(defn- get-stack-trace [#^Throwable ex]
  (let [traces (seq (.getStackTrace ex))]
    (map stack-trace->map traces)))

(defn throwable->map [ex]
  {:message           (.getMessage ex)
   :stack-trace       (get-stack-trace ex)
   :causes            (get-causes ex)
   :str               (.toString ex)
   :localized-message (.getLocalizedMessage ex)})


; =assoc-color
(defn assoc-color
  "Associate color-function to hash-map

  ex)
    (assoc-color {:a \"AAA\", :b \"BBB\"}
                  :a red
                  :b blue)"
  [m & kvs]
  (merge m (into {} (for [[key color-fn] (partition 2 kvs)]
                      [key (color-fn (get m key))]))))

(defn- str-contains? [s target]
  (not= -1 (.indexOf s target)))

(defn- print-cause [cause & {:keys [caused?] :or {caused? false}}]
  (let [label  (str (if caused? "Caused by " "") (:str cause))
        traces (filter #(str-contains? (:str %) "misaki") (:stack-trace cause))]
    (flush)
    (println "")
    (println (underline label))
    (doseq [st traces]
      (let [st (assoc-color st :method bold :filename red :line (comp red bold))]
        (println
          (render "   at {{class}} / {{method}} ({{filename}}:{{line}})" st))))))

(defn print-pretty-stack-trace
  [#^Exception ex]
  (let [[f & r] (:causes (throwable->map ex))]
    (print-cause f)
    (doseq [x r] (print-cause x :caused? true))))

