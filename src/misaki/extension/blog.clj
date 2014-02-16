(ns misaki.extension.blog
  (:require
    [misaki.extension.blog.defaults :refer :all]
    [misaki.config :refer [*config*]]
    [misaki.input.watch-directory :as in]
    [misaki.route  :as route]
    [misaki.util.file :as file]
    [misaki.util.seq  :as seq]
    [cuma.core :refer [render]]
    [clojure.java.io :as io]
    [clojure.string :as str]))

(defn get-route-without-blog
  []
  (remove (set [:blog]) (:applying-route *config*)))

(defn- change-post-path
  [path]
  (let [post-dir (or (-> *config* :blog :post-dir) DEFAULT_POST_DIR)]
    (str/join (drop (inc (count post-dir)) path))))

(defn layout-file
  ""
  [layout-name]
  (let [layout-extension (or (some-> *config* :blog :layout) ".html")]
    (io/file (file/join (:layout-dir *config*)
                        (str layout-name layout-extension)))))

(defn post-file?
  [^java.io.File file]
  (zero? (.indexOf (file/absolute-path file)
                   (file/absolute-path (:post-dir *config*)))))

(defn layout-file?
  [^java.io.File file]
  (zero? (.indexOf (file/absolute-path file)
                   (file/absolute-path (:layout-dir *config*)))))

(defn get-post-files
  []
  (or (some->> *config* :post-dir io/file file-seq (filter #(.isFile ^java.io.File %)))
      []))

(defn- get-url-base
  []
  (let [^String s (or (some-> *config* :local-server :url-base)
              DEFAULT_URL_BASE)]
    (if (.endsWith s "/")
      s
      (str s "/"))))

(defn- post-path->url
  [path]
  (-> path
      (str/replace file/separator "/")
      (as-> s (str (get-url-base) s))))

(defn get-posts
  []
  (let [route    (get-route-without-blog)
        post-dir (:post-dir *config*)]
    (->> (get-post-files)
         (sort (fn [^java.io.File f1 ^java.io.File f2]
                 (pos? (.compareTo (.getName f1) (.getName f2)))))
         (map #(in/parse-file % post-dir))
         (map #(route/apply-route % route))
         (map #(assoc-in  % [:url] (post-path->url (:path %)))))))

(defn get-template-data
  [m]
  (let [route (get-route-without-blog)]
    (take-while
      (comp not nil?)
      (iterate
        #(if-let [layout-name (:layout %)]
           (let [file   (layout-file layout-name)
                 layout {:content (delay (slurp file))}]
             (route/apply-route layout route)
             ))
        m))))

(defn blog-config
  [conf]
  (let [dir (:watch-directory conf DEFAULT_TEMPLATE_DIR)
        post-dir-name   (-> conf :blog (:post-dir   DEFAULT_POST_DIR))
        layout-dir-name (-> conf :blog (:layout-dir DEFAULT_LAYOUT_DIR))]
    (assoc conf
           :post-dir   (file/join dir post-dir-name)
           :layout-dir (file/join dir layout-dir-name))))

(defn render-content
  [m]
  (let [tmpls (get-template-data m)
        info  (apply merge (reverse (map #(dissoc % :content) tmpls)))]
    (reduce
      (fn [res tmpl]
        (assoc res :content (-> tmpl :content force (render res))))
      info
      tmpls)))

(defn get-index-url
  )

(defn template-config
  [m]
  (let [posts (get-posts)
        [next prev] (if (post-file? (:file m))
                      (seq/neighbors #(= (:file m) (:file %)) posts)
                      ;; TODO: pagination
                      [nil nil])]
    (assoc
      m
      :prev prev
      :next next
      :posts posts
      :index-url (str (get-url-base)
                      (or (some-> *config* :blog :index-filename)
                          DEFAULT_INDEX_FILENAME))
      :path    (if (post-file? (:file m))
                 (change-post-path (:path m))
                 (:path m))
      )))

(defn -main
  [m]
  (binding [*config* (blog-config m)]
    (let [m   (template-config m)
          res (render-content m)]
      (assoc m :content (delay (:content res))))))
