; @layout  post
; @title   Change log

(h2 "0.2.3 beta")
(p "2012-09-29")
(ul [(list "Add `prev`, `next` site option to access previous/next post data."
           (ul ["Add misaki.util.seqence/get-prev-next function"
                "Add misaki.compiler.default.html.core/prev-next-post-link function"]))
     (list "Support using multiple compiler at the same time."
           (ul ["See document: [Switch Compiler](title: Switch Compiler)"]))
     "Add copy compiler to copy template file without any changes."
     "Support `:*` as compiler watching extension."
     (list "Add/Update utility functions"
           (ul [
                "Update misaki.util.sequence/find-first to handle lazy sequence."
                "Update misaki.util.file/has-extension? to handle all extension(*)."
                "Add misaki.util.file/normalize-extension."]))])
