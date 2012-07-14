(ns misaki.test.code
  (:use misaki.config
        misaki.util.code
        misaki.test.common
        clojure.test)
  (:require [clojure.string :as str])
  (:import [java.io StringReader]))

(deftest read-until-test
  (testing "normal pattern"
    (are [x y] (= x (str/trim (read-until (StringReader. y) "EOT")))
      "hello" "hello\nEOT"
      "hello" "hello\n  EOT"
      "helloEOT" "helloEOT\n  EOT"))
  (testing "error pattern"
    (are [x] (nil? (read-until (StringReader. x) "EOT"))
      "helloEOT"
      "helloEOT\n:EOT"
      "helloEOT\nE OT")))


(deftest* here-text-test
  ; y = [:pre {:class "prettyprint"} "body"]
  (are [x y] (= x (nth y 2))
    "hello"
#-EOT
hello
EOT

    1 [0 0 1]
    ))
;
;    "hello\nworld" #-EOT
;hello
;world
;EOT
;
;    "hello" #-EOT
;    hello
;    EOT
;
;    "hello\n    world" #-EOT
;    hello
;    world
;    EOT
;
;    "&lt;hello /&gt;" #-EOT
;    <hello />
;    EOT
;    ))
