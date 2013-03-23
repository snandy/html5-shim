/*!
 * html5-shim.js v0.1.0
 * https://github.com/snandy/html5-shim
 * @snandy 2013-03-23 17:11:48
 *
 */
~function(window){

var $ = window.jQuery;
	
var scriptObj = $('script[shim]'),
	delayTime = scriptObj.attr('delay') || 10,
	shimData  = scriptObj.attr('shim').split('|'),
	html5Shim = {};
	
/**
 * HTML5 autofocus [input,textarea,button,select] attribute
 * 只允许一个元素添加autofocus，在DomReady后执行
 */
html5Shim.autofocus = function() {
	if (this === html5Shim) {
		$(function() {
			var firstFocusEl = $('input,textarea,button,select').filter('[autofocus]')[0];
			if (firstFocusEl) {
				firstFocusEl.focus()
			}
		})		
	} else {
		this[0].focus()
	}
};

/**
 * This attribute applies when the value of the type attribute is text, search, tel, url or email; otherwise it is ignored. 
 * IE10/Opera12/Safari5中获取到焦点时文字消失，Firefox/Chrome使用键盘输入时文字才消失
 */
html5Shim.placeholder = function() {
	function holder($el) {
		placeholderVal = $el.attr('placeholder');
		
		if (!placeholderVal) return;
		
		$el.css('color', '#aaa');
		$el.val(placeholderVal);
		
		$el.focus(function() {
			if ($el.val() === placeholderVal) {
				$el.val('');
				$el.css('color', '');
			}
		}).blur(function() {
			if ($el.val() === '') {
				$el.val(placeholderVal)
				$el.css('color', '#aaa');
			}
		})
	}
	if (this === html5Shim) {
		$(function() {
			$('input,textarea').filter('[placeholder]').each(function(i, el) {
				holder($(el))
			})
		})
	} else {
		holder(this)
	}

};
$.each(html5Shim, function(name, func) {
	$.fn[name] = func
});

function executeAll() {
	var method
	for (method in html5Shim) {
		html5Shim[method]()
	}
}

setTimeout(function() {
	if (shimData.length === 1 && shimData[0] === 'all') {
		executeAll()
	} else {
		$(shimData).each(function(i, method) {
			html5Shim[method]()
		})
	}	
}, delayTime);

// exports
window.html5Shim = html5Shim;

}(this);