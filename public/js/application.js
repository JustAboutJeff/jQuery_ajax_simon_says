$(document).ready(function(){

  $('a#get_color').on('click', function() {

    $.ajax ({
      url: '/color',
      type: 'POST',
      dataType: 'json',
      success: function( response ) {
        console.log(response.color);
        console.log(response.cell);
        $("ul#color_me > li").eq(response.cell).css('background-color', response.color);
      }
    });

  })

});


// var randomTile = Math.round(Math.random()*8);
// var randomHue = '#' + ('00000' + Math.floor(Math.random()*16777216).toString(16)).substr(-6)
