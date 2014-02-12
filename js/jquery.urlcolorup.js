/*!
	jQuery #urlcolorup v0.1
	(c) 2013 Amit Merchant
	updated: 2013-08-19
	license: GNU LESSER GENERAL PUBLIC LICENSE
	http://amitmerchant1990.github.io/urlcolorup
*/
(function($) {
	$.fn.urlcolorup = function() {
		$(this).wrap('<div class="jqueryUrlcolorup"><div class="highlighter"></div></div>').unwrap().before('<div class="highlighter"></div>').wrap('<div class="typehead"></div></div>');
		$(this).addClass("theSelector");
		//$(this).autosize({append: "\n"});
		$(this).on("keyup", function() {
			var str = $(this).val();
			$(this).parent().parent().find(".highlighter").css("width",$(this).css("width"));
			str = str.replace(/\n/g, '<br>');
			
			/* I'm not sure what this match was trying to do, so I'm taking it out
			if(!str.match(/#([a-zA-Z0-9]+)#/g)) {
				str = str.replace(/(https?:\/\/[^\s]+)/g,'<span class="url">$1</span>');
			}else{
				str = str.replace(/(https?:\/\/[^\s]+)(https?:\/\/[^\s]+)/g,'<span class="url">$1</span>');
			}
			And putting in the following three lines instead.
			Now the plugin handles ftp and mailto URLs as well. */
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
