(defproject one-hyde "0.0.3-alpha"
  :description "Static site generator in Clojure inspired by Jekyll"
  :dependencies [[org.clojure/clojure "1.3.0"]
                 [hiccup "0.3.6"]
                 [compojure "1.0.1"]
                 [ring/ring-jetty-adapter "1.0.1"]
                 [watchtower "0.1.0"]]
  :dev-dependencies [[codox "0.4.1"]]
  :main one-hyde.server)
