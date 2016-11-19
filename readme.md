# dat-buffer-key [![Travis](https://img.shields.io/travis/joehand/dat-buffer-key.svg?style=flat-square)](https://travis-ci.org/joehand/dat-buffer-key) [![npm](https://img.shields.io/npm/v/dat-buffer-key.svg?style=flat-square)](https://npmjs.org/package/dat-buffer-key)

Might return a Dat buffer key

* **valid string/buffer**: Returns a dat key as a buffer
* **invalid string**: Throws error
* **null**: Returns null

## Usage

```js
var bufKeyMaybe = require('dat-buffer-key')

var key = bufKeyMaybe(process.argv[2])

try {
  console.log('maybe a key: key valid or null', bufKeyMaybe(key))
} catch (e) {
  console.log('key not valid')
}
```
