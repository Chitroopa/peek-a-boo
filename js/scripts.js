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
  $("button#dark").click(function(){
    $("body").removeClass();
    $("body").addClass("btndark");
  });
  $("button#light").click(function(){
    $("body").removeClass();
    $("body").addClass("btnlight");
  });
  $("button#original").click(function(){
    $("body").removeClass();
    $("body").addClass("btnoriginal");
  });
});
