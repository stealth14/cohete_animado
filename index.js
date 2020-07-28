var subida =0;
var bajada =0;

$(document).ready(function() {

	$(document).keydown(function(key) {
	
		var key = parseInt(key.which,10);// see URL at bottom
		if(key==38)
		{
			$('#rocket').animate({top: "-=40px"}, 'fast');
			console.log('subida')
			subida-=40;
		}
		if(key==40)
		{
			$('#rocket').animate({top: "+=40px"}, 'fast');
			bajada+=40;
		}
				
	});
	
	
});


$( "#animate" ).click(function() {

	console.log(`subida : ${subida}`);
	console.log(`bajada : ${bajada}`);

	
	var calc = 0;
	if(subida<0){
		calc+=subida*-1;
	}

	if(bajada>0){
		calc+=bajada*-1;
	}

	$( "#rocket" ).animate({
	  opacity: 0.25,
	  top: `+=${calc}`,
	}, 1000, function() {
	  // Animation complete.
	  subida = 0;
	  bajada = 0;
	});
  });