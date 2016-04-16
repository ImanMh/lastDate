(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
;(function(defaults, $, window, document, undefined) {

	'use strict';

	$.extend({
		lastdateSetup : function(options) {
			return $.extend(defaults, options);
		}
	}).fn.extend({
		lastdate : function(options) {

      if (typeof options === 'string')
        return $.fn.lastdate.prototype[options](this, defaults);
        
			options = $.extend({}, defaults, options);

			return $(this).each(function() {
				
				// Plugin logic
				// Calling the function:
				// jQuery(selector).pluginName(options);
			});
		}
	});
  
  //private functions
  $.fn.lastdate.prototype.testCommand = function testCommand (el, options) {
    return true;
  };
  
  $.fn.lastdate.prototype.getOptions = function getOptions (el, options) {
    return options;
  };
  
})({
	property : "xxxx",
	otherProperty : "value",
  testTrue: true
}, jQuery, window, document);

},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcdXNlclxcRG9jdW1lbnRzXFxwdWJsaWNSZXBvc1xcbGFzdERhdGVcXG5vZGVfbW9kdWxlc1xcYnJvd3Nlci1wYWNrXFxfcHJlbHVkZS5qcyIsIkM6L1VzZXJzL3VzZXIvRG9jdW1lbnRzL3B1YmxpY1JlcG9zL2xhc3REYXRlL3NyYy9mYWtlX2I2ZjE2MmRlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKX12YXIgZj1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwoZi5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxmLGYuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiOyhmdW5jdGlvbihkZWZhdWx0cywgJCwgd2luZG93LCBkb2N1bWVudCwgdW5kZWZpbmVkKSB7XHJcblxyXG5cdCd1c2Ugc3RyaWN0JztcclxuXHJcblx0JC5leHRlbmQoe1xyXG5cdFx0bGFzdGRhdGVTZXR1cCA6IGZ1bmN0aW9uKG9wdGlvbnMpIHtcclxuXHRcdFx0cmV0dXJuICQuZXh0ZW5kKGRlZmF1bHRzLCBvcHRpb25zKTtcclxuXHRcdH1cclxuXHR9KS5mbi5leHRlbmQoe1xyXG5cdFx0bGFzdGRhdGUgOiBmdW5jdGlvbihvcHRpb25zKSB7XHJcblxyXG4gICAgICBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdzdHJpbmcnKVxyXG4gICAgICAgIHJldHVybiAkLmZuLmxhc3RkYXRlLnByb3RvdHlwZVtvcHRpb25zXSh0aGlzLCBkZWZhdWx0cyk7XHJcbiAgICAgICAgXHJcblx0XHRcdG9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdHMsIG9wdGlvbnMpO1xyXG5cclxuXHRcdFx0cmV0dXJuICQodGhpcykuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHQvLyBQbHVnaW4gbG9naWNcclxuXHRcdFx0XHQvLyBDYWxsaW5nIHRoZSBmdW5jdGlvbjpcclxuXHRcdFx0XHQvLyBqUXVlcnkoc2VsZWN0b3IpLnBsdWdpbk5hbWUob3B0aW9ucyk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG4gIFxyXG4gIC8vcHJpdmF0ZSBmdW5jdGlvbnNcclxuICAkLmZuLmxhc3RkYXRlLnByb3RvdHlwZS50ZXN0Q29tbWFuZCA9IGZ1bmN0aW9uIHRlc3RDb21tYW5kIChlbCwgb3B0aW9ucykge1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfTtcclxuICBcclxuICAkLmZuLmxhc3RkYXRlLnByb3RvdHlwZS5nZXRPcHRpb25zID0gZnVuY3Rpb24gZ2V0T3B0aW9ucyAoZWwsIG9wdGlvbnMpIHtcclxuICAgIHJldHVybiBvcHRpb25zO1xyXG4gIH07XHJcbiAgXHJcbn0pKHtcclxuXHRwcm9wZXJ0eSA6IFwieHh4eFwiLFxyXG5cdG90aGVyUHJvcGVydHkgOiBcInZhbHVlXCIsXHJcbiAgdGVzdFRydWU6IHRydWVcclxufSwgalF1ZXJ5LCB3aW5kb3csIGRvY3VtZW50KTtcclxuIl19
