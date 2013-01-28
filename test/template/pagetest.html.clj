; @layout default
; @title  index

[:h1 (str (:title site) (:page site))]
(map :title (:posts site))

(if (:prev-page site) (link "prev" (:prev-page site)))
(if (:next-page site) (link "next" (:next-page site)))
