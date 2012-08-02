(ns misaki.test.reader
  (:use misaki.compiler.default.reader
        misaki.test.common
        clojure.test)
  (:require
    [clojure.string :as str]
    [clojure.java.io :as io])
  (:import [java.io StringReader PushbackReader])
  )


(deftest create-pushback-reader-with-line-test
  (testing "Normal reader test"
    (let [r (create-pushback-reader-with-line (StringReader. "hello"))]
      (are [x y] (= x y)
        (int \h) (.read r)
        (int \e) (.read r)
        (int \l) (.read r)
        (int \l) (.read r)
        (int \o) (.read r)
        -1       (.read r)
        (int \x) (do (.unread r (int \x)) (.read r)))))

  (testing "counting line number"
    (let [r  (create-pushback-reader-with-line (StringReader. "a\nb\nc"))
          nl (int \newline)]
      (are [x y] (= x y)
        (int \a) (.read r)
        1        @r
        nl       (.read r)
        2        @r
        (int \b) (.read r)
        2        @r
        nl       (.read r)
        3        @r
        (int \c) (.read r)
        -1       (.read r)))))

(deftest skip-to-token-test
  (testing "normal reading"
    (let [r (PushbackReader. (StringReader. "abc"))]
      (are [x y] (= x y)
        true     (skip-to-token r)
        (int \a) (.read r)
        true     (skip-to-token r)
        (int \b) (.read r)
        true     (skip-to-token r)
        (int \c) (.read r)
        nil      (skip-to-token r))))

  (testing "ignore space"
    (let [r (PushbackReader. (StringReader. "a  b  "))]
      (are [x y] (= x y)
        true     (skip-to-token r)
        (int \a) (.read r)
        true     (skip-to-token r)
        (int \b) (.read r)
        nil      (skip-to-token r))))

  (testing "ignore tab"
    (let [r (PushbackReader. (StringReader. "a\tb\t\t"))]
      (are [x y] (= x y)
        true     (skip-to-token r)
        (int \a) (.read r)
        true     (skip-to-token r)
        (int \b) (.read r)
        nil      (skip-to-token r))))

  (testing "ignore cr nl"
    (let [r (PushbackReader. (StringReader. "a\nb\r\n"))]
      (are [x y] (= x y)
        true     (skip-to-token r)
        (int \a) (.read r)
        true     (skip-to-token r)
        (int \b) (.read r)
        nil      (skip-to-token r))))

  (testing "ignore comments"
    (let [r (PushbackReader. (StringReader. "a;comment\r\nb;tail comment"))]
      (are [x y] (= x y)
        true     (skip-to-token r)
        (int \a) (.read r)
        true     (skip-to-token r)
        (int \b) (.read r)
        nil      (skip-to-token r)))))

(deftest read-sexp-test
  (let [s "(hello) 123 'world [neko] #{1 2} :nuko \"nyan\" {:a 1}"
        r (create-pushback-reader-with-line (StringReader. s))]
    (are [x y] (= x y)
      '(hello)       (read-sexp r)
      123            (read-sexp r)
      (quote 'world) (read-sexp r)
      '[neko]        (read-sexp r)
      #{1 2}         (read-sexp r)
      :nuko          (read-sexp r)
      "nyan"         (read-sexp r)
      {:a 1}         (read-sexp r)
      _EOF_          (read-sexp r))))

