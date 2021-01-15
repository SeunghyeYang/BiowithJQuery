
$(document).ready(function() {
    
$("#home_btn").click(function() {

    $("#home").slideDown();
    $("#home").siblings().slideUp();
  
  });
  
  $("#work_btn").click(function() {

    $("#work").slideDown();
    $("#work").siblings().slideUp();
  
  });
  
  
  $("#value_btn").click(function() {
  
    $(this).addClass("highlight");
    $(this).siblings().removeClass("highlight");
    $("#value").slideDown();
    $("#value").siblings().slideUp();
  
  });
  
  
  $("#about_btn").click(function() {
  
    $(this).addClass("highlight");
    $(this).siblings().removeClass("highlight");
    $("#about").slideDown();
    $("#about").siblings().slideUp();
  
  
  });
  
  
  $("#home_btn").click();
  
});
