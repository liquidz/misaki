; @layout  post
; @title   The quick brown fox
; @tag     tag2 tag3

(def ^:dynamic *max* 50)

(defn int->color [n]
    (letfn [(fmt [s] (if (next s) s (str "0" s)))]
      (apply str (repeat 3 (fmt (Integer/toHexString (- 255 (* (int (/ 255 *max*)) n))))))))

(defn make-paragraph [n s]
  [:p {:style (str "font-size: " n "px; color: #" (int->color n) ";")} s])


(ul
  (map
    #(make-paragraph % "The quick brown fox jumps over the lazy dog")
    (range 10 *max*)))
