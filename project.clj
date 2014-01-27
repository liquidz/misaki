(defproject misaki "0.3.0-no-bc"
  :description  "Jekyll inspired static site generator in Clojure"
  :url          "https://github.com/liquidz/misaki"
  :license      {:name "Eclipse Public License"
                 :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.5.1"]
                 [org.clojure/tools.reader "0.8.3"]
                 [uochan/watchtower "0.1.4"]]
  :profiles {:dev {:dependencies [[midje "1.6.0" :exclusions [org.clojure/clojure]]]}}
  :plugins [[lein-midje "3.1.3"]]
  ;:aliases        {"all" ["with-profile" "dev"]}

  :main misaki.core)
