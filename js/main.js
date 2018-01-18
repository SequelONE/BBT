jQuery(document).ready(function(){

	var back_to_top_button = ['<div class="scrolltop"><a href="#top" class="back-to-top"><i class="fa fa-arrow-circle-up" aria-hidden="true"></i></a></div>'].join("");
	jQuery("body").append(back_to_top_button)

	jQuery(".back-to-top").hide();

	jQuery(function () {
		jQuery(window).scroll(function () {
			if (jQuery(this).scrollTop() > 100) {
				jQuery('.back-to-top').fadeIn();
			} else {
				jQuery('.back-to-top').fadeOut();
			}
		});

		jQuery('.back-to-top').click(function () {
			jQuery('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});
	});

	jQuery('.offCanvasClose li.close').click(function(){
		jQuery('#offcanvasmenu').offcanvas('hide');
	});
	
	jQuery('.bxslider').bxSlider({
		mode: 'horizontal',
		moveSlides: 1,
		slideMargin: 40,
		infiniteLoop: true,
		slideWidth: 1200,
		minSlides: 1,
		maxSlides: 1,
		speed: 800,
	});
	
	jQuery('.slider-block4').bxSlider({
		mode: 'horizontal',
		moveSlides: 1,
		slideMargin: 40,
		infiniteLoop: true,
		slideWidth: 1200,
		minSlides: 1,
		maxSlides: 1,
		speed: 800,
	});
});
jQuery(function () {
	
	var note = jQuery('.note'),
		ts = new Date(2019, 0, 1),
		newYear = true;
	
	if((new Date()) > ts){
		ts = (new Date()).getTime() + 10*24*60*60*1000;
		newYear = false;
	}
		
	jQuery('.countdown').countdown({
		timestamp	: ts,
		callback	: function(days, hours, minutes, seconds){
			
			var message = "";
			
			message += "Дней: " + days +", ";
			message += "часов: " + hours + ", ";
			message += "минут: " + minutes + " и ";
			message += "секунд: " + seconds + " <br />";
			
			if(newYear){
				message += "До открытия сайта осталось!";
			}
			else {
				message += "осталось до момента через 10 дней!";
			}
			
			note.html(message);
		}
	});
	
    jQuery("[data-time]").each(function (i, e) {
        jQuery(this).html(moment($(this).data('time'), "YYYY-MM-DD HH:mm:ss").fromNow());
    })

    //load_init();
    jQuery('[data-toggle="tooltip"]').tooltip();
});
jQuery('ul.navbar-nav li.dropdown').hover(function() {
	jQuery(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
}, function() {
	jQuery(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
});

function footorGoBottom() {
    var correctTop = jQuery(window).innerHeight() - jQuery('footer').prev().outerHeight(true) - jQuery('footer').prev().offset().top - jQuery('footer').outerHeight(true);
    if (correctTop > 0) {
        jQuery('footer').css({
            top: correctTop
        });
    }
}
footorGoBottom();
jQuery(window).on('resize', footorGoBottom);