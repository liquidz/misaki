(ns misaki.core
  "misaki core library."
  (:require
    [misaki.config     :refer [*config* load-config]]
    [misaki.setup      :refer [run-setup-extensions]]
    [misaki.loader     :refer [*development-mode*]]
    ;[misaki.filter     :refer [apply-before-filters apply-after-filters]]
    ;[misaki.converter  :refer [apply-converters]]
    [misaki.route :refer [apply-route]]
    [misaki.output     :refer [run-output-extensions]]
    [misaki.input      :as in]
    [clojure.tools.cli :refer [parse-opts]]))

(def ^{:private true} DEFAULT_CHECK_RATE 50)

(defn build
  [edn]
  (some-> edn
          apply-route
          ;apply-before-filters
          ;apply-converters
          ;apply-after-filters
          run-output-extensions))

(def ^{:private true} cli-options
  [[nil "--dev" "Run misaki with development mode."
    :default false]])

(defn -main
  [& args]
  (let [{:keys [options]} (parse-opts args cli-options)
        conf (load-config)
        conf (run-setup-extensions conf)
        rate (:rate conf DEFAULT_CHECK_RATE)]

    (binding [*config* conf
              *development-mode* (:dev options)]
      (in/start-input-extensions!)

      (while true
        (when-not (in/empty?)
          (build (merge conf (in/get!))))
        (Thread/sleep rate)))))

