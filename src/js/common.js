import $ from "jquery"

// import "./faq.js"
// import "./contacts.js"
import "./mobile-menu.js"


import { TimelineLite, TweenLite, Linear } from 'gsap';
import ScrollMagic from 'scrollmagic';
//import ScrollToPlugin from "gsap/ScrollToPlugin.js"

// import animation from 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js';

import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators'
import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap'

import {Swiper, Navigation, EffectFade, Pagination} from "swiper/dist/js/swiper.esm.js";

Swiper.use([Navigation, EffectFade, Pagination])


window.$ = $;
window.jQuery = $;

require("./countTo.js");
// window.is = is

window.get$ = (element) => {
	return $(element)
}


require("./jquery.fancybox.js")
require("../css/jquery.fancybox.css")



document.addEventListener("DOMContentLoaded", function(){

	

	var mainSlaiderSwiper = new Swiper('.main-banner', {
		effect: "fade",
		slidesPerView: 1,
		loop: true,
		roundLengths: true,
		a11y: false,
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



})


