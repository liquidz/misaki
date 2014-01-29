(ns misaki.core
  (:require
    [misaki.config :refer [*config* load-config]]
    [misaki.filter :refer [run-before-filters run-after-filters]]
    [misaki.converter :refer [run-converters]]
    [misaki.outputter :refer [run-outputters]]
    [misaki.inputter :as in]
    )
  )


(defn run
  [edn]
  (binding [*config* (load-config)]
    (some-> edn
            run-before-filters
            run-converters
            run-after-filters
            run-outputters
            )))

(defn -main
  []
  (binding [*config* (load-config)]
    (in/start-inputters!)

    (while true
      (when-not (in/empty?)
        (run (in/get!)))
      (Thread/sleep 50))))

