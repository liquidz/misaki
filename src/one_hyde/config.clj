(ns one-hyde.config
  "one-hyde: control configuration")

(def ^:dynamic *config-file* "_config.clj")
(defn load-config []
  (read-string (slurp *config-file*)))

(def ^:dynamic *config* (load-config))
; {{{
(def ^{:dynamic true, :doc "Public directory path. Compiled html is placed here."}
  *public-dir* (:public-dir *config*))
(def ^{:dynamic true, :doc "Template directory path."}
  *template-dir* (:template-dir *config*))
(def ^{:dynamic true, :doc "Posts placed directory name."}
  *posts* (:posts *config*))
(def ^{:dynamic true, :doc "Layouts placed directory path."}
  *layouts-dir* (str *template-dir* (:layouts *config*)))
(def ^{:dynamic true, :doc "Posts placed directory path."}
  *posts-dir* (str *template-dir* *posts*))
; }}}


