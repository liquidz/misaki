(ns misaki.html.util
  "HTML Service Utilities"
  (:require
    [hiccup.page :as page]))

;; ## GitHub

(def ribbon-style
  {:left  "position: absolute; top: 0; left: 0; border: 0;"
   :right "position: absolute; top: 0; right: 0; border: 0;"})

(def ribbon-src
  {:left
     {:red    "https://s3.amazonaws.com/github/ribbons/forkme_left_red_aa0000.png"
      :green  "https://s3.amazonaws.com/github/ribbons/forkme_left_green_007200.png"
      :black  "https://s3.amazonaws.com/github/ribbons/forkme_left_darkblue_121621.png"
      :orange "https://s3.amazonaws.com/github/ribbons/forkme_left_orange_ff7600.png"
      :gray   "https://s3.amazonaws.com/github/ribbons/forkme_left_gray_6d6d6d.png"
      :white  "https://s3.amazonaws.com/github/ribbons/forkme_left_white_ffffff.png"}
   :right
     {:red    "https://s3.amazonaws.com/github/ribbons/forkme_right_red_aa0000.png"
      :green  "https://s3.amazonaws.com/github/ribbons/forkme_right_green_007200.png"
      :black  "https://s3.amazonaws.com/github/ribbons/forkme_right_darkblue_121621.png"
      :orange "https://s3.amazonaws.com/github/ribbons/forkme_right_orange_ff7600.png"
      :gray   "https://s3.amazonaws.com/github/ribbons/forkme_right_gray_6d6d6d.png"
      :white  "https://s3.amazonaws.com/github/ribbons/forkme_right_white_ffffff.png"}})

; =github-ribbon
(defn github-ribbon
  "Make github ribbon
      color   : red / green / black / orange / gray / white
      position: left / right"
  [href & {:keys [color position] :or {color :red, position :right}}]
  {:pre [(string? href) (keyword? color) (keyword? position)]}

  [:a {:href href}
   [:img {:style (get ribbon-style position)
          :alt "Fork me on GitHub"
          :src (get (get ribbon-src position) color)}]])


;; ## Twitter

; =tweet-button
(defn tweet-button
  "Make tweet button"
  [& {:keys [id label lang] :or {id "tweet_button", label "Tweet", lang "en"}}]
  [:div {:id id}
    [:a {:href "https://twitter.com/share"
         :class "twitter-share-button"
         :data-count "horizontal"
         :data-lang lang}
     label]
   (page/include-js "//platform.twitter.com/widgets.js")
   ])
