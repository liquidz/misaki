; @layout  post
; @title   Highlight Setting

(h2 "Highlight Setting")

(p "Code's language is detected by [google-code-prettify](http://code.google.com/p/google-code-prettify/) automatically,
   however you can specify language with defining highlight setting.")

(h3 "Example")

(code "_config.clj")

#-CLJ
{
 ; directory setting
 ; ....

 ; highlight setting
 :code-highlight {:CLJ "lang-clj"}
 }
CLJ

(p "With above setting, following code has `lang-clj` css class.")


#-CLOJURE
#-CLJ
(println "hello, world")
CLJ
; => <pre class="prettyprint lang-clj">
;    (println "hello, world")
;    </pre>
CLOJURE

(p "With not defined string, class contains `prettyprint` simply.")

#-CLJ
#-NOTDEFINED
(println "hello, world")
NOTDEFINED
; => <pre class="prettyprint">
;    (println "hello, world")
;    </pre>
CLJ
