(ns misaki.server
  "misaki: development server"
  (:use
    [misaki core config]
    watchtower.core
    [compojure.core :only [routes]]
    [compojure.route :only [files]]
    [ring.adapter.jetty :only [run-jetty]]))

(defn- blue [s] (str "\033[36m" s "\033[0m"))
(defn- red  [s] (str "\033[31m" s "\033[0m"))

(defn- add-path-slash [path]
  (if path (if (.endsWith path "/") path (str path "/"))))

; =print-result
(defn print-result
  "Print compile result"
  [result]
  (println " ..." (if result (blue "DONE") (red "FAIL"))))

; =do-compile
(defn do-compile
  "Compile templte file and print status"
  [#^java.io.File file]
  (if (layout-file? file)
    (do (print " * compiling all templates:")
        (print-result (compile-all-templates)))
    (do (print " * compiling:" (.getName file))
        (print-result (compile-template
                        (file->template-name file))))))

; =start-watcher
(defn start-watcher
  "Start watchtower watcher to compile changed templates"
  []
  (watcher
    [*template-dir*]
    (rate 50)
    (file-filter ignore-dotfiles)
    (file-filter (extensions :clj))
    (on-change #(doseq [file %] (do-compile file)))))

; =main
(defn -main [& [dir]]
  (binding [*base-dir* (str "./" (add-path-slash dir))]
    (with-config
      (println "\n\n")
      (println (str "# => [" *base-dir* "]"))
      (println (str "# => [" *base-dir* "][" *public-dir* "]"))
      (println "\n\n")
      (start-watcher)
      (run-jetty
        ;(routes (files "/" {:root (str *base-dir* "public")}))
        ;(routes (files "/" {:root (str *base-dir* *public-dir*)}))
        (routes (files "/" {:root *public-dir*}))
        {:port 8080}))))

