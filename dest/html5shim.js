/*!
 * html5-shim.js v0.1.0
 * https://github.com/snandy/html5-shim
 * @snandy 2013-03-21 13:45:01
 *
 */
~function($){
	
var scriptObj = $('script[shim]'),
	shimData = scriptObj.attr('shim').split('|'),
	html5Shim = {};
	
/**
 * HTML5 autofocus [input,textarea,button,select] attribute
 * 只允许一个元素添加autofocus，在DomReady后执行
 */
html5Shim.autofocus = function() {
	$(function() {
		var firstFocusEl = $('input,textarea,button,select').filter('[autofocus]')[0];
		console.log(firstFocusEl.nodeName)
		if (firstFocusEl) {
			firstFocusEl.focus()
		}
	})
};

/**
 * This attribute applies when the value of the type attribute is text, search, tel, url or email; otherwise it is ignored. 
 * IE10/Opera12/Safari5中获取到焦点时文字消失，Firefox/Chrome使用键盘输入时文字才消失
 */
html5Shim.placeholder = function() {
	$(function() {
		$('input,textarea').filter('[placeholder]').each(function(i, el) {
			var $el = $(el);
			var placeholderVal = $el.attr('placeholder');
			
			if (!placeholderVal) return;
			
			$el.css('color', '#aaa');
			$el.val(placeholderVal);
			
			$el.focus(function() {
				$el.val('')
			}).blur(function() {
				$el.val(placeholderVal)
			})
		})
	})
};

function executeAll() {
	var method
	for (method in html5Shim) {
		html5Shim[method]()
	}
}
	
if (shimData.length === 1 && shimData[0] === 'all') {
	executeAll()
} else {
	$(shimData).each(function(i, method) {
		html5Shim[method]()
	})
}

}(jQuery);