

jQuery(document).ready(function($) {
	$('.panel-collapse').on('show.bs.collapse', function () {
    $(this).siblings('.panel-heading').addClass('active');
  });

  $('.panel-collapse').on('hide.bs.collapse', function () {
    $(this).siblings('.panel-heading').removeClass('active');
  });


  // navbar-scroll
  var navbar=$('.navbar');
		$(window).scroll(function(){
			if($(window).scrollTop()>=200){
				navbar.addClass('navbar-scroll');
				$('#navbrand-text').css("color",'black');
				$('.navbar-brand > img').attr('src','logo.png')
				$('.navbar-header > a').css("color",'black')
			}
			else{
				navbar.removeClass('navbar-scroll');
				$('#navbrand-text').css("color",'white');
				$('.navbar-header > a').css("color",'white')
				$('.navbar-brand > img').attr('src','logowhite.png')
			}
		});

	$('ul.nav li.dropdown').hover(function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
}, function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
});
});



$(document).ready(function(){
  $(".hamburger").click(function(){
    $(this).toggleClass("is-active");
		navbar=$('.navbar');
		navbar.addClass('navbar-scroll');
  });
});
