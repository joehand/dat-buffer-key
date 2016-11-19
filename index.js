var encoding = require('dat-encoding')

module.exports = function (key) {
  return key
    ? typeof key === 'string'
      ? encoding.decode(key)
      : key
    : null
}
