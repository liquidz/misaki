(ns misaki.test.util.sequence
  (:require
    [misaki.util.sequence :refer :all]
    [clj-time.core        :refer [date-time]]
    [clojure.test         :refer :all]
    [clojure.java.io      :as io]))

(defn- make-dummy-posts []
  (list
    {:title "foo" :date (date-time 2011 1 1)}
    {:title "bar" :date (date-time 2022 2 2)}
    {:title "baz" :date (date-time 2000 1 1)}))

;;; sort-by-date
(deftest sort-by-date-test
  (testing "sort date desc"
    (let [[p1 p2 p3] (sort-by-date :date (make-dummy-posts))]
      (are [x y] (= x y)
        ; title
        "bar" (:title p1)
        "foo" (:title p2)
        "baz" (:title p3)
        ; date
        (date-time 2022 2 2) (:date p1)
        (date-time 2011 1 1) (:date p2)
        (date-time 2000 1 1) (:date p3))))

  (testing "sort date inc"
    (let [[p1 p2 p3] (sort-by-date :inc :date (make-dummy-posts))]
      (are [x y] (= x y)
        ; title
        "baz" (:title p1)
        "foo" (:title p2)
        "bar" (:title p3)
        ; date
        (date-time 2000 1 1) (:date p1)
        (date-time 2011 1 1) (:date p2)
        (date-time 2022 2 2) (:date p3)))))

;;; sort-alphabetically
(deftest sort-alphabetically-test
  (testing "sort list inc"
    (let [[a b c] (sort-alphabetically '("b" "a" "c"))]
      (are [x y] (= x y)
        "a" a
        "b" b
        "c" c)))

  (testing "sort map"
    (let [[a b c] (sort-alphabetically :text (list {:num 2 :text "b"}
                                                   {:num 1 :text "a"}
                                                   {:num 3 :text "c"}))]
      (are [x y] (= x y)
        "a" (:text a)
        "b" (:text b)
        "c" (:text c)
        1   (:num a)
        2   (:num b)
        3   (:num c))))

  (testing "sort list desc"
    (let [[a b c] (sort-alphabetically :desc identity '("b" "a" "c"))]
      (are [x y] (= x y)
        "c" a
        "b" b
        "a" c))))

;;; find-first
(deftest find-first-test
  (testing "match pattern"
    (are [x y] (= x y)
      0      (find-first zero? '(1 2 3 0 4))
      100    (find-first #(= 100 %) (range))
      {:a 2} (find-first :a (list {:b 1} {:a 2} {:a 3}))))
  (testing "not match pattern"
    (are [x y] (= x y)
      nil (find-first zero? '(1 2 3))
      nil (find-first :a (list {:b 1} {:c 2} {:d 3}))))
  (testing "lazy sequence"
    (let [i (atom 0)
          ls (map #(do (swap! i inc) %) '(1 2 3 4))]
      (are [x y] (= x y)
        2 (find-first #(= % 2) ls)
        2 @i)))
  (testing "find with default value"
    (are [x y] (= x y)
      0 (find-first zero? '(0 1 2 3) 'zero)
      'zero (find-first zero? '(1 2 3) 'zero))))


;;; get-prev-next
(deftest get-prev-next-test
  (testing "should return correct prev/next element"
    (let [[f1 f2 f3 :as ls] '(file1 file2 file3)]
      (are [x y] (= x y)
        [nil f2]  (get-prev-next #(= % 'file1) ls)
        [f1 f3]   (get-prev-next #(= % 'file2) ls)
        [f2 nil]  (get-prev-next #(= % 'file3) ls)
        [nil nil] (get-prev-next #(= % 'file4) ls))))

  (testing ":default option"
    (let [[f1 f2 :as ls] (list {:file 1} {:file 2})
          default '[NULL1 NULL2]]
      (are [x y] (= x y)
        ['NULL1 f2]      (get-prev-next #(= 1 (:file %)) ls :default default)
        [f1 'NULL2]      (get-prev-next #(= 2 (:file %)) ls :default default)
        ['NULL1  'NULL2] (get-prev-next #(= 3 (:file %)) ls :default default)))))

