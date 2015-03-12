# doubleclick.js

Adds double click functionality to `click` event listeners. 

## How to use

Include doubleclick.min.js in your project and add `doubleClick()` as the event listener.
The function takes an object as argument with 3 properties:

threshold      : [number | 300] - time to wait for the second click before singleClick is triggered
singleClick(ev): [fn]           - the function to run after a single click
doubleClick(ev): [fn]           - the function to run after a double click

```javascript
var config = {
  threshold: 200,
  singleClick: function (ev) { console.log('Single Click!!!'); },
  doubleClick: function (ev) { console.log('Double Click!!!'); }
};

document.querySelector('.element').addEventListener('click', doubleClick(config), false);
```

Or see the [demo here](http://jsfiddle.net/jillesme/4ae2owby/).
