[:p (:tag-name site)]
[:ul
 (for [post (:posts site)]
   [:li (:title post)])]
