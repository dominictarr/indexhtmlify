#! /usr/bin/env node

var log = console.log
log('<!DOCTYPE html>')
log('<html>')
log('<body></body>')
log('<script language=javascript>')
process.stdin.pipe(process.stdout)
process.on('exit', function () {
  log('</script>')
  log('</html>')
})
