(ns misaki.test.compiler.config
  (:use [misaki.compiler.default config]
        misaki.test.compiler.common
        [clj-time.core :only [date-time year month day]]
        clojure.test)
  (:require [clojure.java.io :as io]))

;;;;;; make-post-output-filename
;;;(deftest* make-post-output-filename-test
;;;  ; test config: "{{year}}-{{month}}/{{filename}}"
;;;  (testing "filename with date"
;;;    (let [file (io/file "2000.11.22-dummy.html.clj")]
;;;      (is (= "2000-11/dummy.html" (make-post-output-filename file)))))
;;;
;;;  (testing "filename without date"
;;;    (are [x y] (= x (make-post-output-filename (io/file y)))
;;;      "-/foo.html"       "foo.html.clj"
;;;      "-/01.foo.html"    "01.foo.html.clj"
;;;      "-/01.02.foo.html" "01.02.foo.html.clj")))

;;; make-template-output-filename
(deftest* make-template-output-filename-test
  (let [tmpl-name "template.test.html.clj"
        file (io/file (str (:template-dir *config*) tmpl-name))
        name1 (make-template-output-filename file)
        name2 (make-template-output-filename tmpl-name)]
    (is (= name1 name2))))

