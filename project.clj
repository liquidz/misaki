(defproject misaki "0.2.6-beta"
  :description "Jekyll inspired static site generator in Clojure"
  :dependencies [[org.clojure/clojure "1.5.1"]
                 [org.clojure/math.numeric-tower "0.0.2"]
                 [hiccup "1.0.1"]
                 [compojure "1.1.3"]
                 [ring/ring-jetty-adapter "1.1.6"]
                 [clj-time "0.4.4"]
                 [clj-text-decoration "0.0.1"]
                 [clj-pretty-error "0.0.5"]
                 [uochan/watchtower "0.1.4"]
                 [de.ubercode.clostache/clostache "1.3.0"]
                 [clj-gntp "0.0.1"]
                 ; cljs compiler
                 [org.clojure/clojurescript "0.0-1552"]]

  :dev-dependencies [[debug-reader "0.0.1"]
                     [lein-autotest-notify "0.0.4"]]

  :profiles       {:1.5 {:dependencies [[org.clojure/clojure "1.5.0-RC4"]]}}
  :aliases        {"all" ["with-profile" "dev:dev,1.5"]}

  :repositories [["sonatype-snapshots"
                  "https://oss.sonatype.org/content/repositories/snapshots/"]]

  :codox {:exclude [misaki.compiler.demo.core
                    misaki.compiler.copy.core]
          :src-dir-uri "http://github.com/liquidz/misaki/blob/master"
          :src-linenum-anchor-prefix "L"
          :output-dir "doc/public/api"}

  :main misaki.server)
