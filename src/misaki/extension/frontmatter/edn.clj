(ns misaki.extension.frontmatter.edn
  "Misaki extension to get edn frontmatter."
  (:require
    [clojure.string           :as str]
    [clojure.tools.reader.edn :as edn]))

(def ^{:doc "Frontmatter prefix."}
  FRONTMATTER_PREFIX ";;")

(defn- drop-lines
  [n s]
  (str/join "\n" (drop n (str/split-lines s))))

(defn get-frontmatter-lines
  "Get frontmatter lines from string."
  [s]
  (take-while
    #(zero? (.indexOf % FRONTMATTER_PREFIX))
    (str/split-lines s)))

(defn parse-frontmatter
  "Parse frontmatter lines to hash map."
  [lines]
  (->> (map #(subs % (count FRONTMATTER_PREFIX)) lines)
       (str/join "")
       (#(str "{" % "}"))
       edn/read-string))

(defn -main
  "Expand frontmatter, and remove from content."
  [edn]
  (let [content (force (:content edn))
        lines   (get-frontmatter-lines content)
        data    (parse-frontmatter lines)]
    (assoc (merge edn data)
           :content (delay (drop-lines (count lines) content)))))
