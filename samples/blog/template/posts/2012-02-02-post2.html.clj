; @layout  post
; @title   The quick brown fox
; @tag     tag2 tag3

(def MAX 50)


(defn int->html-color [max-num n]
  (let [x (int (/ (* 255 n) max-num))
        s (Integer/toHexString (- 255 x))
        s (if (next s) s (str "0" s))]
    (str "#" s s s)))


(defn make-paragraph [n s]
  [:p {:style (str "font-size: " n "px; color: " (int->html-color MAX n) ";")} s])

(ul
  (map
    #(make-paragraph % "The quick brown fox jumps over the lazy dog")
    (range 10 MAX)))
