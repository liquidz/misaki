(ns misaki.compiler.default.core
  "Default HTML compiler for clojure source."
  (:use
    [misaki.compiler.default template config]
    [misaki.util file sequence string]
    [misaki.config :only [*config*]]
    [cljs.closure  :only [build]]
    [hiccup.core   :only [html]]
    [hiccup.page   :only [html5 xhtml html4]]
    [clojure.core.incubator :only [-?>>]])
  (:require
    [misaki.core     :as msk]
    [misaki.config   :as cnf]
    [misaki.server   :as srv]
    [clojure.string  :as str]
    [clojure.java.io :as io])
  (:import [java.io File]))

(declare file->template-sexp)
(declare compile-template)
(declare compile-clojurescripts)
(declare compile-tag)
(declare get-tags)
(declare get-posts)
(declare get-prev-next-post)

; =log
(defmacro log
  "Print compile result log with `:detailed-log` option."
  ([label body]
   `(if (and (:detailed-log *config*) (= :all (:-compiling *config*)))
      (srv/print-compile-result ~label ~body)
      ~body))
  ([label body force?]
   `(if (and (:detailed-log *config*) ~force?)
      (srv/print-compile-result ~label ~body)
      ~body)))

;; ## Functions for Plugin

; =-extension
(defn -extension
  []
  {:post [#(sequential? %)]}
  (list :clj :cljs))

; =-config
(defn -config
  [config]
  {:pre  [(map? config)]
   :post [#(map? %)]}
  (plugin-config config))

; =-compile
(defn -compile
  [config file]
  {:pre  [(map? config) (instance? File file)]
   :post [#(or (true? %) (false? %) (string? %) (map? %))]}

  (with-config config
    (cond
      ; clojurescript
      (has-extension? ".cljs" file)
      (log "clojurescripts" (compile-clojurescripts))

      ; layout
      (layout-file? file)
      {:status 'skip :all-compile?  true}

      ; else
      :else
      (let [res (log (.getName file) (compile-template file))]
        (when (cnf/post-file? file)
          ; compile tag
          (if-let [tags (-> file parse-template-option :tag)]
            (doseq [{tag-name :name} tags]
              (log tag-name (compile-tag tag-name) true)))
          ; compile prev/next posts
          (let [posts       ((sort-type->sort-fn) (get-posts))
                [prev next] (get-prev-next-post file posts)
                prev-file   (:file prev)
                next-file   (:file next)]
            (if prev-file
              (log (.getName prev-file) (compile-template prev-file) true))
            (if next-file
              (log (.getName next-file) (compile-template next-file) true))))
        res))))

;; ## Post Functions

; =generate-post-content
(defn generate-post-content
  "Generate post content without layout."
  [#^File post-file]
  {:pre [(file? post-file)]}
  (html (file->template-sexp post-file :allow-layout? false)))

; =get-post-info
(defn get-post-info
  "Get post template information from java.io.File.

  Post content(`:lazy-content`) is delayed."
  [#^File post-file]
  {:pre [(file? post-file)]}
  (assoc (parse-template-option post-file)
         :file post-file
         :date (cnf/get-date-from-file post-file)
         :url  (make-post-url post-file)
         :lazy-content (delay (escape-string (generate-post-content post-file)))))

; =post-info-contains-tag?
(defn post-info-contains-tag?
  "Check whether post information contains tag or not."
  [post-info #^String tag-str]
  {:pre [(map? post-info) (string? tag-str)]}
  (let [tags      (get post-info :tag [])
        tag-names (set (map :name tags))]
    (contains? tag-names tag-str)))

; =get-posts
(defn get-posts
  "Get posts data from (:post-dir *config*) directory."
  []
  (map get-post-info (msk/get-post-files)))

; =get-tagged-posts
(defn get-tagged-posts
  "Get tagged posts data from (:post-dir *config*) directory."
  [tag-seq]
  {:pre [(sequential? tag-seq)]}
  (filter
    #(every? (partial post-info-contains-tag? %) tag-seq)
    (get-posts)))

; =add-prev-next-post
(defn add-prev-next-post
  "Add next post, previous post information to post list."
  [posts]
  (map (fn [[prev m next]]
         (assoc m :prev prev :next next))
       (partition 3 1 (flatten (list nil posts nil)))))

; =get-prev-next-post
(defn get-prev-next-post
  "Get next and previous post information from post list."
  [post-file posts]
  (let [[p _ n] (find-first
                  #(= post-file (:file (second %)))
                  (partition 3 1 (flatten (list nil posts nil)))
                  [nil nil nil])]
    [p n]))

;; ## Tag Functions

; =get-all-tags
(defn get-all-tags
  "Get all(unfiltered) tags from post list.
  Return nil if :post-dir option is nil."
  []
  (remove nil?  (mapcat (comp :tag parse-template-option) (msk/get-post-files))))

; =get-tags
(defn get-tags
  "Get tags from post list.

  Add counting by tag name if true is setted to :count-by-name?"
  [& {:keys [count-by-name?] :or {count-by-name? false}}]
  (let [tags (get-all-tags)
        tags (if count-by-name?
               (map #(assoc (first %) :count (count %)) (vals (group-by :name tags)))
               tags)]
    (distinct (sort-alphabetically :name tags))))

;; ## S-exp Template Applier

; =make-site-data
(defn make-site-data
  "Make site meta data from template java.io.File for HTML generator."
  [#^File tmpl-file & {:keys [base-option tags]
                       :or   {base-option {}, tags nil}}]
  {:pre [(file? tmpl-file)]}
  (let [with-tag?   (and (not (nil? tags)) (sequential? tags))
        sort-fn     (sort-type->sort-fn)
        posts       (sort-fn (if with-tag? (get-tagged-posts tags) (get-posts)))
        [prev next] (if (cnf/post-file? tmpl-file)
                      (get-prev-next-post tmpl-file posts)
                      [nil nil])]
    (assoc (merge (:site *config*) base-option)
           :file     tmpl-file
           :posts    (add-prev-next-post posts)
           :tags     (get-tags :count-by-name? true)
           :tag-name (if with-tag? (str/join "," tags))
           :index    (cnf/get-index-filename)
           :date     (cnf/get-date-from-file tmpl-file)
           :next     next
           :prev     prev)))

; =file->template-sexp
(defn file->template-sexp
  "Convert java.io.File to Template s-exp which can be compiled by hiccup"
  [#^File tmpl-file & {:keys [allow-layout?] :or {allow-layout? true}}]
  {:pre [(file? tmpl-file)]}
  (let [tmpl-fn    (load-template tmpl-file allow-layout?)
        site-data  (make-site-data tmpl-file)
        empty-data (with-meta '("") site-data)]
    (apply-template tmpl-fn empty-data)))


; =generate-tag-template-sexp
(defn generate-tag-template-sexp
  "Generate tag template s-exp from tag name(String) with `*tag-layout*` layout."
  [#^String tag-name]
  {:pre [(string? tag-name)]}
  (let [file       (io/file (:tag-layout *config*))
        tmpl-fn    (load-template file)
        site-data  (make-site-data file :tags [tag-name])
        empty-data (with-meta '("") site-data)]
    (apply-template tmpl-fn empty-data)))

;; ## HTML Compiler

; =get-compile-fn
(defn get-compile-fn
  "Get hiccup functon from format option."
  [#^String format-str]
  (let [lang (:lang *config*)]
    (case format-str
      "html5" #(html5 {:lang lang} %)
      "xhtml" #(xhtml {:lang lang} %)
      "html4" #(html4 %)
      #(html %))))

; =compile*
(defn- compile*
  [#^String output-filename template-sexp]
  {:pre [(string? output-filename) (sequential? template-sexp)]}
  (let [compile-fn (-> template-sexp meta :format get-compile-fn)]
    (write-file (str (:public-dir *config*) output-filename)
                (compile-fn template-sexp))
    true))

; =compile-tag
(defn compile-tag
  "Compile a tag page.
  return true if compile succeeded."
  [#^String tag-name]
  {:pre [(string? tag-name)]}
  (compile* (make-tag-output-filename tag-name)
            (generate-tag-template-sexp tag-name)))

; =compile-template
(defn compile-template
  "Compile a specified template, and write compiled data to `*public-dir*`.
  return true if compile succeeded."
  [#^File tmpl-file]
  {:pre [(file? tmpl-file)]}
  (compile* (make-template-output-filename tmpl-file)
            (file->template-sexp tmpl-file)))

; =compile-clojurescripts
(defn compile-clojurescripts
  "Compile clojurescripts.
  return true if compile succeeded."
  []
  (when-let [option (:cljs-compile-options *config*)]
    ; make directory if not exists
    (make-directories (:output-to option))
    ; delete existing files
    (delete-file (:output-to option))
    (delete-file (str (:output-dir option) "/cljs"))
    ; build clojurescript
    (build (:src-dir option) option)
    true))

