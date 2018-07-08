$(".home, .header__logo").on("click", function () {
    $("body, html").animate({
        scrollTop: $("header").offset().top
    }, 500);
});

$(".header__arrow, .aboutMe").on("click", function () {
	$("body, html").animate({
		scrollTop: $(".main__aboutMe").offset().top
	}, 500);
});

$(".skillSet").on("click", function () {
	$("body, html").animate({
		scrollTop: $(".main__skills").offset().top
	}, 500);
});

$(".projects").on("click", function () {
	$("body, html").animate({
		scrollTop: $(".main__projects").offset().top
	}, 500);
});

$(".contactMe").on("click", function () {
	$("body, html").animate({
		scrollTop: $(".main__contact").offset().top
	}, 500);
});

