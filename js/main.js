$(document).ready(function(){

   $(window).scroll(function() {    
    var scroll = $(window).scrollTop();
	    if (scroll > 70 ) {
	        $(".menu-top").removeClass('bg-white').addClass('bg-after').addClass('neon');
	        // console.log('scrolling up !');

	    }else{
	    	$(".menu-top").removeClass('bg-after').removeClass('neon').addClass('bg-white');
	    	// console.log('scrolling down !');
	    	// console.log(scroll);
	    }
	});

   $(document).ready(function() {
		$("#top").click(function(event) {
		    event.preventDefault();
		    $("html, body").animate({ scrollTop: 0 }, "slow");
		    return false;
		});
	});

});
   
