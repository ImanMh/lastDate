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
