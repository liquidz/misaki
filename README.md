# 1hyde

1hyde is a [Jekyll](https://github.com/mojombo/jekyll) inspired static site generator written by Clojure.

**WARNING:** 1hyde is still alpha version.

## Usage

```bash
git clone git://github.com/liquidz/one-hyde.git
cd one-hyde
lein run
open http://localhost:8080
```

If you want to only compile templates, run following command.

```bash
lein run compile
```

### Directory

 * template/_layout

    Layout directory (e.g., default.clj, post.clj)

 * template/_posts

    Posts file directory. Posts must be named like "YYYY-MM-DD-title.html.clj"

 * public

    Public directory. All compiled templates are putted into this directory.

 * _config.clj

    1hyde configuration file. Above directory names are defined in this file.


## License

Copyright (C) 2012 Masashi Iizuka([@uochan](http://twitter.com/uochan/)) 
 
Distributed under the Eclipse Public License, the same as Clojure. 

