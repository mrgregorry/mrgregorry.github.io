$(document).ready(function(){

	$(window).on('load', function () {
	    var $preloader = $('#page-preloader'),
	        $spinner   = $preloader.find('.spinner');
	    $preloader.delay(2500).fadeOut('slow');
	});

	var iScrollPos = 0;

   	$(window).scroll(function() { 
  	var scroll = $(this).scrollTop();
	    if (scroll > iScrollPos ) {
	        
	        $(".menu-top").removeClass('bg-white').addClass('bg-after');
	        console.log('scrolling down !');

	    }else{
	    	
	    	$(".menu-top").removeClass('bg-after').addClass('bg-white');
	    	console.log('scrolling up !');
	    }
	    iScrollPos = scroll;
	});

   $(document).ready(function() {
		$("#top").click(function(event) {
		    event.preventDefault();
		    $("html, body").animate({ scrollTop: 0 }, "slow");
		    return false;
		});
	});
});
   
