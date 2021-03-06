$(document).ready(function () {
	$('.items').slick({
		dots: true,
		infinite: true,
		lazyLoad: 'ondemand',
		slidesToShow: 3,
		slidesToScroll: 3,
		autoplay: true,
		autoplaySpeed: 2000,
	});

	let $btns = $('.project-area .button-group button');
	$btns.click(function (e) {
		$('.project-area .button-group buttons').removeClass('active');
		e.target.classList.add('active');
		let selector = $(e.target).attr('data-filter');
		console.log(selector);
		$('.project-area .container .grid').isotope({
			filter: selector,
		});
		return false;
	});

	$('.project-area .button-group #btn1').trigger('click');

	$('.project-area .grid .test-popup-link').magnificPopup({
		type: 'image',
		gallery: { enabled: true },
	});
});
