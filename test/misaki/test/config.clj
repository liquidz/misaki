(ns misaki.test.config
  (:use [misaki config]
        misaki.test.common
        clojure.test)
  (:require [clojure.java.io :as io]))

(deftest* make-template-output-filename-test
  (let [tmpl-name "template.test.html.clj"
        file (io/file (str *template-dir* tmpl-name))
        name1 (make-template-output-filename file)
        name2 (make-template-output-filename tmpl-name)]
    (is (= name1 name2))))
