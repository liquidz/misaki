(ns misaki.util.notify
  "Notification Manager"
  (:use
    [misaki.config          :only [*config*]]
    [clojure.core.incubator :only [-?>]]
    [clj-gntp.core          :only [growl-notify]]
    [clojure.java.shell     :only [sh]]
    [clostache.parser       :only [render]]))

(def ^:private last-result (atom {}))
(def ^:private linux? (= "Linux" (System/getProperty "os.name")))

(defn- notify [title msg & {:keys [icon url] :or {icon "", url ""}}]
  (when msg
    (cond
      linux?
      (sh "notify-send" title msg)

      :else
      (growl-notify title msg url icon))))

; =notify-result
(defn notify-result
  "Notify compile result by Growl."
  [file process-result & [exception]]
  (let [filename  (.getName file)
        message   (if exception (.getMessage exception))
        st        (if exception (first (.getStackTrace exception)))
        line      (if (and st (= (.getFileName st) filename))
                    (.getLineNumber st))
        get-text  #(-?> *config* :notify-setting %
                        (render {:filename filename :message message :line line}))]

    (cond
      ; fixed
      (and (true? process-result)
           (-?> @last-result (get file) false?))
      (notify (get-text :fixed-title) (get-text :fixed))

      ; fail
      (false? process-result)
      (notify (get-text :failed-title) (get-text :failed)))

    (reset! last-result
            (assoc @last-result file process-result))))


