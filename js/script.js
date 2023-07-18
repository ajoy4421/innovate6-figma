$(function () {
	// ===== counter up operation =====
	$(".counter").counterUp({
		delay: 200,
		time: 2000,
	});
	// ===== counter up operation =====

	// ===== slick slider operation =====

	$(".slick_slider").slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: ".prev_icon",
		nextArrow: ".next_icon",
		zIndex: 9999999,
	});

	// ===== slick slider operation =====

	// ===== fixed nav =====
	$(window).scroll(function () {
		$("#navbar_main.nav_fixed").animate(500);

		let add_Fixed_Nav = $(this).scrollTop();
		if (add_Fixed_Nav > 1000) {
			$("#navbar_main").addClass("nav_fixed");
		} else {
			$("#navbar_main").removeClass("nav_fixed");
		}
	});
	// ===== fixed nav =====

	// ===== preloader =====
	$(window).on("load", function () {
		$("#preloader").delay(400).fadeOut(400);
	});
	// ===== preloader =====
});

// === aos js operation ===
AOS.init({
	delay: 200,
	duration: 400,
	easing: "linear",
	once: true,
	offset: 120,
});
// === aos js operation ===

// === wow js operation ===
new WOW().init();

// === wow js operation ===

// ===== Designed by AJOY SAHA =====
