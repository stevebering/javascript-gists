(function( $ ){
	
	$.fn.deferredLoad = function( url, option, callback ) {
	
		var settings = {
			'loadingImage' 		: '/content/img/ajax_loading_bar.gif',
			'waitingTime'		: 0,
			'repeatEvery'		: 0,
		}
		
		return this.each(function() {
			
			if ( options ) {
				$.extend( settings, options );
			}
		
			this
				.html('<img src="' + settings.loadingImage + '" />')
				.queue()
				.delay(settings.waitingTime)
				.load(url, callback);
		});	
	}

})( jQuery )