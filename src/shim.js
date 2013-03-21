
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