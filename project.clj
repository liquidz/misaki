; common dependencies
(def deps '[[org.clojure/core.incubator "0.1.0"]
            [hiccup "0.3.6"]
            [compojure "1.0.2"]
            [ring/ring-jetty-adapter "1.0.2"]
            [clj-time "0.3.7"]
            [uochan/watchtower "0.1.2"]])

(defproject misaki "0.0.16-alpha"
  :description "Static site generator in Clojure inspired by Jekyll"
  :dependencies ~(conj deps '[org.clojure/clojure "1.4.0"])
  :dev-dependencies [[lein-multi "1.1.0"]
                     [codox "0.4.1"]]
  :repositories [["sonatype-snapshots" "https://oss.sonatype.org/content/repositories/snapshots/"]]
  :multi-deps {"1.2.1"  ~(conj deps '[org.clojure/clojure "1.2.1"])
               "1.3" ~(conj deps '[org.clojure/clojure "1.3.0"])
               "1.5S" ~(conj deps '[org.clojure/clojure "1.5.0-master-SNAPSHOT"])}
  :main misaki.server)
