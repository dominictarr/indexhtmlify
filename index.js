#! /usr/bin/env node

var log = console.log
log('<!DOCTYPE html>')
log('<html>')
log('<head><meta charset=utf-8></head>')
log('<body></body>')
log('<script language=javascript>')
process.stdin.pipe(process.stdout)
process.on('exit', function () {
  log('</script>')
  log('</html>')
})
