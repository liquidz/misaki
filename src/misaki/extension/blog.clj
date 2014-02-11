(ns misaki.extension.blog
  (:require
    [misaki.config :refer [*config*]]
    ;[misaki.route  :refer [load-extension]]
    [misaki.input.watch-directory :as in]
    [misaki.route  :as route]
    [misaki.util.file :as file]
    [cuma.core :refer [render]]
    [clojure.java.io :as io]
    [clojure.string :as str]))

(def DEFAULT_TEMPLATE_DIR   ".")
(def DEFAULT_URL_BASE       "/")
(def DEFAULT_POST_DIR       "posts")
(def DEFAULT_LAYOUT_DIR     "layouts")
(def DEFAULT_INDEX_FILENAME "")

(defn get-route-without-blog
  []
  (remove (set [:blog]) (:applying-route *config*)))

(defn- change-post-path
  [path]
  (let [post-dir (or (-> *config* :blog :post-dir) DEFAULT_POST_DIR)]
    (apply str (drop (inc (count post-dir)) path))))

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
             ;(reduce (fn [res f] (f res)) layout ff)
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

(defn get-neighbors
  [pred ls]
  (loop [pairs (partition 3 1 (concat [nil] ls [nil]))]
    (if (seq pairs)
      (let [[prev cur next] (first pairs)]
        (if (pred cur)
          [prev next]
          (recur (rest pairs))))
      [nil nil])))

(defn -main
  [m]
  (binding [*config* (blog-config m)]

    (let [route (get-route-without-blog)
          posts (get-posts)
          m     (assoc m
                       :posts posts
                       :index-url (str (get-url-base)
                                       (or (some-> *config* :blog :index-filename)
                                           DEFAULT_INDEX_FILENAME))
                       )
          tmpls (get-template-data m)
          info  (apply merge (reverse (map #(dissoc % :content) tmpls)))
          res   (reduce
                  (fn [res tmpl]
                    (assoc res :content (-> tmpl :content (render res))))
                  info
                  (map #(assoc % :content (force (:content %))) tmpls))]

      (assoc m
             :path    (if (post-file? (:file m))
                        (change-post-path (:path m))
                        (:path m))
             :content (delay (:content res)))
      )))

