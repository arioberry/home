jQuery(function($){
  
  var winH = $(window).height();
  $('.title').outerHeight($(window).height());    
  $(window).on('resize',function(){
    winH = $(window).height();
    $('.title').outerHeight(winH);
  });
  
}); 