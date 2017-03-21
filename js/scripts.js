$(document).ready(function() {
  $("p").click(function() {
    $("#img1").slideToggle();
  });
  $(".horse").click(function(){
    $(".text").slideToggle();
    $("#img2").fadeToggle();
  });
  $(".polar1").click(function(){
    $(".text1").slideToggle();
    $(".polar").fadeIn();
  });
});
