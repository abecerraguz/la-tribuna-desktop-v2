$(function(){

	let widtWindow = $(window).width();
	mediaQuery( widtWindow  )

	function mediaQuery( value ){
		console.log('Salida de value',value)
		switch ( true ){
			
			case  ( value == 1366 ):
				console.log('Mierda uno')
				$('#contentPost').css({'padding-top':'434px'})
				$(window).bind('scroll', function() {
					if ( $(window).scrollTop() > 100 ) {
						$('#contentHome').css({'padding-top':'387px'})
						$('#contentPost').css({'padding-top':'434px'})
						$('#brandAdds').css({'top':'-326px'})
						$('#logo').show();
					}else {
						$('#contentHome').css({'padding-top':'460px'})
						$('#brandAdds').css({'top':'0'})
						$('#logo').hide();
					}
				})
			break;
			case  ( value >= 1366 && value <= 1440 ):
				console.log('Mierda dos')
				$('#contentPost').css({'padding-top':'434px'})
				$(window).bind('scroll', function() {
					if ( $(window).scrollTop() > 100 ) {
						$('#contentHome').css({'padding-top':'387px'})
						$('#contentPost').css({'padding-top':'434px'})
						$('#brandAdds').css({'top':'-199px'})
						$('#logo').show();
					}else {
						$('#contentHome').css({'padding-top':'460px'})
						$('#brandAdds').css({'top':'0'})
						$('#logo').hide();
					}
				})
			break;
			case  ( value > 1440 && value <= 1792 ):
				console.log('Mierda tres')
				$('.logoHeader').css({'padding-top':'300px'})
				$(window).bind('scroll', function() {
					if ( $(window).scrollTop() > 100 ) {
						
						// $('#contentHome').css({'padding-top':'298px'})
						$('#brandAdds').css({'top':'-199px'})
						$('#logo').show();
					}else {
						
						$('#logo').hide();
						// $('#contentHome').css({'padding-top':'298px'})
						$('#brandAdds').css({'top':'0'})
					}
				})
			break;
			case ( value == 768 ):
				console.log('Igual 768-->')
				console.log($(window).width())
				$('#contentPost').css({'padding-top':'460px'})
				$(window).bind('scroll', function() {
					if ( $(window).scrollTop() > 100 ) {
						$('#contentHome').css({'padding-top':'387px'})
						$('#contentPost').css({'padding-top':'345px'})
						$('#brandAdds').css({'top':'-200px'})
						$('#logo').show();
					}else {
						$('#contentHome').css({'padding-top':'460px'})
						$('#brandAdds').css({'top':'0'})
						// $('#logo').hide();
					}
				})
				break;
			
			default:
				break;
		}
	}
	

	//  if($(window).width() <= 768){

	// 	// INICIAMOS EL CONTENTPOST
	// 	$('#contentPost').css({
	// 		'padding-top':'345px'
	// 	})
		
	// 	$(window).bind('scroll', function() {

	// 		if ( $(window).scrollTop() > 100 ) {
	// 			$('#contentHome').css({
	// 				'padding-top':'387px'
	// 			})
	// 			$('#contentPost').css({
	// 				'padding-top':'345px'
	// 			})
	// 			$('#brandAdds').css({
	// 				'top':'-200px'
	// 			})
	// 			$('#logo').show();
	// 		}else {
	// 			$('#contentHome').css({
	// 				'padding-top':'460px'
	// 			})
	// 			$('#brandAdds').css({
	// 				'top':'0'
	// 			})
	// 			// $('#logo').hide();
	// 		}

	// 	})
		
	//  }else{
	// 	$('#contentHome').css({
	// 		'padding-top':'460px'
	// 	})
	// 	console.log('Salida mayor que 768---->')
	// 	$(window).bind('scroll', function() {

	// 		if ( $(window).scrollTop() > 100 ) {

	// 			$('#contentHome').css({
	// 				'padding-top':'265px'
	// 			})

	// 			$('#contentPost').css({
	// 				'padding-top':'460px'
	// 			})

	// 			$('#brandAdds').css({
	// 				'top':'-349px'
	// 			})

	// 			$('#logo').show();
	// 		}else {
	// 			$('#contentHome').css({
	// 				'padding-top':'460px'
	// 			})
	// 			$('#brandAdds').css({
	// 				'top':'0'
	// 			})
	// 			// $('#logo').hide();
	// 		}

	// 	})
	//  }

	 $("#top").hide();
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('#top').first().fadeIn("slow");

            } else {
                $('#top').fadeOut("slow");
            }
        });

        $('#top').click(function () {
            $('body,html').animate({scrollTop: 0}, 800);
            // return false;
        });
 });