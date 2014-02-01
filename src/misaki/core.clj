(ns misaki.core
  (:require
    [misaki.config    :refer [*config* load-config run-configurators]]
    [misaki.filter    :refer [apply-before-filters apply-after-filters]]
    [misaki.converter :refer [apply-converters]]
    [misaki.outputter :refer [run-outputters]]
    [misaki.inputter  :as in]))


(defn run
  [edn]
  (binding [*config* (load-config)]
    (some-> edn
            apply-before-filters
            apply-converters
            apply-after-filters
            run-outputters)))

(defn -main
  []
  (let [conf (load-config)
        conf (run-configurators conf)]

    (binding [*config* conf]
      (in/start-inputters!)

      (while true
        (when-not (in/empty?)
          (run (in/get!)))
        (Thread/sleep 50)))))

