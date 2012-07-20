; @layout  post
; @title   Clojurescript

(h2 "Config setting")

(p "Delete comment in `_config.clj`.")

#-CLJ
{
 ;; clojurescript compile options
 ;; src-dir base is `:template-dir`
 ;; output-dir base is `:public-dir`
 :cljs {:src-dir       "cljs"
        :output-to     "js/main.js"
        :optimizations :whitespace
        :pretty-print true}
 }
CLJ

; /clojurescript setting

(h2 "Edit clojurescript source.")

(p "Open \"template-dir/cljs/hello.cljs\".
   Clojurescript source filepath is defined by `:cljs {:src-dir}` in _config.clj
   ")

#-CLJ
(ns hello)

(defn ^:export myalert [msg]
  (.alert js/window (str "Hello, " msg)))
CLJ

(p "Edit html file.")

#-HTML
<button onclick="hello.myalert('clojurescript world!!');">
Call clojurescript function!
</button>
HTML

(p "Demo button.")
[:button {:onclick "hello.myalert('clojurescript world!!');"} "Call clojurescript function!"]

(h3 "Failed to compile?")

(p "if you failed to compile clojurescript, try followings")

(h4 "java.lang.AssertionError")
#-SH
cd MISAKI_HOME
rm -rf classes/cljs
SH

(h4 "Another errors")
#-SH
cd CLJS_OUTPUT_DIR
rm hello.js
rm -rf cljs
SH


(js "../js/hello.js")
