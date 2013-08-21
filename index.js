#! /usr/bin/env node

if(process.stdin.isTTY) {
  console.error('USAGE: browserify client.js | indexhtmlify > index.html')
  process.exit(1)
}

var log = console.log
log('<!DOCTYPE html>')
log('<html>')
log('<head>')
log('<meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" name="viewport" />')
log('<meta charset=utf-8></head>')
log('<body></body>')
log('<script language=javascript>')
process.stdin.pipe(process.stdout)
process.on('exit', function () {
  log('</script>')
  log('</html>')
})
