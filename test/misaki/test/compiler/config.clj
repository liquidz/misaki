(ns misaki.test.compiler.config
  (:use [misaki.compiler.default config]
        misaki.test.compiler.common
        [clj-time.core :only [date-time year month day]]
        clojure.test)
  (:require [clojure.java.io :as io]))

;;; make-template-output-filename
(deftest* make-template-output-filename-test
  (let [tmpl-name "template.test.html.clj"
        file (io/file (str (:template-dir *config*) tmpl-name))
        name1 (make-template-output-filename file)
        name2 (make-template-output-filename tmpl-name)]
    (is (= name1 name2))))

