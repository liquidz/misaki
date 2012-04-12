(ns misaki.test.template
  (:use [misaki template config]
        [hiccup.core :only [html]]
        misaki.test.common
        clojure.test))

(deftest* load-template-test
  ;; single template
  (let [f (load-template (str *template-dir* "template.test.html.clj"))]
    (are [x y] (= x y)
      "<p>default title</p>" (html (apply-template f '("")))
      "<p>a</p>" (html (apply-template f (with-meta '("") {:title "a"}))))))

(deftest* parse-template-options-test
  (let [datas [";@layout hello\n;@title wor ld\n@dummy:xxx"
               "; @layout hello\n;@title wor ld\n@dummy:xxx"
               "; @layout  hello\n;@title wor ld\n@dummy:xxx"
               "; @layout   hello\n;@title wor ld\n@dummy:xxx"
               ";; @layout   hello\n;@title wor ld\n@dummy:xxx"]]
    (doseq [data datas]
      (let [option (parse-template-options data)]
        (are [x y] (= x y)
          "hello"  (:layout option)
          "wor ld" (:title option))
        (is (not (contains? option :dummy)))))))
