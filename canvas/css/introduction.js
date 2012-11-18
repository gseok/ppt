var isfocus = { select:false, select2:false };

function seo() {
	isfocus.select = !isfocus.select;
}
function seo2() {
	isfocus.select2 = !isfocus.select2;
}

$(function() {
	// Deck initialization
	$.deck('.slide');

	// change theme style
	$('#style-themes').change(function() {
		$('#style-theme-link').attr('href', $(this).val());
	});

	// change transition style
	$('#transition-themes').change(function() {
		$('#transition-theme-link').attr('href', $(this).val());
	});

	// header bar view control
	$('html').mouseover(function(event) {
		if ( isfocus.select || isfocus.select2 ) {
			return ;
		}
		//console.log(event.clientY);
		if ( event.clientY < 32 ) {
			$('body > header').css('height','32px');
		} else {
			$('body > header').css('height','0px');
		}
	});
	$('html').mousedown(function(event) {
		isfocus.select = false;
		isfocus.select2 = false;
		if ( event.clientY < 32 ) {
			$('body > header').css('height','32px');
		} else {
			$('body > header').css('height','0px');
		}
	});
});