(ns misaki.test.compiler.default.util.code
  (:use misaki.compiler.default.config
        misaki.compiler.default.util.code
        misaki.test.compiler.default.common
        clojure.test)
  (:require [clojure.string :as str])
  (:import [java.io StringReader]))

(deftest read-until-test
  (testing "normal pattern"
    (are [x y] (= x (str/trim (read-until (StringReader. y) "EOT")))
      "hello"    "hello\nEOT"
      "hello"    "hello\n  EOT"
      "hello"    "hello\n\nEOT"
      "hello"    "hello\n\n\nEOT"
      "helloEOT" "helloEOT\n  EOT"
      ""         "EOT"))
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

    1 [0 0 1]))
