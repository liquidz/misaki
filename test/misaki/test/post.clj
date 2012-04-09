(ns misaki.test.post
  (:use [misaki core config]
        [hiccup.core :only [html]]
        misaki.test.common
        clojure.test))

(deftest* get-posts-test
  (let [posts (get-posts)]
    (are [x y] (= x y)
      1 (count posts)
      "foo" (-> posts first :title)
      "/2011/01/foo.html" (-> posts first :url)
      false (nil? (-> posts first :file))
      false (nil? (-> posts first :date))
      false (nil? (-> posts first :lazy-content))
      "world" (-> posts first :hello))))
