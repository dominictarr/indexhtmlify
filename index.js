#! /usr/bin/env node

var opts = require('optimist').argv

if(process.stdin.isTTY) {
  console.error('USAGE: browserify client.js | indexhtmlify --style style.css > index.html')
  process.exit(1)
}

var log = console.log
log('<!DOCTYPE html>')
log('<html>')
log('<head>')
log('<meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" name="viewport" />')
log('<meta charset=utf-8></head>')

if(opts.style) {
  log('<style>')
  log(require('fs').readFileSync(opts.style, 'utf8'))
  log('</style>')
}

log('<body></body>')
log('<script language=javascript>')
process.stdin.pipe(process.stdout)
process.on('exit', function () {
  log('</script>')
  log('</html>')
})
