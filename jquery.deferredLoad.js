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
			
			$('<img src="' + settings.loadingImage + '" />')
				.insertAfter($(this))
				.fadeIn('slow')
				.animate({opacity: 1.0}, settings.waitingTime, function() {
					$(this).load(url, callback)
						.fadeIn('slow');
				})
				.fadeOut('slow', 
					$(this).remove();
				)
		});	
	}

})( jQuery )