(function($){
	$(document).ready(function(){

		// Top bar hide action 
		$("a#top-bar").click(function(){
			$("img#top-bar-img").hide();
			return false;
		});

		// Site main banner 
		$('#site-main-banner').owlCarousel({
			items : 1,
			loop : true, 
			autoplay: true

		});

		// Site main banner 
		$('#product-slider-best-seller').owlCarousel({
			items : 5,
			loop : true, 
			margin: 10,
			autoplay: true


		});

		// Site main banner 
		$('#product-slider-water-fish').owlCarousel({
			items : 4,
			loop : true,
			margin: 10,
			autoplay: true
			

		});


		// Site main banner 
		$('#product-slider-s-offer').owlCarousel({
			items : 2,
			loop : true,
			margin: 10,
			autoplay: true
			

		});

		// Site main banner 
		$('.brands-slider').owlCarousel({
			items : 5,
			loop : true,
			margin: 10,
			autoplay: true
			

		});


		// Site main banner 
		$('#related-product').owlCarousel({
			items : 4,
			loop : true,
			margin: 10,
			autoplay: true
			

		});
		
		
		

		

		
		

	});
})(jQuery)