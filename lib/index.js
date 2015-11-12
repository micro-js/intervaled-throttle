/**
 * Expose throttle
 */

module.exports = throttle

/**
 * Intervaled throttle.
 * @param  {Function} func Throttle function.
 * @param  {Number} interval Interval in milliseconds.
 * @return {Function}
 */

function throttle (func, interval) {
  var timeoutID = 0
  var start = +new Date()
  return function throttled () {
    if (!timeoutID) {
      timeoutID = setTimeout(call, interval - (new Date() - start) % interval)
    }
  }

  function call () {
    func()
    timeoutID = 0
  }
}
