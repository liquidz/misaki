(ns misaki.core
  "misaki core library."
  (:require
    [misaki.config     :refer [*config* load-config run-configurators]]
    [misaki.loader     :refer [*development-mode*]]
    [misaki.filter     :refer [apply-before-filters apply-after-filters]]
    [misaki.converter  :refer [apply-converters]]
    [misaki.output     :refer [run-output-extensions]]
    [misaki.input      :as in]
    [clojure.tools.cli :refer [parse-opts]]))

(def ^{:private true} DEFAULT_CHECK_RATE 50)

(defn run
  [edn]
  (binding [*config* (load-config)]
    (some-> edn
            apply-before-filters
            apply-converters
            apply-after-filters
            run-output-extensions)))

(def ^{:private true} cli-options
  [[nil "--dev" "Run misaki with development mode."
    :default false]])

(defn -main
  [& args]
  (let [{:keys [options]} (parse-opts args cli-options)
        ;user-conf (load-user-config)
        ]

    ;(-> (merge-config DEFAULT_CONFIG user-conf)
    ;    :+ :configurators)

    ;(merge-config
    ;  DEFAULT_CONFIG
    ;  {:+ {:configurators (-> user-conf :+)}}
    ;  )

    (binding [*development-mode* (:dev options)]
      (let [conf (load-config)
            conf (run-configurators conf)
            rate (:rate conf DEFAULT_CHECK_RATE)]

        (binding [*config* conf]
          (in/start-input-extensions!)

          (while true
            (when-not (in/empty?)
              (run (merge conf (in/get!))))
            (Thread/sleep rate)))))))

