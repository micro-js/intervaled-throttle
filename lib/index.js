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
  var now, timeout

  return throttled

  function throttled () {
    if (!timeoutID) {
      now = new Date()
      timeout = interval - (now - start) % interval
      throttled.next = now + timeout
      timeoutID = setTimeout(call, timeout)
    }
  }

  function call () {
    func()
    timeoutID = 0
    throttled.next = null
  }
}
