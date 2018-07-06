$(document).ready(function () {
	if ($(window).width() <= 767) {	
        $('.header__nav-toggle-icon').click(function () {
        $(this).toggleClass('rotated-menu-icon');
        $('ul').slideToggle('active');
        $('.header__triangle-animation-right').hide('active');
        $('.header__triangle-animation-left').show('active');
    });
   
    $('li').click(function () {
        $('ul').slideUp('active');
        $('.header__nav-toggle-icon').toggleClass('rotated-menu-icon');
        $('.header__nav-toggle-icon').toggleClass('rotated-triangle-menu-li');
         $('.header__triangle-animation-right').show('active');
        $('.header__triangle-animation-left').hide('active');
    });
  
    $('.header__logo, .home').click(function () {
         $('.header__triangle-animation-right').show('active');
        $('.header__triangle-animation-left').show('active');
    });
	}
});




