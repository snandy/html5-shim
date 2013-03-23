
~function(window){

var $ = window.jQuery;
	
var scriptObj = $('script[shim]'),
	delayTime = scriptObj.attr('delay') || 10,
	shimData  = scriptObj.attr('shim').split('|'),
	html5Shim = {};
	