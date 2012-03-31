![misaki logo](https://github.com/liquidz/misaki/raw/master/sample/public/img/logo.png)

misaki is a [Jekyll](https://github.com/mojombo/jekyll) inspired static site generator in Clojure.

**WARNING:** misaki is still alpha version.

## Example template

```clojure
;; Define template options here
; @layout  default
; @title   sample tempalte

;; You can define function
(defn h1 [s] [:h1 s])

(h1 (:title site))
[:p "Welcome to misaki world!"]

#-CLJ
(println "google-code-prettify highlight!")
CLJ
```

## Usage

### Run sample

```bash
git clone git://github.com/liquidz/misaki.git
cd misaki
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

[Wiki](https://github.com/liquidz/misaki/wiki)

## "misaki" means..

"misaki(美咲)" is woman's name in Japan, and it means "Bloom beautifully".

## License

Copyright (C) 2012 Masashi Iizuka([@uochan](http://twitter.com/uochan/)) 

Distributed under the Eclipse Public License, the same as Clojure. 

