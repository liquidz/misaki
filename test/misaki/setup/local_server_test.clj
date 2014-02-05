(ns misaki.setup.local-server-test
  (:require
    [misaki.setup.local-server :refer :all]
    [midje.sweet               :refer :all]))

(fact "local-server-conf should work fine."
  (local-server-conf {})
     => {:public-dir "." :local-server {:url-base "/" :port 8080}}
  (local-server-conf {:public-dir "foo"})
     => {:public-dir "foo" :local-server {:url-base "/" :port 8080}}
  (local-server-conf {:local-server {}})
     => {:public-dir "." :local-server {:url-base "/" :port 8080}}
  (local-server-conf {:local-server {:url-base "/foo"}})
     => {:public-dir "." :local-server {:url-base "/foo" :port 8080}}
  (local-server-conf {:local-server {:port 80}})
     => {:public-dir "." :local-server {:url-base "/" :port 80}})

