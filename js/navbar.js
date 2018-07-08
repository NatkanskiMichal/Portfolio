$(document).ready(function () {
	if ($(window).width() <= 767) {	
        $('.header__nav-toggle').click(function () {
        $('.bar-one').toggleClass('rotated-menu-bar-one');
        $('.bar-three').toggleClass('rotated-menu-bar-two');
        $('.bar-two').toggleClass('rotated-menu-bar-three');    
        $('.header__nav-menubar').slideToggle('active');
        $('.header__triangle-animation-right').hide('active');
        $('.header__triangle-animation-left').show('active');
    });
   
    $('.menubar__items').click(function () {
        $('.header__nav-menubar').slideUp('active');
        $('.bar-one').toggleClass('rotated-menu-bar-one');
        $('.bar-three').toggleClass('rotated-menu-bar-two');
        $('.bar-two').toggleClass('rotated-menu-bar-three');    
        $('.header__nav-toggle').toggleClass('rotated-triangle-menu-li');
         $('.header__triangle-animation-right').show('active');
        $('.header__triangle-animation-left').hide('active');
    });
  
    $('.header__logo, .home').click(function () {
         $('.header__triangle-animation-right').show('active');
        $('.header__triangle-animation-left').show('active');
    });
	}
});



