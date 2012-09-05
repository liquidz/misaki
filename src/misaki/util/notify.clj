(ns misaki.util.notify
  (:use
    [misaki.config          :only [*config*]]
    [clojure.core.incubator :only [-?>]]
    [clj-gntp.core          :only [growl-notify]]
    [clj-growl.core         :only [make-growler]]
    [clojure.java.shell     :only [sh]]
    [clostache.parser       :only [render]]))

(def ^:private last-result (atom {}))
(def ^:private linux? (= "Linux" (System/getProperty "os.name")))
(def NOTIFY_TITLE "misaki")

(defn- notify [msg & {:keys [icon url] :or {icon "", url ""}}]
  (when msg
    (cond
      linux?
      (sh "notify-send" NOTIFY_TITLE msg)

      :else
      (try
        (growl-notify NOTIFY_TITLE msg url icon)
        (catch Exception e
          (let [growl (make-growler "" NOTIFY_TITLE ["Notify" true])]
            (growl "Notify" NOTIFY_TITLE msg)))))))

; =notify-result
(defn notify-result [file process-result & [message]]
  (letfn [(get-msg [key]
                   (-?> *config* :notify-setting key
                        (or message)
                        (render {:filename (.getName file)})))]
    (cond
      ; fixed
      (and (true? process-result)
           (-?> @last-result (get file) false?))
      (notify (get-msg :fixed))

      ; fail
      (false? process-result)
      (notify (get-msg :failed)))

    (reset! last-result
            (assoc @last-result file process-result))))


