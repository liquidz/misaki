; @layout  post
; @title   Clojurescript

(h2 "Setting")

(p "delete comment in `_config.clj`.")

#-CLJ
{
 ;; clojurescript compile options
 ;; src-dir base is `:template-dir`
 ;; output-dir base is `:public-dir`
 :cljs {:src-dir       "cljs"
        :output-to     "js/main.js"
        :optimizations :advanced}
 }
CLJ

; /clojurescript setting

(h2 "Edit and compile")

(p "Open template-dir/cljs/hello.cljs")

#-CLJ
(ns hello)

(defn ^:export myalert [msg]
  (.alert js/window (str "Hello, " msg)))
CLJ

(p "To call above function,")

#-HTML
<button onclick="hello.myalert('clojurescript world!!');">
Call clojurescript function!
</button>
HTML

[:button {:onclick "hello.myalert('clojurescript world!!');"} "Call clojurescript function!"]

(h3 "Failed to compile?")

(p "if you failed to compile clojurescript, try followings")

(ul ["java.lang.AssertionError => `cd MISAKI_HOME; rm -rf classes/cljs`"
     "Another error => `cd CLJS_OUTPUT_DIR; rm hello.js; rm -rf cljs`"])

(js "../js/hello.js")
