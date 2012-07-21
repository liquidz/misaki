(ns misaki.util.error
  (:use
    misaki.util.string
    [text-decoration.core :only [red bold underline assoc-color]]
    [clostache.parser     :only [render]]))

(declare throwable->map)

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

