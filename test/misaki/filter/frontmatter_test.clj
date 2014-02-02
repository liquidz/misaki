(ns misaki.filter.frontmatter-test
  (:require
    [misaki.filter.frontmatter :refer :all]
    [midje.sweet               :refer :all]
    [clojure.string            :as str]))

(def ^{:private true} valid-text
  [";; :key \"value\""
   ";; :ls [1 2 3]"
   ""
   "hello"])

(def ^{:private true} invalid-text
  ["hello"
   "world"])

(fact "get-frontmatter-lines should work fine."
  (fact "valid text"
    (get-frontmatter-lines (str/join "\n" valid-text))
        => (take 2 valid-text))

  (fact "invalid text"
    (get-frontmatter-lines (str/join "\n" invalid-text))
        => []))

(facts "parse-frontmatter should work fine."
  (fact "valid text"
    (parse-frontmatter (take 2 valid-text)) => {:key "value" :ls [1 2 3]})

  (fact "invalid text"
    (parse-frontmatter []) => {}))

(facts "-main should work fine."
  (fact "valid text"
    (let [data {:foo "bar" :ls [9 10] :content (delay (str/join "\n" valid-text))}
          data (-main data)]
      (:foo data) => "bar"
      (:key data) => "value"
      (:ls data)  => [1 2 3]
      (-> data :content force str/trim) => "hello"))

  (fact "invalid text"
    (let [data {:foo "bar" :ls [9 10] :content (delay (str/join "\n" invalid-text))}
          data (-main data)]
      (:foo data) => "bar"
      (:key data) => nil
      (:ls data)  => [9 10]
      (-> data :content force str/trim) => "hello\nworld")))





