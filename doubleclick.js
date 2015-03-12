/* doubleClick v0.1 by Jilles Soeters */
var doubleClick = (function (config) {
  // delay before the "singleClick" event is called
  var timeout = config.threshold || 300;
  var singleFn = config.singleClick || function () {};
  var doubleFn = config.doubleClick || function () {};

  // click counter and interval container
  var clicked = 0, interval;

  function doubleClick (ev) {
    // if it's the first click, clear it after the [threshold]
    clicked === 0 && (setTimeout(function () {
      clicked = 0;
    }, timeout));
    clicked++;

    // if this is second click call doubleFn and pass in the click event
    // then clear the interval
    if (clicked % 2 === 0) {
      doubleFn.call(undefined, ev);
      !!interval && (clearInterval(interval));
    } else {
      // set the interval after the first click, if it doesn't get cleared call singelFn
      interval = setTimeout(function () { singleFn.call(undefined, ev); }, timeout);
    }
  }
  return doubleClick
});
