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