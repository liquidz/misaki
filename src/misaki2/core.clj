(ns misaki2.core
  (:require
    [misaki2.config :refer [*config* load-config]]
    [misaki2.filter :refer [run-before-filters run-after-filters]]
    [misaki2.converter :refer [run-converters]]
    [misaki2.inputter :as in]
    )
  )


#_(defn run
  [edn]
  (binding [*config* (load-config)]
    (some-> edn
            run-before-filters
            run-converters
            run-after-filters
            run-outputters)))

(defn -main
  []
  (binding [*config* (load-config)]
    (let [inputters (in/get-inputters)]
      (doseq [f inputters]
        (.start (Thread. (partial f *config*)))))

    (while true
      (when-not (in/empty?)
        (println "Read:" (in/get!)))
      (Thread/sleep 50))


    #_(some-> {:type :txt, :a 1}
            run-before-filters
            run-converters
            println
            )
    )
  )
