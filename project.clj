(defproject misaki "0.0.14-alpha"
  :description "Static site generator in Clojure inspired by Jekyll"
  :dependencies [[org.clojure/clojure "1.3.0"]
                 [org.clojure/core.incubator "0.1.0"]
                 [hiccup "0.3.6"]
                 [compojure "1.0.1"]
                 [ring/ring-jetty-adapter "1.0.1"]
                 [clj-time "0.3.7"]
                 [uochan/watchtower "0.1.2"]]
  :dev-dependencies [[codox "0.4.1"]]
  :main misaki.server)
