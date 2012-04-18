(defproject misaki "0.0.16-alpha"
  :description "Jekyll inspired static site generator in Clojure"
  :dependencies [[org.clojure/clojure "1.4.0"]
                 [org.clojure/core.incubator "0.1.0"]
                 [hiccup "0.3.6"]
                 [compojure "1.0.2"]
                 [ring/ring-jetty-adapter "1.0.2"]
                 [clj-time "0.3.7"]
                 [uochan/watchtower "0.1.2"]]

  :dev-dependencies [[lein-multi "1.1.0"]
                     [lein-marginalia "0.7.0"]]

  :repositories [["sonatype-snapshots"
                  "https://oss.sonatype.org/content/repositories/snapshots/"]]

  :multi-deps {"1.2.1" [[org.clojure/clojure "1.2.1"]]
               "1.3"   [[org.clojure/clojure "1.3.0"]]
               "1.5S"  [[org.clojure/clojure "1.5.0-master-SNAPSHOT"]]
               :all [[org.clojure/core.incubator "0.1.0"]
                     [hiccup "0.3.6"]
                     [compojure "1.0.2"]
                     [ring/ring-jetty-adapter "1.0.2"]
                     [clj-time "0.3.7"]
                     [uochan/watchtower "0.1.2"]]}

  :main misaki.server)
