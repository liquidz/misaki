(ns one-hyde.config
  "one-hyde: control configuration")

(def ^:dynamic *base-dir* "./")

(def ^:dynamic *config-file* "_config.clj")
(defn load-config []
  (read-string (slurp (str *base-dir* *config-file*))))

(declare ^{:dynamic true, :doc "Public directory path. Compiled html is placed here."}
  *public-dir*)
(declare ^{:dynamic true, :doc "Template directory path."}
  *template-dir*)
(declare ^{:dynamic true, :doc "Posts placed directory name."}
  *posts*)
(declare ^{:dynamic true, :doc "Layouts placed directory path."}
  *layouts-dir*)
(declare ^{:dynamic true, :doc "Posts placed directory path."}
  *posts-dir*)

(defmacro with-config [& body]
  `(let [config# (load-config)]
     (binding [*public-dir*   (:public-dir config#)
               *template-dir* (:template-dir config#)
               *posts*        (:posts config#)
               *layouts-dir*  (str (:template-dir config#)
                                   (:layouts config#))
               *posts-dir*    (str (:template-dir config#)
                                   (:posts config#))]
       ~@body)))


;(def ^:dynamic *config* (load-config))
;; {{{
;(def ^{:dynamic true, :doc "Public directory path. Compiled html is placed here."}
;  *public-dir* (:public-dir *config*))
;(def ^{:dynamic true, :doc "Template directory path."}
;  *template-dir* (:template-dir *config*))
;(def ^{:dynamic true, :doc "Posts placed directory name."}
;  *posts* (:posts *config*))
;(def ^{:dynamic true, :doc "Layouts placed directory path."}
;  *layouts-dir* (str *template-dir* (:layouts *config*)))
;(def ^{:dynamic true, :doc "Posts placed directory path."}
;  *posts-dir* (str *template-dir* *posts*))
;; }}}


