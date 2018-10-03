$(document).ready(function(){

   $(window).scroll(function() {    
    var scroll = $(window).scrollTop();
	    if (scroll > 70 ) {
	        $(".menu-top").removeClass('bg-light').addClass('bg-after').addClass('neon');
	        console.log('scrolling up !');

	    }else{
	    	$(".menu-top").removeClass('bg-after').removeClass('neon').addClass('bg-light');
	    	console.log('scrolling down !');
	    	console.log(scroll);
	    }
	});

});

