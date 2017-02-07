$(document).ready( function(){
  // console.log("hi from script.js");

  $(window).scroll(function(){
    $(".mainHeader").css("opacity", 1 - $(window).scrollTop() / 350);
  });

});
