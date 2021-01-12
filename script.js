$(document).ready(function(){
  $(".animate.box").click(function(){
    $(".a > div").toggleClass("animation_1");
  });
  $(".animate.grid").click(function(){
    $(".a").toggleClass("a_alternative");
  });
});