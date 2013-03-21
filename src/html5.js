
~function($){
	
var scriptObj = $('script[shim]'),
	shimData = scriptObj.attr('shim').split('|'),
	html5Shim = {};
	