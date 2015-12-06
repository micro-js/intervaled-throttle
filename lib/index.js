/**
 * Expose throttleIntervaled
 */

module.exports = throttle['default'] = throttle

/**
 * Intervaled throttle.
 * @param  {Number} interval Interval in milliseconds.
 * @param  {Function} fn Throttle function.
 * @return {Function}
 */

function throttle (interval, fn) {
  var self = this
  var timeoutID = 0
  var start = +new Date()
  var now, timeout

  return throttled

  function throttled () {
    if (!timeoutID) {
      now = +new Date()
      timeout = interval - (now - start) % interval
      throttled.next = now + timeout
      timeoutID = setTimeout(call, timeout)
    }
  }

  function call () {
    fn.call(self)
    timeoutID = 0
    throttled.next = null
  }
}
