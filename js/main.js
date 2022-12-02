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
				$('.logoHeader').css({'padding-top':'50px'})
				$('#brandAdds').css({'top':'-56px'})
				setTimeout(() => {
					$('#brandAdds').css({'top':'0'})
				}, 1000);
				$(window).bind('scroll', function() {
					if ( $(window).scrollTop() > 100 ) {
						$('#contentHome').css({'padding-top':'50px'})
						$('#brandAdds').css({'top':'0'})
						$('#logo').show();
					}else {
						$('#logo').hide();
						$('#contentHome').css({'padding-top':'50px'})
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


		let iframeTwitter = document.querySelector('.iframeTwitter');
		// let iframeTwitterDos = document.querySelector('.iframeTwitter')
		// console.log('Salida de iframeTwitter', iframeTwitter.classList.value )
		// let value = iframeTwitter.classList.value
		// switch (value) {
		// 	case 'iframeTwitter':
		// 		iframeTwitter.style.cssText = 'width:100%;height:700px;margin:1rem 10%';
		// 		break;
		
		// 	default:
		// 		break;
		// }
		// let width = iframeTwitter.offsetWidth;
		// let height = iframeTwitterDos
		// console.log('Salida de width--->', width)
		// console.log('Salida de height--->',height)

		let radio = document.querySelector('.radio')
		console.log('Radio',radio)
		radio.addEventListener('click', (e)=>{
			console.log('Hola')
			e.preventDefault()
			const windowFeatures = "left=100,top=100,width=800,height=600";
		   const handle = window.open("http://127.0.0.1:5501/radio.html", "mozillaWindow", windowFeatures);
		})
 });