(ns misaki.core
  "misaki core library."
  (:require
    [misaki.config     :refer [*config* load-config]]
    [misaki.setup      :refer [run-setup-extensions]]
    [misaki.loader     :refer [*development-mode*]]
    [misaki.route      :refer [apply-route]]
    [misaki.output     :refer [run-output-extensions]]
    [misaki.input      :as in]
    [clojure.tools.cli :refer [parse-opts]]))

(def ^{:private true} DEFAULT_CHECK_RATE 50)
(def ^{:private true} cli-options
  [[nil "--dev" "Run misaki with development mode."
    :default false]
   [nil "--build" "Build all."
    :default false]])

(defn build
  ""
  [m]
  (some-> m
          apply-route
          run-output-extensions))

(defn build-all
  ""
  []
  (doseq [resource (in/get-all)]
    (build (merge *config* resource))))

(defn -main
  ""
  [& args]
  (let [{:keys [options]} (parse-opts args cli-options)
        conf (run-setup-extensions (load-config))
        rate (:rate conf DEFAULT_CHECK_RATE)]

    (binding [*config* conf
              *development-mode* (:dev options)]
      (when (:build options) (build-all))
      (in/start-input-extensions!)

      (while true
        (when-not (in/empty?)
          (build (merge conf (in/get!))))
        (Thread/sleep rate)))))
