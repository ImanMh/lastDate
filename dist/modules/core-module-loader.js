(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var models = {};

var makeRandomId = function makeRandomId () {
  return Math.floor(Math.random() * 1000000);
};

var defaultConfig = {
  visibleMonths: 1
};

module.exports = {
  
  createModel: function (conf) {
    var id = makeRandomId();
    
    models[id] = {
      id: id,
      config: $.extend(conf, defaultConfig),
      months: []
    };
    
    for (var i = 0; i < models[id].config.visibleMonths; i++)
      models[id].months.push({});
      
    return id;
  },
  
  getModel: function (id) {
    return models[id];
  }
  
};

},{}],2:[function(require,module,exports){
window.lastdateCore = require('./../lastdate-core');

},{"./../lastdate-core":1}]},{},[2])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcdXNlclxcRG9jdW1lbnRzXFxwdWJsaWNSZXBvc1xcbGFzdERhdGVcXG5vZGVfbW9kdWxlc1xcYnJvd3Nlci1wYWNrXFxfcHJlbHVkZS5qcyIsIkM6L1VzZXJzL3VzZXIvRG9jdW1lbnRzL3B1YmxpY1JlcG9zL2xhc3REYXRlL3NyYy9sYXN0ZGF0ZS1jb3JlLmpzIiwiQzovVXNlcnMvdXNlci9Eb2N1bWVudHMvcHVibGljUmVwb3MvbGFzdERhdGUvc3JjL21vZHVsZXMvZmFrZV81MmQ4MWU0YS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpfXZhciBmPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChmLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGYsZi5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJ2YXIgbW9kZWxzID0ge307XG5cbnZhciBtYWtlUmFuZG9tSWQgPSBmdW5jdGlvbiBtYWtlUmFuZG9tSWQgKCkge1xuICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMDAwMCk7XG59O1xuXG52YXIgZGVmYXVsdENvbmZpZyA9IHtcbiAgdmlzaWJsZU1vbnRoczogMVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIFxuICBjcmVhdGVNb2RlbDogZnVuY3Rpb24gKGNvbmYpIHtcbiAgICB2YXIgaWQgPSBtYWtlUmFuZG9tSWQoKTtcbiAgICBcbiAgICBtb2RlbHNbaWRdID0ge1xuICAgICAgaWQ6IGlkLFxuICAgICAgY29uZmlnOiAkLmV4dGVuZChjb25mLCBkZWZhdWx0Q29uZmlnKSxcbiAgICAgIG1vbnRoczogW11cbiAgICB9O1xuICAgIFxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbW9kZWxzW2lkXS5jb25maWcudmlzaWJsZU1vbnRoczsgaSsrKVxuICAgICAgbW9kZWxzW2lkXS5tb250aHMucHVzaCh7fSk7XG4gICAgICBcbiAgICByZXR1cm4gaWQ7XG4gIH0sXG4gIFxuICBnZXRNb2RlbDogZnVuY3Rpb24gKGlkKSB7XG4gICAgcmV0dXJuIG1vZGVsc1tpZF07XG4gIH1cbiAgXG59O1xuIiwid2luZG93Lmxhc3RkYXRlQ29yZSA9IHJlcXVpcmUoJy4vLi4vbGFzdGRhdGUtY29yZScpO1xyXG4iXX0=
