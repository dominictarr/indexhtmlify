# indexhtmlify

Wrap a js bundle in the minimum html to be browser runnable

```
# bundle and wrap
browserify client.js | indexhtmlify > index.html

# open in browser
open index.html
```

# add metadata tags

use [metadataify](https://github.com/rreusser/metadataify)

``` js
browserify client.js | indexhtmlify | metadataify --title "title foo bar"
```

## License

MIT
