![misaki logo](https://github.com/liquidz/misaki/raw/master/samples/blog/public/img/logo.png)

[![Build Status](https://secure.travis-ci.org/liquidz/misaki.png?branch=master)](http://travis-ci.org/liquidz/misaki)

misaki is a [Jekyll](https://github.com/mojombo/jekyll) inspired static site generator in Clojure.

## What's new in Beta

 * Clojurescript
 * Output customize
 * Viewable with smartphone
 * Expand built-in functions

## Demo

 * [Blog demo](http://liquidz.github.com/misaki/demo/blog/)
 * [Presentation demo](http://liquidz.github.com/misaki/demo/presentation/)

## Example template

```clojure
;; Define template options here
; @layout  default
; @title   sample template

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
$ git clone git://github.com/liquidz/misaki.git
$ cd misaki
$ lein run samples/blog
```

> If you get "java.lang.AssertionError: Assert failed: Can't recur here",
> please execute `rm -rf classes/cljs` to remove cljs classes, and run sample again.

Access [http://localhost:8080](http://localhost:8080) to check sample.

### Make your blog

```bash
$ cp -pir samples/blog your-blog
$ lein run your-blog
```

While running local server, updated template file is compiled automatically.

```bash
$ vi your-blog/_template/index.html.clj
```

## Document

[http://liquidz.github.com/misaki/](http://liquidz.github.com/misaki/)

## "misaki" means..

"misaki(美咲)" is woman's name in Japan, and it means "Bloom beautifully".

## License

Copyright (C) 2013 Masashi Iizuka([@uochan](http://twitter.com/uochan/)) 

Distributed under the Eclipse Public License, the same as Clojure. 

