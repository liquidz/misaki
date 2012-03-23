(ns one-hyde.test.core
  (:use one-hyde.core
        one-hyde.transform
        [hiccup.core :only [html]]
        )
  (:use [clojure.test]))

(deftest replace-me ;; FIXME: write
  (is true))

;;; LAYOUT
(defmacro with-test-dir [& body]
  `(binding [*public-dir* "test/public/"
             *template-dir* "test/template/"
             *posts* "test/posts/"
             *layouts-dir* "test/template/_layouts/"
             *posts-dir* (str *template-dir* *posts*)]
    ~@body))

(deftest get-layout-test
  (with-test-dir
    (testing "single layout"
      (let [f (get-layout "test1")]
        (is (= "<p>a</p><p>bc</p>"
               (html (f {:title "a"} "b" "c"))))))

    (testing "multiple layout"
      (let [f (get-layout "test2")]
        (is (= "<h1>default</h1><p>a</p><p>b</p>"
               (html (f {:title "a"} "b"))))))))

;;; TEMPLATES
(deftest parse-template-options-test
  (let [datas [";layout:hello\n;title:world\ndummy:xxx"
               "; layout:hello\n;title:world\ndummy:xxx"
               "; layout :hello\n;title:world\ndummy:xxx"
               "; layout : hello\n;title:world\ndummy:xxx"]]
    (doseq [data datas]
      (let [option (parse-template-options data)]
        (are [x y] (= x y)
          "hello" (:layout option)
          "world" (:title option))
        (is (not (contains? option :dummy)))))))

;;; TRANSFORM
(deftest transform-test
  (binding [*transformers* (atom [inc #(* 2 %)])]
    (is (= 4 (transform 1)))
    (add-transformer! #(* 3 %))
    (is (= 12 (transform 1))))

  (let [f (transform "(apply + site)")]
    ; f => (fn [site & contents] (list (apply + site)))
    (is (= '(6) (f [1 2 3])))))
