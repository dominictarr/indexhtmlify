#! /usr/bin/env node

var opts = require('optimist').argv
var through = require('through2');

function indexhtmlify(opts) {
    opts = opts || {}

    var s = through(function onwrite(chunk, enc, cb) {
        s.push(chunk)
        cb()
    }, function onend(cb) {
        s.push('</script>\n')
        s.push('</html>\n')
        cb()
    })

    s.push('<!DOCTYPE html>\n')
    if(opts.appcache) {
      var appcache = opts.appcache === true ? './manifest.appcache' : opts.appcache
      s.push('<html manifest=' + JSON.stringify(appcache) + '>')
    }
    else
      s.push('<html>\n')
    s.push('<head>\n')
    s.push('<title>' + (opts.title || '---') + '</title>\n')
    s.push('<meta content="width=device-width, initial-scale=1.0, ' +
        'maximum-scale=1.0, user-scalable=0" name="viewport" />\n')
    s.push('<meta charset=utf-8></head>\n')

    if (opts.style) {
        s.push('<style>\n')
        s.push(require('fs').readFileSync(opts.style, 'utf8'))
        s.push('</style>\n')
    }

    s.push('<body></body>\n')
    s.push('<script>\n')

    return s
}

module.exports = indexhtmlify

if (require.main === module) {
    if(process.stdin.isTTY) {
        console.error('USAGE: browserify client.js | indexhtmlify ' +
            '--style style.css --title title > index.html')
        process.exit(1)
    }

    process.stdin
        .pipe(indexhtmlify(opts))
        .pipe(process.stdout)
}

