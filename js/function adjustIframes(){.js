function adjustIframes(){
    $('iframe').each(function(){
      var $this = $(this)
          $this.css( {
            'background': 'white',
            'max-width': '658px',
            'width': 'calc(100% - 2px)',
            'border-radius': '3px',
            'border': '1px solid rgb(219, 219, 219)',
            'box-shadow': 'none',
            'display': 'block',
            'margin': '0px 0px 12px',
            'min-width': '326px',
            'padding': '0px'
        } );
    });
  }
  $(window).on('resize load',adjustIframes);
  
  jQuery(document).ready(function($) {
      $(window).on('resize load', adjustIframes);
      adjustIframes();
  });



