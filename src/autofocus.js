/**
 * HTML5 autofocus [input,textarea,button,select] attribute
 * 只允许一个元素添加autofocus，在DomReady后执行
 */
html5Shim.autofocus = function() {
	$(function() {
		var firstFocusEl = $('input,textarea,button,select').filter('[autofocus]')[0];
		if (firstFocusEl) {
			firstFocusEl.focus()
		}
	})
};
