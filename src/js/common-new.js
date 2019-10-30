// import $ from "jquery"

// import "./faq.js"
// import "./contacts.js"
import "./common-old.js"
// import "./mobile-menu.js"


import { TimelineLite, TweenLite, Linear } from 'gsap';
import ScrollMagic from 'scrollmagic';
//import ScrollToPlugin from "gsap/ScrollToPlugin.js"

// import animation from 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js';

import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators'
import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap'

import {Swiper, Navigation, EffectFade, Pagination, Autoplay} from "swiper/dist/js/swiper.esm.js";

Swiper.use([Navigation, EffectFade, Pagination, Autoplay])


// window.$ = $;
// window.jQuery = $;

// require("./countTo.js");
// window.is = is

// window.get$ = (element) => {
// 	return $(element)
// }


// require("./jquery.fancybox.js")
// require("../css/jquery.fancybox.css")



document.addEventListener("DOMContentLoaded", function(){



	

	var mainSlaiderSwiper = new Swiper('.main-banner', {
		effect: "fade",
		slidesPerView: 1,
		loop: true,
		roundLengths: true,
		a11y: false,
		autoplay: {
	        delay: 2500,
	        disableOnInteraction: false,
	    },
		navigation: {
			nextEl: '.main-banner .swiper-button-next',
			prevEl: '.main-banner .swiper-button-prev',
		},
		pagination: {
			el: ".swiper-pagination",
			type: "bullets",
			clickable: true
		},
		fadeEffect: {
			crossFade: true
		},
		
	});	

	var aboutSlaiderSwiper = new Swiper('.about-slider .swiper-list', {
		effect: "fade",
		slidesPerView: 1,
		loop: true,
		roundLengths: true,
		a11y: false,
		autoplay: {
	        delay: 2500,
	        disableOnInteraction: false,
	    },
		navigation: {
			nextEl: '.about-slider .swiper-button-next',
			prevEl: '.about-slider .swiper-button-prev',
		},
	
		fadeEffect: {
			crossFade: true
		},
		
	});


	var defaultSlaiderSwiper = new Swiper('.slider-default .swiper-list', {
		slidesPerView: 4,
		loop: true,
		roundLengths: true,
		a11y: false,
		spaceBetween: 20,
		// autoplay: {
	 //        delay: 2500,
	 //        disableOnInteraction: false,
	 //    },
		navigation: {
			nextEl: '.slider-default .swiper-button-next',
			prevEl: '.slider-default .swiper-button-prev',
		},
		breakpoints: {
			1200: {
				slidesPerView: 3,
			},
			667: {
				slidesPerView: 1,
			},
		}


	});

	if($(window).width() > 667){

		$('.slider__slide-img').height(Math.max.apply(null, $('.slider__slide-img').map(function(){
			return $(this).height();
		})))

		$('.slider__slide-title').height(Math.max.apply(null, $('.slider__slide-title').map(function(){
			return $(this).height();
		})))
		
	}



	var brandSwiper = new Swiper('.brands .swiper-list', {
		slidesPerView: 5,
		loop: true,
		roundLengths: true,
		a11y: false,
		spaceBetween: 10,
		autoplay: {
	        delay: 2500,
	        disableOnInteraction: false,
	    },
		navigation: {
			nextEl: '.brands .swiper-button-next',
			prevEl: '.brands .swiper-button-prev',
		},
		breakpoints: {
			1000: {
				slidesPerView: 4,
			},
			667: {
				slidesPerView: 1,
			},
		}


	});

	var testemonialsSwiper = new Swiper('.testemonials .swiper-list', {
		slidesPerView: 4,
		loop: true,
		roundLengths: true,
		a11y: false,
		spaceBetween: 20,
		autoplay: {
	        delay: 2500,
	        disableOnInteraction: false,
	    },
		navigation: {
			nextEl: '.testemonials .swiper-button-next',
			prevEl: '.testemonials .swiper-button-prev',
		},
		breakpoints: {
			1000: {
				slidesPerView: 3,
			},
			667: {
				slidesPerView: 1,
			},
		}


	});



})


