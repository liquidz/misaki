(ns misaki.extension.complete-date-test
  (:require
    [misaki.extension.complete-date :refer :all]
    [misaki.config   :refer [*config*]]
    [clj-time.core   :refer [date-time]]
    [midje.sweet     :refer :all]
    [clojure.java.io :as io]))

(defn- fmap [s] (merge *config* {:file (io/file s)}))
(defn- run  [s] (:date (-main (fmap s))))

(facts "complete-date extension should work fine."
  (fact "default setting"
    (run "2014-01-02-001122")     => (date-time 2014 1 2 0 11 22)
    (run "2014-01-02-001122.txt") => (date-time 2014 1 2 0 11 22)
    (run "2014-01-02-00112.txt")  => nil
    (run "2014-01-02")            => nil)

  (fact "custom setting"
    (binding [*config* {:date-format "yyyyMMdd"}]
      (run "20140102")     => (date-time 2014 1 2)
      (run "20140102.txt") => (date-time 2014 1 2)
      (run "201401")       => nil)))
