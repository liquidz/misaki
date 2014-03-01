(ns misaki.route-test
  (:require
    [misaki.config :refer [*config*]]
    [misaki.route  :refer :all]
    [midje.sweet   :refer :all]
    [conjure.core  :refer :all]))

(defn f-inc
  [m & [n]]
  (update-in m [:i] (partial + (or n 1))))
(defn f-dbl
  [m & [n]]
  (update-in m [:i] (partial * (or n 2))))

(fact "get-route should work fine."
  (binding [*config* {:route {:txt [:a :b]}}]
    (get-route :txt) => [:a :b]
    (get-route :xxx) => [])

  (binding [*config* {:route {:txt [:a] :* [:b]}}]
    (get-route :txt) => [:a]
    (get-route :xxx) => [:b]))

(defn- test-apply-route
  [m]
  (dissoc (apply-route m) :applying-route))

;;(defn- foo
;;  [x]
;;  (-> x
;;      first
;;      (dissoc :applying-route)))

(facts "apply-route should work fine."
  (fact "no args"
    (binding [*config* {:route {:txt [f-inc f-dbl]}}]
      (stubbing [load-extension identity]
        ;        (let [res (apply-route {:type :txt :i 1})]
        ;          (count res) => 1
        ;          (foo res) => {:type :txt :i 4}
        ;          )
        (test-apply-route {:type :txt :i 1}) => {:type :txt :i 4}
                )))

  (fact "with args"
    (binding [*config* {:route {:txt [[f-inc 3] [f-dbl 5]]}}]
      (stubbing [load-extension identity]
                ;;(let [res (apply-route {:type :txt :i 1})]
                ;;  (count res) => 1
                ;;  (foo res) => {:type :txt :i 20}
                ;;  )
        (test-apply-route {:type :txt :i 1}) => {:type :txt :i 20}
                )))

  (fact "no target routes"
    (binding [*config* {:route {:txt [[f-inc 3] [f-dbl 5]]}}]
      ;(apply-route {:type :dummy}) => [nil]
      (test-apply-route {:type :dummy}) => nil
      ))

  ;;(fact "sequence of map"
  ;;  (binding [*config* {:route {:txt [f-inc f-dbl]}}]
  ;;    (stubbing [load-extension identity]
  ;;              (let [res (apply-route [{:type :txt :i 1} {:type :txt :i 2}])]
  ;;                (count res) => 2
  ;;                (dissoc (first res) :applying-route) => {:type :txt :i 4}
  ;;                (dissoc (second res) :applying-route) => {:type :txt :i 6}
  ;;                )
  ;;              )
  ;;    )
  ;;  )
  )
