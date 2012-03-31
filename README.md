# 1hyde

1hyde is a [Jekyll](https://github.com/mojombo/jekyll) inspired static site generator in Clojure.

**WARNING:** 1hyde is still alpha version.

## Example template

```clojure
;; Define template options here
; @layout  default
; @title   sample tempalte

;; You can define function
(defn h1 [s] [:h1 s])

(h1 (:title site))
[:p "Welcome to 1hyde world!"]

#-CLJ
(println "google-code-prettify highlight!")
CLJ
```

## Usage

### Run sample

```bash
git clone git://github.com/liquidz/one-hyde.git
cd one-hyde
lein run sample
```
[http://localhost:8080](http://localhost:8080)

### Make your blog

```bash
cp -pir sample your-blog
vi your-blog/template/index.html.clj
lein run your-blog
```

## Document

[Wiki](https://github.com/liquidz/one-hyde/wiki)

## License

Copyright (C) 2012 Masashi Iizuka([@uochan](http://twitter.com/uochan/)) 
 
Distributed under the Eclipse Public License, the same as Clojure. 

