/*!
	jQuery #urlcolorup v1.0.3
	(c) 2013 Amit Merchant
	updated: 2013-08-19
	license: GNU LESSER GENERAL PUBLIC LICENSE
	http://amitmerchant1990.github.io/urlcolorup
*/
(function($) {
	$.fn.urlcolorup = function() {
		$(this).wrap('<div class="jqueryUrlcolorup"><div class="highlighter"></div></div>').unwrap().before('<div class="highlighter"></div>').wrap('<div class="typehead"></div></div>');
		$(this).addClass("theSelector");
		$(this).on("keyup", function() {
			var str = $(this).val();
			$(this).parent().parent().find(".highlighter").css("width",$(this).css("width"));
			str = str.replace(/\n/g, '<br>');
			
			/* Added support for ftp: and mailto: statements also by @thekrugers */
			str = str.replace(/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/,'<span class="url">$1</span>'); //added to support non-rpototype URLs
			str = str.replace(/(https?:\/\/[^\s<]+)/g,'<span class="url">$1</span>');
			str = str.replace(/(ftp:\/\/[^\s<]+)/g,'<span class="url">$1</span>');
			str = str.replace(/(mailto:[^\s<]+)/g,'<span class="url">$1</span>');
			
			$(this).parent().parent().find(".highlighter").html(str);
		});
		$(this).parent().prev().on('click', function() {
			$(this).parent().find(".theSelector").focus();
		});

  	};
})(jQuery);
