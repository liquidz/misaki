(ns misaki.test.config
  (:use [misaki config]
        misaki.test.common
        [clj-time.core :only [date-time year month day]]
        clojure.test)
  (:require [clojure.java.io :as io]))

;;; load-config
(deftest* load-config-test
  (let [config (load-config)]
    (are [x y] (= x y)
      "public/"   (:public-dir config)
      "template/" (:template-dir config)
      "_posts/"   (:post-dir config)
      "_layouts/" (:layout-dir config))))

;;; get-date-from-file
(deftest* get-date-from-file-test
  ; test config: #"(\d{4})[.](\d{1,2})[.](\d{1,2})[-_](.+)$"
  (let [date (get-date-from-file (io/file "2000.11.22-dummy.clj"))]
    (are [x y] (= x y)
      2000 (year date)
      11   (month date)
      22   (day date))))

;;; remove-date-from-name
(deftest* remote-date-from-name-test
  (is (= "dummy.clj" (remove-date-from-name "2000.11.22-dummy.clj"))))

;;; make-post-output-filename
(deftest* make-post-output-filename-test
  ; test config: "{{year}}-{{month}}/{{filename}}"
  (let [file (io/file "2000.11.22-dummy.html.clj")]
    (is (= "2000-11/dummy.html" (make-post-output-filename file)))))

;;; make-template-output-filename
(deftest* make-template-output-filename-test
  (let [tmpl-name "template.test.html.clj"
        file (io/file (str *template-dir* tmpl-name))
        name1 (make-template-output-filename file)
        name2 (make-template-output-filename tmpl-name)]
    (is (= name1 name2))))
