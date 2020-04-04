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
				autoHeight: true,
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

	$('.burger').click(function(){
		$('body').toggleClass('js-menu-opened');
		$('.burger').toggleClass('js-active');
	})

	var menu = $('.head .main-nav__list').clone();
	var phone = $('.head-phone').clone();
	var form = $('.head-callback').clone();


	$('.mobile-menu').prepend(menu);

	$('.mobile-menu .submenu > li').each(function(i,el){

		var $this = $(el);

		if($this.children('div').length){
			var link = $this.children('.submenu__link').clone();
			$this.children('.submenu__link').removeAttr('href');
			$this.find('.submenu-2').prepend(link);
		}
		

	})


	var linkCatalog = $('.mobile-menu .main-nav__item--submenu > a').clone();


	$('.mobile-menu .main-nav__item--submenu > a').removeAttr('href');

	$('.mobile-menu .submenu').prepend(linkCatalog);

	$('.mobile-menu .main-nav__item--submenu > a').click(function(){
		$(this).closest('li').addClass('js__submenu-open');
	});

	$('.mobile-menu .submenu .submenu__link').click(function(){
		$(this).closest('li').addClass('js__sub-submenu-open');
	});



	$('.mobile-menu .submenu-2').prepend('<a class="js__back">Назад</a>')
	$('.mobile-menu .submenu-cont').prepend('<a class="js__back">Назад</a>')

	$('.submenu-2 > .js__back').click(function(){
		$('.js__sub-submenu-open').removeClass('js__sub-submenu-open');
	})

	$('.submenu-cont > .js__back').click(function(){
		$('.js__submenu-open').removeClass('js__submenu-open');
	})








})


