(ns misaki.test.compiler.core
  (:use [misaki.compiler.default core template config]
        [misaki.util sequence file]
        [misaki.config :only [*config*]]
        [misaki.config :only [template-name->file]]
        [misaki.tester :only [bind-config test-compile template-file public-file]]
        misaki.server
        misaki.test.compiler.common
        [hiccup.core :only [html]]
        [clj-time.core :only [date-time]])
  (:use [clojure.test])
  (:require
    [misaki.core :as msk]
    [clojure.java.io :as io]))

;;; -compile
(deftest* -compile-test
  (testing "normal template should be compiled"
    (let [in  (template-file "index.html.clj")
          out (public-file "index.html")]
      (is (not (.exists out)))
      (test-compile in)
      (is (.exists out))
      (.delete out)))

  (testing "compile template under a directory"
    (let [in  (template-file "dir/under_dir.html.clj")
          out (public-file "dir/under_dir.html")]
      (is (not (.exists out)))
      (is (test-compile in))
      (is (.exists out))
      (.delete out)))

  (testing "tag and prev/next post should be compiled when post file is compiled"
    (let [
          in1   (template-file "_posts/2022.02.02-bar.html.clj")
          in2   (template-file "_posts/2011.01.01-foo.html.clj")
          in3   (template-file "_posts/2000.01.01-foo.html.clj")
          tag1  (public-file "tag/tag1.html")
          tag2  (public-file "tag/tag2.html")
          tag3  (public-file "tag/tag3.html")
          post1 (public-file "2000-01/foo.html")
          post2 (public-file "2011-01/foo.html")
          post3 (public-file "2022-02/bar.html")]

      ; in1
      ;   tags: tag1, tag2
      ;   next: 2011.01.01-foo.html.clj
      ;   prev: nil
      (is (every? #(not (.exists %)) [tag1 tag2 tag3 post1 post2 post3]))
      (test-compile in1)
      (is (every? #(.exists %) [tag1 tag2 post2 post3]))
      (is (not (.exists tag3)))
      (is (not (.exists post1)))
      (doseq [f [tag1 tag2 post2 post3]] (.delete f))

      ; in2
      ;   tags: tag2, tag3
      ;   next: 2000.01.01-foo.html.clj
      ;   prev: 2022.02.02-bar.html.clj
      (is (every? #(not (.exists %)) [tag1 tag2 tag3 post1 post2 post3]))
      (test-compile in2)
      (is (every? #(.exists %) [tag2 tag3 post1 post2 post3]))
      (is (not (.exists tag1)))
      (doseq [f [tag2 tag3 post1 post2 post3]] (.delete f))

      ; in3
      ;   tags: []
      ;   next: nil
      ;   prev: 2011.01.01-foo.html.clj
      (is (every? #(not (.exists %)) [tag1 tag2 tag3 post1 post2 post3]))
      (test-compile in3)
      (is (every? #(.exists %) [post1 post2]))
      (is (every? #(not (.exists %)) [tag1 tag2 tag3]))
      (is (not (.exists post3)))
      (doseq [f [post1 post2]] (.delete f)))))

;;; generate-post-content
(deftest* generate-post-content-test
  (let [post-dir (:post-dir *config*)
        file1    (io/file (str post-dir "2000.01.01-foo.html.clj"))
        file2    (io/file (str post-dir "2011.01.01-foo.html.clj"))]
    (are [x y] (= x y)
      "<p>baz</p>" (generate-post-content file1)
      "<p>foo</p>" (generate-post-content file2))))

;;; get-post-info
(deftest* get-post-info-test
  (let [post-dir (:post-dir *config*)
        file     (io/file (str post-dir "2000.01.01-foo.html.clj"))
        data     (get-post-info file)]
    (are [x y] (= x y)
      "baz"   (:title data)
      "world" (:hello data)
      file    (:file data)
      "/2000-01/foo.html"  (:url data)
      (date-time 2000 1 1) (:date data)
      "&lt;p&gt;baz&lt;/p&gt;" (force (:lazy-content data)))))

;;; post-inf-contains-tag?
(deftest* post-contains-tag?-test
  (let [post-dir (:post-dir *config*)
        file     (io/file (str post-dir "2011.01.01-foo.html.clj"))
        data     (get-post-info file)]
    (are [x y] (= x y)
      false (post-info-contains-tag? data "tag1")
      true  (post-info-contains-tag? data "tag2")
      true  (post-info-contains-tag? data "tag3"))
    (is (thrown? AssertionError (post-info-contains-tag? data nil)))))

;;; get-posts
(deftest* get-posts-test
  (testing "Get all posts"
    (let [posts (sort-by-date (get-posts))]
      (are [x y] (= x y)
        3 (count posts)

        "bar" (-> posts first :title)
        "/2022-02/bar.html" (-> posts first :url)
        false (nil? (-> posts first :file))
        false (nil? (-> posts first :date))
        false (nil? (-> posts first :lazy-content))
        "world" (-> posts first :hello)

        "foo" (-> posts second :title)
        "/2011-01/foo.html" (-> posts second :url)
        false (nil? (-> posts second :file))
        false (nil? (-> posts second :date))
        false (nil? (-> posts second :lazy-content))
        "world" (-> posts second :hello))))

  (testing "Get tagged posts"
    (let [posts1 (get-tagged-posts ["tag1"])
          posts2 (get-tagged-posts ["tag2"])
          posts3 (get-tagged-posts ["tag3"])
          posts4 (get-tagged-posts ["tag1" "tag2"])
          posts5 (get-tagged-posts ["tag1" "tag3"])]

      (are [x y] (= x y)
        1 (count posts1)
        2 (count posts2)
        1 (count posts3)
        1 (count posts4)
        0 (count posts5))
      (is (thrown? AssertionError (get-tagged-posts "string"))))))

;;; add-prev-next-post
(deftest add-prev-next-post-test
  (testing "even num"
    (let [posts (list {:name "a"} {:name "b"})
          [a b] (add-prev-next-post posts)]
      (are [x y] (= (if x (dissoc x :next :prev) x) y)
        nil (:prev a)
        b   (:next a)
        a   (:prev b)
        nil (:next b))))

  (testing "odd num"
    (let [posts (list {:name "a"} {:name "b"} {:name "c"})
          [a b c] (add-prev-next-post posts)]
      (are [x y] (= (if x (dissoc x :next :prev) x) y)
        nil (:prev a)
        b   (:next a)
        a   (:prev b)
        c   (:next b)
        b   (:prev c)
        nil (:next c)))))

;;; get-all-tags
(deftest* get-all-tags-test
  (testing "normal pattern"
    (let [[t1 t2 _ t3 :as tags] (sort-alphabetically :name (get-all-tags))]
      (are [x y] (= x y)
        4      (count tags)
        "tag1" (:name t1)
        "tag2" (:name t2)
        "tag3" (:name t3)
        "/tag/tag1.html" (:url t1)
        "/tag/tag2.html" (:url t2)
        "/tag/tag3.html" (:url t3))))
  (testing "error pattern"
    (bind-config [:post-dir nil]
      (is (empty? (get-all-tags))))))

;;; get-tags
(deftest* get-tags-test
  (let [[t1 t2 t3 :as tags] (get-tags)]
    (are [x y] (= x y)
      3      (count tags)
      "tag1" (:name t1)
      "tag2" (:name t2)
      "tag3" (:name t3)
      "/tag/tag1.html" (:url t1)
      "/tag/tag2.html" (:url t2)
      "/tag/tag3.html" (:url t3)))
  (let [[t1 t2 t3 :as tags] (get-tags :count-by-name? true)]
    (are [x y] (= x y)
      3      (count tags)
      "tag1" (:name  t1)
      "tag2" (:name  t2)
      "tag3" (:name  t3)
      1      (:count t1)
      2      (:count t2)
      1      (:count t3)
      "/tag/tag1.html" (:url   t1)
      "/tag/tag2.html" (:url   t2)
      "/tag/tag3.html" (:url   t3))))

;;; make-site-data
(deftest* make-site-data-test
  (let [post-dir (:post-dir *config*)
        file1    (io/file (str post-dir "2000.01.01-foo.html.clj"))
        file2    (io/file (str post-dir "2011.01.01-foo.html.clj"))
        option1  (parse-template-option file1)
        option2  (parse-template-option file2)]

    (testing "simple site data"
      (let [site (make-site-data file1 :base-option option1)
            [p1 p2 p3] (:posts site)]
        (are [x y] (= x y)
          file1   (:file site)
          "baz"   (:title site)
          "world" (:hello site)
          3       (count (:posts site))
          "bar"   (:title p1)
          "foo"   (:title p2)
          "baz"   (:title p3)
          ()      (:tag site)
          nil     (:tag-name site)
          '("tag1" "tag2" "tag3") (map :name (:tags site))
          '(1 2 1) (map :count (:tags site))
          (date-time 2000 1 1) (:date site)
          nil (:next site)
          (dissoc p2 :next :prev) (:prev site)
          )

        (are [x y] (= (if x (dissoc x :next :prev) x) y)
          ; prev/next
          p2  (:next p1)
          nil (:prev p1)
          p3  (:next p2)
          p1  (:prev p2)
          nil (:next p3)
          p2  (:prev p3))))

    (testing "site data with post tag"
      (let [site (make-site-data file1 :base-option option1 :tags ["tag1"])]
        (are [x y] (= x y)
          file1  (:file site)
          1      (count (:posts site))
          ()     (:tag site)
          "tag1" (:tag-name site)
          "bar"  (-> site :posts first :title)
          nil    (:next site)
          nil    (:prev site))))

    (testing "site data containing tag-name"
      (let [site (make-site-data file2 :base-option option2)]
        (are [x y] (= x y)
          file2   (:file site)
          "foo"   (:title site)
          "world" (:hello site)
          3       (count (:posts site))
          2       (count (:tag site))
          "tag2"  (-> site :tag first :name)
          nil     (:tag-name site)
          '("tag1" "tag2" "tag3") (map :name (:tags site))
          '(1 2 1) (map :count (:tags site))
          (date-time 2011 1 1) (:date site)
          "baz"   (:title (:next site))
          "bar"   (:title (:prev site)))))

    (testing "with post-sort-type => :date (inc)"
      (bind-config [:post-sort-type :date]
        (let [site       (make-site-data file1)
              [p1 p2 p3] (:posts site)]
          (are [x y] (= x y)
            "baz" (:title p1)
            "foo" (:title p2)
            "bar" (:title p3)

            (dissoc p2 :next :prev)  (:next site)
            nil (:prev site)
            ))))

    (testing "with post-sort-type => :name (inc)"
      (bind-config [:post-sort-type :name]
        (let [site       (make-site-data file1)
              [p1 p2 p3] (:posts site)]
          (are [x y] (= x y)
            "baz" (:title p1)
            "foo" (:title p2)
            "bar" (:title p3)

            (dissoc p2 :next :prev) (:next site)
            nil (:prev site)))))

    (testing "with post-sort-type => :name-desc"
      (bind-config [:post-sort-type :name-desc]
        (let [site       (make-site-data file1)
              [p1 p2 p3] (:posts site)]
          (are [x y] (= x y)
            "bar" (:title p1)
            "foo" (:title p2)
            "baz" (:title p3)

            nil (:next site)
            (dissoc p2 :next :prev) (:prev site)
            ))))

    (testing "with post-sort-type => :title (inc)"
      (bind-config [:post-sort-type :title]
        (let [site       (make-site-data file1)
              [p1 p2 p3] (:posts site)]
          (are [x y] (= x y)
            "bar" (:title p1)
            "baz" (:title p2)
            "foo" (:title p3)

            (dissoc p3 :next :prev) (:next site)
            (dissoc p1 :next :prev) (:prev site)))))

    (testing "with post-sort-type => :title-desc"
      (bind-config [:post-sort-type :title-desc]
        (let [site       (make-site-data file1)
              [p1 p2 p3] (:posts site)]
          (are [x y] (= x y)
            "foo" (:title p1)
            "baz" (:title p2)
            "bar" (:title p3)

            (dissoc p3 :next :prev) (:next site)
            (dissoc p1 :next :prev) (:prev site)
            ))))


    (testing "no post-dir"
      (bind-config [:post-dir nil]
        (let [site (make-site-data file1 :base-option option1)]
          (are [x y] (= x y)
            file1   (:file site)
            "baz"   (:title site)
            "world" (:hello site)
            0       (count (:posts site))
            0       (count (:tags site))
            nil     (:next site)
            nil     (:prev site)
            ))))))

;;; file->template-sexp
(deftest* file->template-sexp-test
  (let [post-dir (:post-dir *config*)
        file1    (template-name->file "index.html.clj")
        file2    (io/file (str post-dir "2011.01.01-foo.html.clj"))
        ]
    (are [x y] (= x y)
      ; index.html.clj
      "<head><title>index</title></head><body><h1>index</h1><p>world</p></body>"
      (html (file->template-sexp file1))

      ; 2011.01.01-foo.html.clj
      "<div><p>foo</p></div>"
      (html (file->template-sexp file2)))))

;;; generate-tag-template-sexp
(deftest* generate-tag-sexp-test
  (let [[t1 t2 t3] (get-tags)]
    (are [x y] (= x y)
      ; tag1
      "<p>tag1</p><ul><li>bar</li></ul>"
      (html (generate-tag-template-sexp (:name t1)))
      ; tag2
      "<p>tag2</p><ul><li>bar</li><li>foo</li></ul>"
      (html (generate-tag-template-sexp (:name t2)))
      ; tag3
      "<p>tag3</p><ul><li>foo</li></ul>"
      (html (generate-tag-template-sexp (:name t3)))
      ; tagX
      "<p>tagX</p><ul></ul>"
      (html (generate-tag-template-sexp "tagX")))))

;;; compile-tag-test
(deftest* compile-tag-test
  (let [{:keys [public-dir tag-out-dir]} *config*
        tag-name "tag1"
        res      (compile-tag tag-name)
        file     (io/file (str public-dir tag-out-dir tag-name ".html"))]
    (is res)
    (is (.exists file))
    (.delete file)))

;;; compile-template
(deftest* compile-template-test
  (let [{:keys [public-dir template-dir]} *config*
        tmpl (io/file (str template-dir "index.html.clj"))
        res  (compile-template tmpl)
        file (io/file (str public-dir (make-template-output-filename tmpl)))]
    (is res)
    (is (.exists file))
    (.delete file)))

;;; default site data
(deftest* default-site-data-test
  (let [file (template-name->file "site.html.clj")]
    (is (= "<p>default title</p>" (html (file->template-sexp file))))))

;;; format check
(deftest* template-format-test
  (are [x y] (= x (:format (meta (file->template-sexp (template-name->file y)))))
    "html5" "no_format.html.clj"
    "xhtml" "with_format.html.clj"
    "html4" "with_layout_format.html.clj"))


;;; functions in template test
(deftest* html-function-template-test
  (is (= "<p class=\"paragraph\"><a href=\"link.html\">link</a></p>"
         (-> "html.test.html.clj" template-name->file file->template-sexp html))))

;; SERVER
(deftest* compile-cljs-test
  (let [{:keys [template-dir public-dir]} *config*]
    (do-compile (io/file (str template-dir "cljs/hello.cljs")))
    (let [js-file   (io/file (str public-dir "js/main.js"))
          core-file (io/file (str public-dir "js/cljs"))]
      (is (.exists js-file))
      (is (.exists core-file))
      (.delete js-file)
      (.delete core-file)
      (.. js-file getParentFile delete))))

(deftest* server-test
  (testing "compile with post"
    (let [{:keys [post-dir public-dir tag-out-dir]} *config*]
      (do-compile (io/file (path post-dir "2011.01.01-foo.html.clj")))
      (let [post-file (public-file "2011-01/foo.html")
            test-file (public-file "index.html")
            tag1-file (public-file (path tag-out-dir "tag1.html"))
            tag2-file (public-file (path tag-out-dir "tag2.html"))
            tag3-file (public-file (path tag-out-dir "tag3.html"))]
        (are [x file] (= x (.exists file))
          true  post-file
          true  test-file
          false tag1-file
          true  tag2-file
          true  tag3-file)

        (let [files (concat (find-files public-dir)
                            (find-files (path public-dir "2000-01"))
                            (find-files (path public-dir "2011-01"))
                            (find-files (path public-dir "2022-02"))
                            (find-files (path public-dir "tag")))
              files (distinct (filter #(.isFile %) files))]
          (doseq [f files] (.delete f)))))))

