(ns misaki.core
  "misaki core library."
  (:require
    [misaki.config     :refer [*config* load-config]]
    [misaki.setup      :refer [run-setup-extensions]]
    [misaki.loader     :refer [*development-mode*]]
    [misaki.route      :refer [apply-route]]
    [misaki.output     :refer [run-output-extensions]]
    [misaki.status     :refer [add-status BUILD_ALL_STATUS]]
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
  (println "DEBUG99:" m)
  (some-> m
          apply-route
          run-output-extensions))

(defn build-all
  ""
  []
  (doseq [resource (in/get-all)]
    (-> *config*
        (add-status BUILD_ALL_STATUS)
        (merge resource)
        build)))

(defn -main
  ""
  [& args]
  (let [{:keys [options]} (parse-opts args cli-options)
        conf (run-setup-extensions (load-config))
        rate (:rate conf DEFAULT_CHECK_RATE)]

    (binding [*config* conf
              *development-mode* (:dev options)]
      ;; build all
      (when (:build options) (build-all))
      ;; start inputs
      (in/start-input-extensions!)
      ;; wait inputs
      (while true
        (when-not (in/empty?)
          (build (merge conf (in/get!))))
        (Thread/sleep rate)))))
