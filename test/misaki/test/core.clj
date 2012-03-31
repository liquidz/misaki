(ns misaki.test.core
  (:use [misaki core transform config]
        [hiccup.core :only [html]])
  (:use [clojure.test])
  (:require [clojure.java.io :as io]))

;;; LAYOUT
(defmacro with-test-data [& body]
  `(binding [*base-dir* "./test/"]
     (with-config ~@body)))

(deftest get-layout-test
  (with-test-data
    (testing "single layout"
      (let [f (get-layout "test1")]
        (is (= "<p>a</p><p>bc</p>"
               (html (apply-template f (with-meta '("b" "c") {:title "a"})))))))

    (testing "multiple layout"
      (let [f (get-layout "test2")]
        (is (= "<head><title>a</title></head><body><p>b</p></body>"
               (html (apply-template f (with-meta '("b") {:title "a"})))))

        (is (= "test2" (:title (meta f))))
        (is (= "html5" (:format (meta f))))))))

;;; default site data
(deftest default-site-data-test
  (with-test-data
    (is (= "<p>default title</p>" (html (generate-html "site.html.clj"))))))

;;; TEMPLATES
(deftest parse-template-options-test
  (let [datas [";@layout hello\n;@title wor ld\n@dummy:xxx"
               "; @layout hello\n;@title wor ld\n@dummy:xxx"
               "; @layout  hello\n;@title wor ld\n@dummy:xxx"
               "; @layout   hello\n;@title wor ld\n@dummy:xxx"]]
    (doseq [data datas]
      (let [option (parse-template-options data)]
        (are [x y] (= x y)
          "hello"  (:layout option)
          "wor ld" (:title option))
        (is (not (contains? option :dummy)))))))

;;; TRANSFORM
(deftest transform-test
  (binding [*transformers* (atom [inc #(* 2 %)])]
    (is (= 4 (transform 1)))
    (add-transformer! #(* 3 %))
    (is (= 12 (transform 1))))

  (let [f (transform "(apply + (vals site))")]
    ; f => (fn [site & contents] (list (apply + site)))
    (is (= '(6) (apply-template f (with-meta '("") {:a 1 :b 2 :c 3}))))))


;;; format
(deftest template-format-test
  (with-test-data
    (is (= "html5" (-> "no_format.html.clj" generate-html meta :format)))

    (is (= "xhtml" (-> "with_format.html.clj" generate-html meta :format)))

    (is (= "html4" (-> "with_layout_format.html.clj" generate-html meta :format)))))

;;; generate
(deftest generate-html-test
  (with-test-data
    (= "<html><head><title>hello</title></head><body><h1>hello</h1><p>world</p></body></html>"
       (html (generate-html "gen_test.html.clj")))))

(deftest compile-template-test
  (with-test-data
    (let [tmpl "gen_test.html.clj"
          res (compile-template tmpl)
          file (io/file (str *public-dir* (make-output-filename tmpl)))]
      (is res)
      (is (.exists file))
      (.delete file))))
