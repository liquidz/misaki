(ns misaki.core
  (:require
    [misaki.config :refer [*config* load-config]]
    [misaki.filter :refer [run-before-filters run-after-filters]]
    [misaki.converter :refer [run-converters]]
    [misaki.inputter :as in]
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

