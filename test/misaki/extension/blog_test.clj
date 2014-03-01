(ns misaki.extension.blog-test
  (:require
    [misaki.extension.blog.defaults :refer :all]
    [misaki.input.watch-directory :refer [file->resource]]
    [misaki.extension.blog :refer :all]
    [misaki.config :refer [*config*]]
    [misaki.input :as in]
    [misaki.util.file :as file]
    [midje.sweet               :refer :all]
    [misaki.route :as route]
    [clojure.string :as str]
    [clojure.java.io :as io]
    [cuma.core :refer [render]]
    [clj-time.core :refer [date-time]]
    ))

(def ^{:private true} watch-dir
  "test/files/blog")
(def ^{:private true} test-conf
  {:applying-route [:complete-date :frontmatter.edn :remove-last-extension]
   :watch-directory watch-dir})

(fact "layout-file should work fine."
  (binding [*config* (blog-config test-conf)]
    (layout-file "foo")
       => (io/file (file/join watch-dir "layouts" "foo.html"))))

(fact "post-file? should work fine."
  (binding [*config* (blog-config test-conf)]
    (let [test-post-file? #(post-file? (io/file (apply file/join %&)))]
      (test-post-file? (:post-dir *config*) "foo.txt")   => true
      (test-post-file? (:layout-dir *config*) "foo.txt") => false)))

(fact "layout-file? should work fine."
  (binding [*config* (blog-config test-conf)]
    (let [test-layout-file? #(layout-file? (io/file (apply file/join %&)))]
      (test-layout-file? (:layout-dir *config*) "foo.txt") => true
      (test-layout-file? (:post-dir *config*) "foo.txt")   => false)))

(fact "get-post-files should work fine."
  (binding [*config* (blog-config test-conf)]
    (count (get-post-files)) => 3))

(facts "get-posts should work fine."
  (fact "default config"
    (binding [*config* (blog-config test-conf)]
      (let [[p3 p2 p1 :as posts] (get-posts)]
        (count posts)            => 3
        (-> p1 :title) => "foo"
        (-> p2 :title) => "bar"
        (-> p3 :title) => "baz"

        (-> p1 :date)  => (date-time 2014 1 1 0 11 22)
        (-> p2 :date)  => (date-time 2014 1 2 0 11 22)
        (-> p3 :date)  => (date-time 2014 1 3 0 11 22)

        (-> p1 :url) => "/2014-01-01-001122.html"
        (-> p2 :url) => "/2014-01-02-001122.html"
        (-> p3 :url) => "/2014-01-03-001122.html"
        )))

  (fact "custom watch direcotry"
    (binding [*config* (blog-config
                         (merge test-conf {:local-server {:url-base "/foo"}}))]
      (let [[p3 p2 p1 :as posts] (get-posts)]
        (-> p1 :url) => "/foo/2014-01-01-001122.html"
        (-> p2 :url) => "/foo/2014-01-02-001122.html"
        (-> p3 :url) => "/foo/2014-01-03-001122.html"
        ))))

(defn- config-for-main
  ([path]
   (config-for-main
     path
     ";; :layout \"default\"\n;; :title \"hello\"\n\n$(title) world"))
  ([path content]
   (let [base-dir (:watch-directory *config*)
         filename (file/join base-dir path)
         m (file->resource (io/file filename) base-dir)
         m (assoc m :content (delay content))
         ]
     (route/apply-route m (:applying-route *config*)))))

(fact "get-index-url should work fine."
  (binding [*config* {:local-server {:url-base "/foo"}}]
    (get-index-url) => "/foo/")
  (binding [*config* {:local-server {:url-base "/foo"}
                      :blog {:index-filename "bar.html"}}]
    (get-index-url) => "/foo/bar.html")
  (binding [*config* {:local-server {:url-base "/foo"}
                      :blog {:index-filename "index.html"}}]
    (get-index-url) => "/foo/")
  (binding [*config* {:local-server {:url-base "/foo"}
                      :blog {:index-filename "index.htm"}}]
    (get-index-url) => "/foo/"))

(fact "build-with-post should work."
  (in/clear!)
  (in/empty?) => true
  (build-with-post {:blog {:build-with-post ["foo.txt"]}})
  (:file (in/get!)) => (io/file "./foo.txt")
  (in/empty?) => true

  (build-with-post {:blog {:build-with-post ["foo.txt" "bar.txt"]}})
  (:file (in/get!)) => (io/file "./foo.txt")
  (:file (in/get!)) => (io/file "./bar.txt")
  (in/empty?) => true)

(facts "-main should work fine."
  (binding [*config* test-conf]
    (fact "post template file"
      (let [path (file/join "2014-01-02-001122.html")
            m    (config-for-main (file/join DEFAULT_POST_DIR (str path ".md")))
            res  (-main (merge *config* m))
            ]

        (contains? res :posts) => true
        (count (:posts res)) => 3
        (:title res) => "hello"
        (:path res)  => path
        (contains? res :index-url) => true
        (-> res :content force (.indexOf "<title>hello</title>") (not= -1))
            => true
        (-> res :content force (.indexOf "hello world") (not= -1))
            => true

        ;; TODO
        ;; * prev/next post
        (-> res :prev :title) => "foo"
        (-> res :prev :url) => "/2014-01-01-001122.html"

        (-> res :next :title) => "baz"
        (-> res :next :url) => "/2014-01-03-001122.html"
        )
      )

    (fact "normal template file"
      (let [path "index.html"
            m    (config-for-main (str path ".md"))
            res  (-main (merge *config* m))]

        (contains? res :posts) => true
        (count (:posts res)) => 3
        (:title res) => "hello"
        (:path res)  => path
        (contains? res :index-url) => true
        (-> res :content force (.indexOf "<title>hello</title>") (not= -1))
            => true
        (-> res :content force (.indexOf "hello world") (not= -1))
            => true
        ;; TODO
        ;; * pagination
        ))

    (fact "normal template file with pagination"
      (binding [*config* (blog-config
                           (assoc *config* :blog {:page-name "page$(page)/$(filename)"}))]
        (in/clear!)
        (let [path "index.html"
              m    (config-for-main (str path ".md"))
              m    (assoc m :posts-per-page 2)
              res  (-main (merge *config* m))]

          (-> res :page-total)   => 2
          (-> res :page)         => 1
          (-> res :posts count)  => 2
          (-> res :path)         => "index.html"
          (-> res :next :page)   => 2
          (-> res :next :url)    => "/page2/index.html"
          (-> res :prev)         => nil

          (in/empty?) => false
          (let [res (in/get!)]
            (in/empty?) => true
            (-> res :page)        => 2
            (-> res :posts count) => 1
            (-> res :path)        => "page2/index.html"
            (-> res :next)        => nil
            (-> res :prev :page)  => 1
            (-> res :prev :url)   => "/index.html"))))))

(fact "parse-filename should work fine."
  (parse-filename "/foo/bar")     => {:filename "bar" :dir "/foo/"}
  (parse-filename "/foo/bar.baz") => {:filename "bar.baz" :dir "/foo/"}
  (parse-filename "/bar")         => {:filename "bar" :dir "/"}
  (parse-filename "/bar.baz")     => {:filename "bar.baz" :dir "/"}
  (parse-filename "bar")          => {:filename "bar" :dir ""}
  (parse-filename "bar.baz")      => {:filename "bar.baz" :dir ""}
  (parse-filename "")             => {:filename "" :dir ""})
