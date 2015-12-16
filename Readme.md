
# throttle-intervaled

[![Build status][travis-image]][travis-url]
[![Git tag][git-image]][git-url]
[![NPM version][npm-image]][npm-url]
[![Code style][standard-image]][standard-url]

A throttle that only fires on an interval.

## Installation

    $ npm install @f/throttle-intervaled

## Usage

```js
var throttle = require('@f/throttle-intervaled')

var hello = throttle(500, function () {
  console.log('Hello world')
})

// will log "hello world" once, 500 ms from first call
hello()
hello()

```

## API

### throttleIntervaled(interval, fn)

- `interval` - interval
- `fn` - function to throttle

**Returns:** throttled `fn`

## License

MIT

[travis-image]: https://img.shields.io/travis/micro-js/throttle-intervaled.svg?style=flat-square
[travis-url]: https://travis-ci.org/micro-js/throttle-intervaled
[git-image]: https://img.shields.io/github/tag/micro-js/throttle-intervaled.svg
[git-url]: https://github.com/micro-js/throttle-intervaled
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat
[standard-url]: https://github.com/feross/standard
[npm-image]: https://img.shields.io/npm/v/@f/throttle-intervaled.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@f/throttle-intervaled
