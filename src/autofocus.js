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
