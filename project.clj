(defproject misaki "0.2.6.2-beta"
  :description "Jekyll inspired static site generator in Clojure"
  :dependencies [[org.clojure/clojure "1.5.1"]
                 [org.clojure/math.numeric-tower "0.0.2"]
                 [hiccup "1.0.3"]
                 [compojure "1.1.5"]
                 [ring/ring-jetty-adapter "1.1.8"]
                 [clj-time "0.5.0"]
                 [clj-text-decoration "0.0.2"]
                 [clj-pretty-error "0.0.6"]
                 [uochan/watchtower "0.1.4"]
                 [de.ubercode.clostache/clostache "1.3.1"]
                 [cuma "0.0.4"]
                 [clj-gntp "0.0.1"]
                 ; cljs compiler
                 [org.clojure/clojurescript "0.0-1586"]]

  :plugins [[codox "0.6.4"]
            [lein-cloverage "1.0.2"]
            [jonase/eastwood "0.0.2"]]

  ;:profiles       {:1.5 {:dependencies [[org.clojure/clojure "1.5.0-RC4"]]}}
  :aliases        {"all" ["with-profile" "dev"]}

  :repositories [["sonatype-snapshots"
                  "https://oss.sonatype.org/content/repositories/snapshots/"]]

  :codox {:exclude [misaki.compiler.demo.core
                    misaki.compiler.copy.core]
          :src-dir-uri "http://github.com/liquidz/misaki/blob/master"
          :src-linenum-anchor-prefix "L"
          :output-dir "doc/public/api"}

  :main misaki.server)
