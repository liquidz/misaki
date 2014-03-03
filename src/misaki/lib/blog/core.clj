(ns misaki.lib.blog.core
  (:require
    [misaki.lib.blog.defaults     :refer :all]
    [misaki.input.watch-directory :as watch]
    [misaki.config    :refer [*config*]]
    [misaki.input     :as in]
    [misaki.route     :as route]
    [misaki.util.file :as file]
    [misaki.util.seq  :as seq]
    [misaki.status    :as status]
    [cuma.core        :refer [render]]
    [clojure.java.io  :as io]
    [clojure.string   :as str]))


(defn get-route-without-blog
  []
  (take-while
    ;(partial not= :blog)
    #(let [^String s (name %)]
       (false? (.startsWith s "blog")))
    (:applying-route *config*)))


(defn parse-filename
  [s]
  (let [parent (file/parent s)]
    {:filename  (file/get-name s)
     :dir (if (= parent s) "" (str parent file/separator))}))

(defn layout-file
  ""
  [layout-name]
  (let [layout-extension (or (some-> *config* :blog :layout) ".html")]
    (io/file (file/join (:layout-dir *config*)
                        (str layout-name layout-extension)))))

(defn layout-file?
  [^java.io.File file]
  (zero? (.indexOf (file/absolute-path file)
                   (file/absolute-path (:layout-dir *config*)))))

(defn post-file?
  [^java.io.File file]
  (zero? (.indexOf (file/absolute-path file)
                   (file/absolute-path (:post-dir *config*)))))

(defn get-post-files
  []
  (or (some->> *config* :post-dir io/file
               file-seq (filter #(.isFile ^java.io.File %)))
      []))

(defn- get-url-base
  []
  (let [^String s (or (some-> *config* :local-server :url-base)
              DEFAULT_URL_BASE)]
    (if (.endsWith s "/")
      s
      (str s "/"))))

(defn- path->url
  [path]
  (-> path
      (str/replace file/separator "/")
      (as-> s (str (get-url-base) s))))

(defn sort-posts
  [posts]
  (sort (fn [p1 p2]
          (let [^java.io.File f1 (:file p1)
                ^java.io.File f2 (:file p2)]
            (pos? (.compareTo (.getName f1) (.getName f2)))))
        posts))


(defn get-posts
  []
  (let [route    (get-route-without-blog)
        post-dir (:post-dir *config*)]
    (->> (get-post-files)
         (map #(watch/file->resource % post-dir))
         (map #(route/apply-route % route))
         (map #(assoc-in  % [:url] (path->url (:path %))))
         sort-posts)))

(defn- get-template-data
  [conf]
  (let [route (get-route-without-blog)]
    (take-while
      (comp not nil?)
      (iterate
        #(if-let [layout-name (:layout %)]
           (let [file   (layout-file layout-name)
                 layout {:content (delay (slurp file))}]
             (route/apply-route layout route)
             ))
        conf))))

(defn get-template-dir
  [conf]
  (:watch-directory conf DEFAULT_TEMPLATE_DIR))

(defn blog-config
  [conf]
  (let [tmpl-dir        (get-template-dir conf)
        post-dir-name   (-> conf :blog (:post-dir   DEFAULT_POST_DIR))
        layout-dir-name (-> conf :blog (:layout-dir DEFAULT_LAYOUT_DIR))]
    (assoc conf
           :post-dir   (file/join tmpl-dir post-dir-name)
           :layout-dir (file/join tmpl-dir layout-dir-name))))

(defn- html-template?
  [tmpl]
  (:html? tmpl false))

(defn render-content
  ([m] (render-content m identity))
  ([m convert-f]
   (let [tmpls (get-template-data m)
         info  (dissoc (apply merge (reverse tmpls)) :content)]
     (reduce
       (fn [res tmpl]
         (let [s (-> tmpl :content force (render res))
               s (if (html-template? tmpl) s (convert-f s))]
           (assoc res :content s)))
       info
       tmpls))))

(defn get-index-url
  []
  (let [filename (or (some-> *config* :blog :index-filename)
                     DEFAULT_INDEX_FILENAME)
        filename (if-not (#{"index.html" "index.htm"} filename) filename)]
    (str (get-url-base) filename)))


(defn post-config
  [conf]
  (let [posts (:posts conf)
        post-dir (or (-> *config* :blog :post-dir) DEFAULT_POST_DIR)
        [next prev] (seq/neighbors #(= (:file conf) (:file %)) posts)]
    (assoc conf
           :prev prev, :next next
           :path (str/join (drop (inc (count post-dir)) (:path conf))))))

(defn template-config
  [conf]
  (assoc conf
         :posts     (get-posts)
         :index-url (get-index-url)))

(defn- page-path
  [{:keys [path] :as conf} page]
  (if (= 1 page)
    path
    (render (-> conf :blog :page-name)
            (merge (parse-filename path)
                   {:page page}))))

(defn pagination-config
  [conf]
  (if-let [ppp (some-> conf :posts-per-page)]
    (let [posts      (partition-all ppp (:posts conf))
          page-total (count posts)
          ]
      (map-indexed
        (fn [i posts]
          (assoc conf
                 :posts posts
                 :page  (inc i)
                 :page-total page-total
                 :path  (page-path conf (inc i))
                 :prev  (if (> i 0) {:page i :url (-> conf (page-path i) path->url)})
                 :next  (if (< i (dec page-total))
                          {:page (+ 2 i)
                           :url (-> conf (page-path (+ 2 i)) path->url)})
                 ))
        posts)
      )
    conf))

;; TODO
;; * sort type
;; * tags

(defn build-with-post
  [conf]
  (when-not (status/building-all? conf)
    (let [tmpl-dir (get-template-dir conf)]
      (doseq [name (or (some-> conf :blog :build-with-post) [])]
        (-> (file/join (:watch-directory conf DEFAULT_TEMPLATE_DIR) name)
            io/file
            (watch/add-to-input tmpl-dir))))))

(defn build-prev-next-post
  [{:keys [prev next] :as conf}]
  (when-not (or (status/building-all? conf)
                ;(:building-prev-next-post conf)
                (status/status-contains? conf :building-prev-next-post))
    (let [tmpl-dir (get-template-dir conf)]
      (when prev
        (watch/add-to-input (:file prev) tmpl-dir (status/add-status {} :building-prev-next-post)))
      (when next
        (watch/add-to-input (:file next) tmpl-dir (status/add-status {} :building-prev-next-post))))))

(defn build-identically
  [m]
  (in/add! (assoc m :type :identity)))


(defn blog-main-fn
  ([] (blog-main-fn identity))
  ([convert-fn]
   (fn [conf]
     (binding [*config* (blog-config conf)]
       (let [file  (:file conf)
             post? (post-file? file)
             conf  (template-config conf)
             conf  (if post?
                     (post-config conf)
                     (if (contains? conf :posts-per-page)
                       (pagination-config conf)
                       conf))
             f     #(let [res (render-content % convert-fn)]
                      (assoc % :content (delay (:content res))))
             ]

         ;; build with post
         (when post?
           (build-with-post conf)
           (build-prev-next-post conf))

         ;; return result
         (if (sequential? conf)
           (let [ls (doall (map f conf))]
             (doseq [x (rest ls)]
               (build-identically x))
             (first ls))
           (f conf))))
     )
   ))
