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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9JbWFuL0RvY3VtZW50cy9yZXBvcy9sYXN0RGF0ZS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiL1VzZXJzL0ltYW4vRG9jdW1lbnRzL3JlcG9zL2xhc3REYXRlL3NyYy9mYWtlXzFlOGJlMTNmLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKX12YXIgZj1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwoZi5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxmLGYuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiOyhmdW5jdGlvbihkZWZhdWx0cywgJCwgd2luZG93LCBkb2N1bWVudCwgdW5kZWZpbmVkKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXG5cdCQuZXh0ZW5kKHtcblx0XHRsYXN0ZGF0ZVNldHVwIDogZnVuY3Rpb24ob3B0aW9ucykge1xuXHRcdFx0cmV0dXJuICQuZXh0ZW5kKGRlZmF1bHRzLCBvcHRpb25zKTtcblx0XHR9XG5cdH0pLmZuLmV4dGVuZCh7XG5cdFx0bGFzdGRhdGUgOiBmdW5jdGlvbihvcHRpb25zKSB7XG5cbiAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ3N0cmluZycpXG4gICAgICAgIHJldHVybiAkLmZuLmxhc3RkYXRlLnByb3RvdHlwZVtvcHRpb25zXSh0aGlzLCBkZWZhdWx0cyk7XG4gICAgICAgIFxuXHRcdFx0b3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBkZWZhdWx0cywgb3B0aW9ucyk7XG5cblx0XHRcdHJldHVybiAkKHRoaXMpLmVhY2goZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFxuXHRcdFx0XHQvLyBQbHVnaW4gbG9naWNcblx0XHRcdFx0Ly8gQ2FsbGluZyB0aGUgZnVuY3Rpb246XG5cdFx0XHRcdC8vIGpRdWVyeShzZWxlY3RvcikucGx1Z2luTmFtZShvcHRpb25zKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fSk7XG4gIFxuICAvL3ByaXZhdGUgZnVuY3Rpb25zXG4gICQuZm4ubGFzdGRhdGUucHJvdG90eXBlLnRlc3RDb21tYW5kID0gZnVuY3Rpb24gdGVzdENvbW1hbmQgKGVsLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG4gIFxuICAkLmZuLmxhc3RkYXRlLnByb3RvdHlwZS5nZXRPcHRpb25zID0gZnVuY3Rpb24gZ2V0T3B0aW9ucyAoZWwsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gb3B0aW9ucztcbiAgfTtcbiAgXG59KSh7XG5cdHByb3BlcnR5IDogXCJ4eHh4XCIsXG5cdG90aGVyUHJvcGVydHkgOiBcInZhbHVlXCIsXG4gIHRlc3RUcnVlOiB0cnVlXG59LCBqUXVlcnksIHdpbmRvdywgZG9jdW1lbnQpO1xuIl19
