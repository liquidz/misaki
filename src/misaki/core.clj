(ns misaki.core
  (:require
    [misaki.config    :refer [*config* load-config run-configurators]]
    [misaki.filter    :refer [run-before-filters run-after-filters]]
    [misaki.converter :refer [run-converters]]
    [misaki.outputter :refer [run-outputters]]
    [misaki.inputter  :as in]))


(defn run
  [edn]
  (binding [*config* (load-config)]
    (some-> edn
            run-before-filters
            run-converters
            run-after-filters
            run-outputters)))

(defn -main
  []
  (let [conf (load-config)
        conf (run-configurator conf)]

    (binding [*config* conf]
      (in/start-inputters!)

      (while true
        (when-not (in/empty?)
          (run (in/get!)))
        (Thread/sleep 50)))))

