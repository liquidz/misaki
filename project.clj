(defproject misaki "0.2.2-beta"
  :description "Jekyll inspired static site generator in Clojure"
  :dependencies [[org.clojure/clojure "1.4.0"]
                 [org.clojure/core.incubator "0.1.0"]
                 [org.clojure/clojurescript "0.0-1443"]
                 [hiccup "1.0.0"]
                 [compojure "1.1.1"]
                 [ring/ring-jetty-adapter "1.1.2"]
                 [clj-time "0.4.3"]
                 [clj-text-decoration "0.0.1"]
                 [clj-pretty-error "0.0.5"]
                 [uochan/watchtower "0.1.2"]
                 [de.ubercode.clostache/clostache "1.3.0"]
                 [clj-gntp "0.0.1"]
                 [clj-growl "0.2.1"]]

  :dev-dependencies [[lein-multi "1.1.0"]
                     [lein-marginalia "0.7.1"]
                     [debug-reader "0.0.1"]
                     [lein-autotest-notify "0.0.4"]]

  :repositories [["sonatype-snapshots"
                  "https://oss.sonatype.org/content/repositories/snapshots/"]]

  :multi-deps {"1.3"  [[org.clojure/clojure "1.3.0"]]
               "1.5S" [[org.clojure/clojure "1.5.0-master-SNAPSHOT"]]
               :all   [[org.clojure/core.incubator "0.1.0"]
                       [org.clojure/clojurescript "0.0-1236"]
                       [hiccup "1.0.0"]
                       [compojure "1.1.1"]
                       [ring/ring-jetty-adapter "1.1.2"]
                       [clj-time "0.4.3"]
                       [uochan/watchtower "0.1.2"]
                       [de.ubercode.clostache/clostache "1.3.0"]]}

  :main misaki.server)
