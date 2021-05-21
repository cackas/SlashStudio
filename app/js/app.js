// // Import jQuery module (npm i jquery)
import $ from 'jquery'
window.jQuery = $
window.$ = $
require('~/app/libs/slick-carousel/slick/slick.js')
// // Import vendor jQuery plugin example (not module)
// require('~/app/libs/mmenu/dist/mmenu.js')

document.addEventListener('DOMContentLoaded', () => {
	// Custom JS
	$('.car-1-wrap').slick({
		dots: true,
		infinite: true,
		speed: 500,
		fade: true,
		dots: false,
		cssEase: 'linear'
	  });
	$('.case-wrap').slick({
		vertical: true,
		arrows: false,
		centerMode: true,
		slidesToShow: 3,
		swipe: true,
		slidesToScroll: 1,
		focusOnSelect: true,
		dots: false,
		asNavFor: '.car-1-wrap'
	  });

	  $('.arr-up').click(function(){
		$('.case-wrap').slick('slickPrev');
	  })
	  
	  $('.arr-bott').click(function(){
		$('.case-wrap').slick('slickNext');
	  })
	  
})
