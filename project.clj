(defproject misaki "0.3.0-no-bc"
  :description  "Jekyll inspired static site generator in Clojure"
  :url          "https://github.com/liquidz/misaki"
  :license      {:name "Eclipse Public License"
                 :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.5.1"]
                 [org.clojure/tools.cli "0.3.1"]
                 [org.clojure/tools.reader "0.8.3"]
                 [uochan/watchtower "0.1.4"]
                 [clj-time "0.6.0"]
                 [clj-text-decoration "0.0.2"]
                 [cuma "0.0.5"]
                 [compojure "1.1.6"]
                 [ring/ring-jetty-adapter "1.2.1"]]

  :profiles {:dev {:dependencies [[midje "1.6.0" :exclusions [org.clojure/clojure]]
                                  [org.clojars.runa/conjure "2.1.3"]]}}
  :plugins [[lein-midje "3.1.3"]
            [lein-kibit "0.0.8"]
            [lein-bikeshed "0.1.6"]
            [jonase/eastwood "0.1.0"]
            [codox "0.6.6"]]


  :codox {:exclude [
                    misaki.configurator.welcome
                    misaki.outputter.debug-print
                    ]
          :src-dir-uri "http://github.com/liquidz/misaki/blob/0.3-no-bc/"
          :src-linenum-anchor-prefix "L"
          :output-dir "doc/api"}


  ;:aliases        {"all" ["with-profile" "dev"]}

  :main misaki.core)
