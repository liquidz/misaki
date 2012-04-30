(ns misaki.compiler
  (:use [misaki config loader evaluator]
        [hiccup.core :only [html]])
  (:require [clojure.string :as str])
  )

(defn make-site-data []
  (assoc *site*
         :posts ()
         :tags ()
         :date ""))

;(defn get-compile-fn []
;  )

;(defn compile-template
;  [#^File file]
;  (let [tmpl-fn  (-> file load-template evaluate-template)
;        filename (make-template-output-filename file)
;        data (with-meta '() (meke-site-data))
;        result ( (apply-template tmpl-fn data))
;        ]
;
;
;
;    )
;  )
