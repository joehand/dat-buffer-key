var test = require('tape')
var encoding = require('dat-encoding')

var bufKeyMaybe = require('.')

var keys = [
  {type: 'valid', key: 'a6848dd4f5515f70b4c20c484d7b348ce71f711d8f94b07d919f0acc068d165d'},
  {type: 'valid', key: 'dat://a6848dd4f5515f70b4c20c484d7b348ce71f711d8f94b07d919f0acc068d165d'},
  {type: 'valid', key: 'dat.land/a6848dd4f5515f70b4c20c484d7b348ce71f711d8f94b07d919f0acc068d165d'},
  {type: 'invalid', key: 'key-me-maybe'},
  {type: 'null', key: null}
]

test('keys maybe turn into buffers', function (t) {
  keys.forEach(function (key) {
    if (key.type === 'invalid') {
      t.throws(function () { bufKeyMaybe(key.key) }, 'invalid key throws error')
    } else if (key.type === 'valid') {
      t.ok(encoding.encode(bufKeyMaybe(key.key)), 'valid key is now valid buffer')
    } else {
      t.equal(bufKeyMaybe(key.key), null, 'null key is still null')
    }
  })
  t.end()
})
