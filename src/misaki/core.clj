(ns misaki.core
  "misaki core library."
  (:require
    [misaki.config    :refer [*config* load-config run-configurators]]
    [misaki.filter    :refer [apply-before-filters apply-after-filters]]
    [misaki.converter :refer [apply-converters]]
    [misaki.outputter :refer [run-outputters]]
    [misaki.inputter  :as in]))

(def ^{:private true} DEFAULT_CHECK_RATE 50)

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
        conf (run-configurators conf)
        rate (:rate conf DEFAULT_CHECK_RATE)]

    (binding [*config* conf]
      (in/start-inputters!)

      (while true
        (when-not (in/empty?)
          (run (in/get!)))
        (Thread/sleep rate)))))

