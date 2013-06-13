$(document).ready(function(){
  $('a#get_color').on('click', function() {
    var randomTile = Math.round(Math.random()*8);
    var randomHue = '#' + ('00000' + Math.floor(Math.random()*16777216).toString(16)).substr(-6)


    $("ul#color_me > li").eq(randomTile).css('background-color', randomHue);
  })
});
