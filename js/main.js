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



		let radio = document.querySelector('.radio')
		console.log('Radio',radio)
		radio.addEventListener('click', (e)=>{
			e.preventDefault()
			const windowFeatures = "left=100,top=100,width=600,height=600";
		   const handle = window.open("http://127.0.0.1:5501/radio.html", "mozillaWindow", windowFeatures);
		})

	
	
 });

/* !responsiveiframe.js */
/* ---------------------------------------------------------------------- */

// function adjustIframes(){
//     $('iframe').each(function(){
//       var $this = $(this)
//           $this.css( {
//             'background': 'white',
//             'max-width': '658px',
// 			'max-height': '658px',
//             'width': 'calc(100% - 2px)',
// 			'height': 'calc(100% - 2px)',
//             'border-radius': '3px',
//             'border': '1px solid rgb(219, 219, 219)',
//             'box-shadow': 'none',
//             'display': 'block',
//             'margin': '0px 0px 12px',
//             'min-width': '326px',
//             'padding': '0px'
//         } );
//     });
//   }
//   $(window).on('resize load',adjustIframes);
  
//   jQuery(document).ready(function($) {
//       $(window).on('resize load', adjustIframes);
//       adjustIframes();
//   });






// function adjustIframes(){
//   $('iframe.embedInstagram').each(function(){
//     var
//     $this       = $(this),
//     w           = $this.attr('width'),
// 	h          = $this.attr('height'),
//     actual_w    = $this.width();


// 	console.log( 'W---->',w )
// 	console.log( 'actual_w---->',actual_w  )
// 	console.log( 'actual_h---->',actual_w  )
// 	// console.log( '$this Class---->',$this.attr('class')  )
// 	// console.log( '$this ClassXXXXXX---->',$this.attr('class') == 'embedInstagram' )

// 	let value = $this.attr('class')
// 	switch (value) {
// 		case 'embedInstagram':
			
// 			if ( actual_w != w ){
// 				$this.css( {
// 					'height':`${actual_w}px`,
// 					'padding':'0',
// 					'background': 'white',
// 					'max-width': '900px',
// 					'width': 'calc(100% - 2px)',
// 					'border-radius': '3px',
// 					'border': '1px solid rgb(219, 219, 219)',
// 					'box-shadow': 'none',
// 					'display': 'block',
// 					'margin': '1.5rem 0 1.5rem 0',
// 					'min-width': '326px'
// 				} );
// 			}
// 			break;
// 			case 'embedTwitter':
// 				if ( actual_w != w ){
// 					$this.css( {
// 						'height':`${actual_w}px`,
// 						'padding':'1rem 10%'
// 					} );
// 				}
// 				break;
	
// 		default:
// 			if ( actual_w != w ){
// 				$this.css( {
// 					'height':`auto`,
// 					'padding':'0'
// 				} );
// 			}
// 			break;
// 	}

//   });
// }
// $(window).on('resize load',adjustIframes);



// jQuery(document).ready(function($) {
//     $(window).on('resize load', adjustIframes);
//     adjustIframes();
// });




	

	function adjustIframes(){
		$('iframe').each(function(){
		  
		  let $this = $(this)
		  let value = $this.attr('class')
	  
		  switch (value) {
			  case 'embedInstagram':
			

					$this.css( {
						'height':`${altura}px`,
						'padding':'0',
						'background': 'white',
						'max-width': '900px',
						'width': 'calc(100% - 2px)',
						'border-radius': '3px',
						'border': '1px solid rgb(219, 219, 219)',
						'box-shadow': 'none',
						'display': 'block',
						'margin': '1.5rem 0 1.5rem 0',
						'min-width': '326px'
					} );
				
			

		
				
				  break;
				  case 'embedTwitter':

			

					$this.css( {
						'height':`${altura}px`,
						'padding':'0',
						'background': 'white',
						'max-width': '900px',
						'width': 'calc(100% - 2px)',
						'border-radius': '3px',
						'border': '1px solid rgb(219, 219, 219)',
						'box-shadow': 'none',
						'display': 'block',
						'margin': '1.5rem 0 1.5rem 0',
						'min-width': '326px'
					} );
				
			
					  break;
		  
			  default:
				//   if ( actual_w != w ){
				// 	  $this.css( {
				// 		  'height':`auto`,
				// 		  'padding':'0'
				// 	  } );
				//   }
				  break;
		  }
	  
		});
	  }
	  $(window).on('resize load',adjustIframes);




// window.onload=myFunction;