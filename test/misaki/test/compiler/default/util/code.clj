(ns misaki.test.compiler.default.util.code
  (:require
    [misaki.compiler.default.config      :refer :all]
    [misaki.compiler.default.util.code   :refer :all]
    [misaki.tester                       :refer [set-base-dir! defcompilertest]]
    [clojure [test   :refer :all]
             [string :as str]])
  (:import [java.io StringReader]))

(set-base-dir! "test/files/compiler/default/util/code/")

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


(defcompilertest here-text-test
  ; y = [:pre {:class "prettyprint"} "body"]
  (are [x y] (= x (nth y 2))
    "hello"
#-EOT
hello
EOT

    1 [0 0 1]))
