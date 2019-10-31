if (window.frameCacheVars !== undefined)
    BX.addCustomEvent("onFrameDataReceived" , (json) => {
    	loadScripts();
    });
else if (typeof(BX) != "undefined")
    BX.ready(() => {
    	loadScripts();
    })
else
	$(() => {
		loadScripts();
	})

if (!Array.from) {
    Array.from = function (object) {
        'use strict';
        return [].slice.call(object);
    };
}



$(window).on("load", _ => {
	$(".cat2__one-img-cont").height(Math.max(...$(".cat2__one-img-cont").map(function(){
	    return $(this).height()
	})));
});

$(window).on("resize", function(){
	if (window.matchMedia("screen and (max-width: 980px)").matches && $(".fancybox-inner #popup-cart").length)
		$.fancybox.close();
});

const sameHeights = (objects, settings = {}) => {
	if (!window.XWidgets)
		window.XWidgets = new Array();

	if (!Array.isArray(window.XWidgets.sameHeights))
		window.XWidgets.sameHeights = new Array();

	let updateTimeout;

	const makeSameHeights = _ => {
		clearTimeout(updateTimeout);

		updateTimeout = setTimeout(_ => {
			$(objects).height("auto");
			$(objects).height(Math.max(...$(objects).map(function(){
				return $(this).height()
			})))
		}, 200)
	}

	document.addEventListener("DOMContentLoaded", makeSameHeights)

	$(window).on("load resize", makeSameHeights)
};




let loadScripts = () =>{


	$('.burger').click(function(){
		$('body').removeClass('js__city--open');
		
	})


	$(".orders-desc__list-toggle").click(function(e){
		e.preventDefault();
		
		let $prev = $(this).prev(".orders-desc__list");

		$prev.toggleClass("js__opened");
	});

	sameHeights($(".a-advantage__title"))

	// window.menu = new mobileMenu({
	// 	burger: ".burger",
	// 	menu: ".main-nav",
	// 	submenu: false,
	// 	menuActiveClass: "js__opened",
	// 	bodyActiveClass: "js-menu-opened",
	// 	ignoreWarnings: false,
	// 	fixBody: true,
	// 	media: "screen and (max-width: 1200px)"
	// });


	// $(".mobile-search").click(function(){
	// 	$("body").toggleClass("js__search-opened")
	// });

	// class Menu {
	// 	set $menu(selector){
	// 		this._menu = selector;
	// 	}
	// 	get $menu(){
	// 		return $(this._menu);
	// 	}
	// 	constructor($obj){
	// 		this.$menu = $obj;
	// 	}

	// 	open(el){
	// 		$(el).find(".submenu-cont").addClass("js__opened");
	// 	}

	// 	close(){
	// 		$(".submenu-cont").removeClass("js__opened");
	// 	}
	// }

	// let menu = new Menu(".head .main-nav__list");

	// $(".head .main-nav__list").menuAim({
	// 	// submenuSelector: ".submenu",
	// 	activate: menu.open,
 //   		deactivate: menu.close,
 //   		submenuDirection: "below",
 //   		exitMenu: menu.close,
	// })


	if($( "#datepicker").length){
		/**Адаптив*/

			// $(".submenu__list").each((i, el) => {
			// 	var $this = $(el);

			// 	$this.closest(".submenu__col").addClass("js__have-sub");
			// });

			// календарь в форме на стр. бонусной карты
			$( function() {
				$( "#datepicker").datepicker();
				 $.datepicker.regional['ru'] = {
	                closeText: 'Закрыть',
	                prevText: '&#x3c;Пред',
	                nextText: 'След&#x3e;',
	                currentText: 'Сегодня',
	                monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь',
	                'Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
	                monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн',
	                'Июл','Авг','Сен','Окт','Ноя','Дек'],
	                dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'],
	                dayNamesShort: ['вск','пнд','втр','срд','чтв','птн','сбт'],
	                dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
	                weekHeader: 'Не',
	                dateFormat: 'dd.mm.yy',
	                firstDay: 1,
	                isRTL: false,
	                showMonthAfterYear: false,
	                changeMonth: true,
	                changeYear: true,

	                yearSuffix: ''};
	        $.datepicker.setDefaults($.datepicker.regional['ru']);
			} );

			$("#datepicker").datepicker({ yearRange:'1940:' });

	}





		// $(".head__menu").append("<div class='head__menu-footer js__moved-phone'><div class='head__menu-footer js__moved-msg'></div></div><div class='head__menu-footer js__moved-soc'></div>");

		// $(".js__moved-soc").append($(".footer__soc .soc").clone())

		// $(".js__moved-msg").append($(".shop-contact__msg .msg").clone());

		// $(".js__moved-phone").append($('.footer-phone').clone())
		// 	.append($('.footer-call').clone());

		// $(".js__moved-phone").append('<a href="#feedback-modal" class="head-links__link--bonus js__callback fancybox">Обратная связь</a>');
		// $(".js__moved-phone").append('<a href="/bonus/" class="head-links__link--bonus">Бонусная карта</a>');


		// $('.bx-ios .cities-mobile option:disabled').remove();

		// var city = $('.head .city').clone();

		// $('.head__menu').prepend(city);

		// $('.city, .city-btn__close').click(function(){
		// 	$('body').toggleClass('js__city--open');
		// })

		// let adaptiveLinks = [];

		// adaptiveLinks.push({
		// 	name: "Личный кабинет",
		// 	link: $(".head-links__link--lc").attr("href"),
		// 	postfix: "lc",
		// });



		// for (var key in adaptiveLinks){
		// 	let link = adaptiveLinks[key];
		// 	$(".menu").prepend("<li class='menu__el js__moved-head-link js__moved-head-link--"+link.postfix+"'>\
		// 		<a class='menu__link' href='"+link.link+"'>"
		// 		+link.name+"</a></li>")
		// }

		

		let $clonedFilterBtn = $(".catalog-filter__btn").clone();

		$(".sort").append($clonedFilterBtn);

		$(".catalog-filter__btn").click(function(){
			let $this = $(this);
			let tmpText = $this.text();

			$this.text($this.attr("data-toggle-text"));
			$this.attr("data-toggle-text", tmpText);

			$(".catalog-filter").slideToggle(300);
		});

	/**!Адаптив*/

	$(".tovar-info .tabs-content[data-id=\"0\"] .text-page,\
		.tovar-desc__row-text.text-page").each((i, el) => {
		let $this = $(el),
			text = $this.text();

		// let splitedText = text.split(new RegExp(/.[А-Я]/));
		// let count = splitedText.length;

		let anotherSplitedText = text.split(new RegExp(/\n/));

		$this.text("");

		let tmpText = "",
				isUlOpened = false;

		for (let i in anotherSplitedText){
			let abz = anotherSplitedText[i];

			if (abz.match(new RegExp(/^-|• .*/))){
				if (!isUlOpened){
					tmpText += "<ul>";
					isUlOpened = true;
				}

				abz = abz.replace(/^-|• /, "");

				tmpText += "<li>"+abz+"</li>";
			}else{
				if (isUlOpened){
					isUlOpened = false;
					tmpText += "</ul>";
				}

				tmpText += "<p>"+abz+"</p>";
			}
		}

		$this.html(tmpText);

		// console.log(anotherText);
	});

	$(".tovar-desc__row-text.text-page").each((i, el) => {
		let $this = $(el),
				$prev = $this.prev(".tovar-desc__row-title");

		if ($prev.text()+":" == $this.find("p:eq(0)").text().replace(/^ /, ""))
			$this.find("p:eq(0)").remove();
	});

	$("body").on("click", ".forms-input-cont .rating__list:not(.js__voted) .rating__start", function(){
		let $this = $(this);
		let index = $this.index(),
			$rating = $this.closest("ul");

		$rating.find("li").each((i, el) => {
			let $this = $(el);

			if ($this.index() <= index)
				$this.addClass("active");
		});

		// $rating.addClass("js__voted");

		$rating.next("input").val((index+1)/2);

	});

	$(".text-page table").each((i, el) => {
		let $this = $(el);

		$this.wrap("<div class='table-wrap'></div>")
	});

	if($(".new-slider").length){

		$(".new-slider").each((i, el) => {
			let $this = $(el);

			$this.slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				slide: ".new-slider__slide",
				fade: true,
				appendArrows: $this.closest(".new").find(".new__title-cont"),
				responsive: [
					{
						breakpoint: 660,
						settings: {
							fade: false
						}
					}
				]
			})
		});

	}

	if($(".shop-slider").length){
		$(".shop-slider").slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			fade: true,
			slide: ".shop-slider__slide"
		});
	}

	if($(".shops-new__item-slider").lenght){

		$(".shops-new__item-slider").slick({
			slidesToShow: 4,
			slidesToScroll: 1,
			slide: ".shops-new__item-slide",
			responsive: [
				{
					breakpoint: 1500,
					settings: {
						arrows: false,
						centerMode: true,
					}
				},
				{
					breakpoint: 1300,
					settings: {
						slidesToShow: 3,
						arrows: false,
						centerMode: true,
					}
				},
				{
					breakpoint: 1000,
					settings: {
						slidesToShow: 2,
						arrows: false,
						centerMode: true,
					},
				},
				{
					breakpoint: 667,
					settings: {
						slidesToShow: 1,
						centerMode: true,
						arrows: false,
					},
				}
			]
		});
	}

	if($(".shops-new__item-personals").lenght){
		$(".shops-new__item-personals").slick({
			slidesToShow: 4,
			slidesToScroll: 1,
			arrows: false,
			dots: false,
			slide: ".shops-new__item-personal",
			responsive: [
				{
					breakpoint: 1000,
					settings: {
						slidesToShow: 2,
						arrows: true,
					},
				},
				{
					breakpoint: 667,
					settings: {
						slidesToShow: 1,
						arrows: true,
					},
				}
			]
		})

	}


	$("body").on("change", ".forms__input--file", function(){
		let $this = $(this),
			name = $this[0].files[0].name;

		$this.nextAll(".forms__input--file-support").val(name);
	});

	$(".share").click(function(){
		let $this = $(this);

		$this.closest("div").find(".tovar__share-yashare").toggleClass("js__visible");
	});

	$("body").on("click", (e) =>{
		if (!$(e.target).is($(".tovar__share")) && !$(".tovar__share").has(e.target).length)
			$(".tovar__share-yashare").removeClass("js__visible");
	});

	// $(".filter-checks__list").jScrollPane({
	// 	autoReinitialise: true,
	// });

	$(".categories__one-title").click(function(){
		let $this = $(this);

		$this.next(".categories__one-main").slideToggle(300);

		$this.closest(".categories__one").toggleClass("closed");
	});

	$(".filter__one-title-cont").click(function(){
		let $this = $(this);

		$this.next(".filter__one-block").slideToggle(300)
	});


	$(".fancybox").fancybox({
		beforeShow: () =>{
			$("body").addClass("fancy-active")
		},
		afterShow(){
			window.activeFancyboxID = $(".fancybox-innt > div").attr("id")
		},
		afterClose(){
			$("body").removeClass("fancy-active")

			if (window.activeFancyboxID){
				if (window.activeFancyboxID == "popup-cart")
					checkOldBasket()

				window.activeFancyboxID = "";
			}
		},
		
	});
	

	$(".price-filter").each((i, el) => {
		let $this = $(el);

		let $range = $this.find(".range"),
			$min = $this.find("input[data-min]"),
			$max = $this.find("input[data-max]");

		let min = parseInt($min.attr("data-min")),
			max = parseInt($max.attr("data-max"));

		let minVal = parseInt($min.attr("placeholder")),
			maxVal = parseInt($max.attr("placeholder"));

		// let canClearMinInput = parseInt($min.attr("placeholder")) == min,
			// canClearMaxInput = parseInt($max.attr("placeholder")) == max;

		if (minVal != min){
			$min.val($min.attr("placeholder"));
			$min.attr("placeholder", min)
		}

		if (maxVal != max){
			$max.val($max.attr("placeholder"));
			$max.attr("placeholder", max)
		}

		$range.slider({
			animate: "normal",
			min: min,
			max: max,
			values: [
				minVal != min ? $min.val() : parseInt($min.attr("placeholder")), 
				maxVal != max ? $max.val() : parseInt($max.attr("placeholder"))
			],
			range: true,
			step: 10,
			slide: (e, ui) =>{
				if (ui.values[0] == min){
					$min.val("")
				}else
					$min.val(parseInt(ui.values[0]));

				if (ui.values[1] == max){
					$max.val("")
				}else
					$max.val(parseInt(ui.values[1]));
			}
		});

		$this.find(".price-filter__input").on("keyup", function(){
			let id, val;

			if ($(this).attr("data-min")){
				id = 0;
				val = (+$(this).val() < min ? min : +$(this).val());
			}else{
				id = 1;
					val = (+$(this).val() > max ? max : +$(this).val());
			}

			$range.slider("values", id, parseInt(val));
		});
	});

	if($(".main-slider").lenght){

		$(".main-slider").slick({
			slidesToScroll: 1,
			slidesToShow: 1,
			slide: ".main-slider__slide",
			autoplay: true,
			fade: true,
			accessibility: false,
			autoplaySpeed: 4000,
			responsive: [
				{
					breakpoint: 1000,
					settings: {
						arrows: false,
						dots: true,
					}
				},
				{
					breakpoint: 660,
					settings: {
						arrows: false,
						dots: true,
						// autoplay: false,
						// initialSlide: 2,
					}
				}
			]
		});
	}


		$(".bestseller--slider").each((i, el) => {
			let $this = $(el);

			$this.slick({
				slidesToShow: 4,
				slidesToScroll: 1,
				appendArrows: $this.closest(".bestsellers__cont").find(".new__title-cont"),
				responsive: [
					{
						breakpoint: 1000,
						settings: {
							slidesToShow: 2
						}
					},
					{	
						breakpoint: 660,
						settings: {
							slidesToShow: 1
						}
					}
				]
			})
		});

	

		$(".customers-slider").each(function(){
			let $this = $(this);

			$this.slick({
				slidesToShow: 5,
				slidesToScroll: 1,
				appendArrows: $this.closest(".bestsellers__cont").find(".new__title-cont"),
				responsive: [
					{
						breakpoint: 1100,
						settings: {
							slidesToShow: 4,
						}
					},
					{
						breakpoint: 1000,
						settings: {
							slidesToShow: 3
						}
					},
					{	
						breakpoint: 660,
						settings: {
							slidesToShow: 2
						}
					}
				]
			})
		})

	

	if($(".partners").length){
		$(".partners").slick({
			slidesToShow: 6,
			slidesToScroll: 1,
			slide: ".partners__slide",
			responsive: [
					{
						breakpoint: 1500,
						settings: {
							slidesToShow: 4
						}
					},
					{
						breakpoint: 1000,
						settings: {
							slidesToShow: 3
						}
					}
				]
		});

	}


		$(".tovar-big-slider").slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			slide: ".tovar-big-slider__slide",
			asNavFor: ".tovar-smallslider",
			fade: true,
			arrows: false,
			responsive: [
				{
					breakpoint: 660,
					settings: {
						dots: true,
					}
				}
			]
		});

	


		$(".tovar-smallslider").slick({
			slidesToScroll: 1,
			slidesToShow: 4,
			// vertical: true,
			// verticalSwiping: true,
			slide: ".tovar-smallslider__slide",
			arrows: false,
			asNavFor: ".tovar-big-slider",
			focusOnSelect: true,
			responsive: [
				{
					breakpoint: 1200,
					settings: {
						vertical: false,
						verticalSwiping: false,
						slidesToShow: 2,
					}
				},
				{
					breakpoint: 1000,
					settings: {
						vertical: false,
						verticalSwiping: false,
						slidesToShow: 3,
					}
				}
			]
		});

	

	$(".tabs-btn").click(function(){
		let parentId = $(this).closest(".tabs-content").attr("data-id");

		if (!$(".tabs-tab[data-id='"+parentId+"']").hasClass("active"))
			$(".tabs-tab[data-id='"+parentId+"']").trigger("click")
		else{
			$(".tabs-tab[data-id='"+parentId+"']").removeClass("active");
			$(this).closest(".tabs-content").removeClass("active");
		}
	});

	let isMapInit = false;

	$(".tabs-tab, .amount-tab").click(function(){
		let $this = $(this);

		if ($this.hasClass("active"))
			return

		if (!isMapInit && showMap){
			try{
				showMap()
			}catch(e){
				
			}

			isMapInit = true
		}

		let id = $this.attr("data-id"),
			$parent = $this.closest(".tabs, .amount-tabs");

		$parent.find(".tabs-tab.active, .tabs-content.active, .amount-tab.active, .amount-container.active").removeClass("active");

		$this.addClass("active");
		$parent.find(".tabs-content[data-id='"+id+"'], .amount-container[data-id='"+id+"']").addClass("active");

		$.fancybox.update()
	});
};


/** Класс для работы мобильного меню */
class mobileMenu{
	set burger(selector){
		this._burger = document.querySelectorAll(selector)[0]
	}
	get burger(){
		return this._burger
	}

	set menu(selector){
		this._menu = document.querySelectorAll(selector)[0]
	}
	get menu(){
		return this._menu;
	}

	set error(message){
		if (this.settings.ignoreWarnings)
			return

		this._error = true;
		this.errorMessage(message + " Меню не работает.");
	}

	set subTitles(selector){
		this._titles = document.querySelectorAll(selector)
	}
	get subTitles(){
		return this._titles
	}

	set subMenu(selector){
		this._subMenu = document.querySelectorAll(selector)
	}
	get subMenu(){
		return this._subMenu
	}


	constructor(settings = {
		burger: ".burger",
		menu: ".mobile-menu",
		submenu: {
			titleSelector: ".mobile-menu__sub-title",
			submenuSelector: ".mobile-menu__submenu",
		},
		menuActiveClass: "js__opened",
		bodyActiveClass: "js__menu-opened",
		ignoreWarnings: false,
		fixBody: false,
	}){

		this.settings = settings;

		this.burger = settings.burger;
		this.menu = settings.menu;

		if (settings.submenu){
			this.subTitles = settings.submenu.titleSelector;
			this.subMenu = settings.submenu.submenuSelector;
		}

		if (!this.burger){
			this.error = "Бургер не найден.";
			return
		}

		if (!this.menu){
			this.error = "Мобильное меню не найдено.";
			return
		}


		this.body = document.getElementsByTagName("body")[0];

		this.state = false;

		this.bindEvents();
	}

	openMenu(){
		if (!window.matchMedia(this.settings.media).matches)
			return

		if (this.settings.fixBody){
			this.body.style.top = -window.pageYOffset + "px";
			this.body.style.position = "fixed";
		}

		this.burger.classList.add("js-active");
		this.menu.classList.add(this.settings.menuActiveClass);
		this.body.classList.add(this.settings.bodyActiveClass);

		this.state = true;
	}
	closeMenu(){
		if (!window.matchMedia(this.settings.media).matches || !this.state)
			return

		let top = null;
		
		if (this.settings.fixBody){
			top = Math.abs(parseInt(this.body.style.top));

			this.body.style.top = "";
			this.body.style.position = "";
		}

		this.burger.classList.remove("js-active");
		this.menu.classList.remove(this.settings.menuActiveClass);
		this.body.classList.remove(this.settings.bodyActiveClass);

		if (this.settings.fixBody){
			$(window).scrollTop(top);
		}

		this.state = false;
	}
	toggleMenu(){
		if (!window.matchMedia(this.settings.media).matches)
			return

		if (this.state)
			this.closeMenu()
		else
			this.openMenu()
	}

	opendSubmenu(subTitle){
		
	}
	closeSubmenu(subTitle){

	}
	toggleSubmenu(subTitle){
		$(subTitle).toggleClass("js__opened");

		$(subTitle.closest("li").querySelector(".mobile-menu__submenu"))
			.slideToggle(300)
	}

	bindEvents(){

		let self = this;
		this.burger.addEventListener("click", _ => {
			this.toggleMenu();
		});

		if (this.settings.subMenu)
			if (this.subTitles.length)
				for (var subTitle of this.subTitles)
					subTitle.addEventListener("click", function() {
						self.toggleSubmenu(subTitle);
					});

		document.body.addEventListener("click", event => {
			let $target = $(event.target);

			if (!$target.is(this.burger)
				&& !$(this.burger).has($target).length
				&& !$target.is($('.cities'))
				&& !$('.cities').has($target).length
				&& !$target.is($(this.menu))
				&& !$(this.menu).has($target).length)
				{
					this.closeMenu()
			}
		});
	}

	errorMessage(message = ""){
		console.error(message);
	}
}

document.addEventListener("DOMContentLoaded", e => {
	let giftPriceArray = [];

	;(function(){
		let giftsList = document.querySelectorAll(".gift-item"),
			lineContainer = document.querySelector(".cart-gift__line");

		if (!giftsList.length || !lineContainer)
			return

		for (let i = 0; i < giftsList.length; i++)
			giftPriceArray.push(parseInt(giftsList[i].getAttribute("data-price")))

		let line = new giftLine(".gift-green-line", giftPriceArray, giftsList, document.querySelector(".cart-gift__title"));

		line.calc(lineContainer.getAttribute("data-current"))

		let observer = new MutationObserver(mutations => {
			mutations.forEach(mutation => {
				line.calc(lineContainer.getAttribute("data-current"))
			})
		});

		let config = {
			attributes: true,
		};

		observer.observe(lineContainer, config)
	})()



})

class giftLine{
	set line(selector){
		this._line = document.querySelector(selector)
	}
	get line(){
		return this._line
	}

	set min(min){
		this._min = min
	}
	get min(){
		return window.matchMedia("screen and (max-width: 660px)").matches ? this.pricesArray[0] : this._min
	}

	set pricesArray(array){
		this._pricesArray = array
	}
	get pricesArray(){
		let tmpArray = JSON.parse(JSON.stringify(this._pricesArray));

		return window.matchMedia("screen and (max-width: 660px)").matches ? tmpArray.splice(1, tmpArray.length) : this._pricesArray
	}
	set gifts (items){
		this._gifts = items
	}
	get gifts(){
		let tmpArray = [];

		for (var gift of this._gifts)
			tmpArray.push(gift)

		return window.matchMedia("screen and (max-width: 660px)").matches ? tmpArray.splice(1, tmpArray.length) : this._gifts
	}

	set lineWidth(width){
		this._width = width

		this.line.style.width = width
	}
	get lineWidth(){
		return this._width
	}

	set activeItemID(id){
		this._itemID = id

		for (let i = 0; i < this.gifts.length; i++){
			this.gifts[i].classList.remove("active")
			this.gifts[i].classList.remove("unactive")

			if (i < id){
				this.gifts[i].classList.add("unactive")		
			}else if (i == id)
				this.gifts[i].classList.add("active")
		}

	}
	get activeItemID(){
		return this._itemID
	}

	set curPrice(price){
		this._curPrice = price

		let needMore = this.activeItemID < 0 ? this.pricesArray[0] - price : (this.activeItemID >= 0 ? this.pricesArray[(+this.activeItemID + 1)] - price : null)

		// need

		if (needMore){
			this.title.innerHTML = '<div class="cart-gift__title">\
					Дополните заказ\
					<span class="cart-gift__title-price">\
						на <span class="price"><span>0</span><i class="rub">₽</i>\
					</span>\
				</span>\
				и получите подарок <br>\
				<a href="'+this.titleLink.link+'">'+this.titleLink.text+'</a>\
			</div>'
			this.title.querySelector(".price span")
				.innerText = parseFloat(needMore).toString().indexOf(".") != -1 
								? parseFloat(needMore).toFixed(1)
								: parseFloat(needMore)
		}


		if (price >= 15000)
			for (let i = 0; i < this.gifts.length; i++){
				this.gifts[i].classList.remove("unactive")
				this.gifts[i].classList.add("active")
			}

		if (price >= this.max)
			this.title.innerHTML = "ALOESMART ДАРИТ ПОДАРКИ <br /> <a href='"+this.titleLink.link+"'>"+this.titleLink.text+"</a>"

	}
	get curPrice(){
		return this._curPrice
	}

	set title(title){
		if (!this._title)
			this.titleLink = {
				text: title.querySelector("a").innerText,
				link: title.querySelector("a").href
			}

		this._title = title
	}
	get title(){
		return this._title
	}

	constructor(lineSelector, pricesArray, items, title){
		this.max = pricesArray[pricesArray.length - 1]

		this.min = pricesArray[0]

		this.line = lineSelector

		this.title = title

		this.lineLength = this.max

		this.pricesArray = pricesArray

		this.gifts = items

		this.curPrice = 0

		let updateTimeout;

		$(window).resize(e => {
			clearTimeout(updateTimeout)

			updateTimeout = setTimeout(e =>{
				this.calc(this.curPrice)
			}, 100)
		})
	}

	calc(curPrice){
		let _ = this;

		curPrice = parseInt(curPrice)

		if (curPrice <= _.min)
			_.lineWidth = "0%"

		if (curPrice == _.min){
			_.activeItemID = 0
			_.curPrice = curPrice

			return
		}else if (curPrice < _.min){
			_.activeItemID = -1
			_.curPrice = curPrice

			return
		}

		if (curPrice == _.max || curPrice >= _.max){
			_.lineWidth = "100%"

			_.activeItemID = _.gifts.length - 1
			_.curPrice = curPrice

			return
		}

		let res = giftLine.getRange(curPrice, _.pricesArray);

		let diff = res.max - res.min;

		_.activeItemID = res.id

		let presents = res.percent;

		_.curPrice = curPrice

		_.lineWidth = presents + "%"
	}

	static getRange(x, arr){
		if( arr.length > 1 )
           {

               let lastIndex=false;
               let step = 100/(arr.length - 1);//длина шага в процентах
               let whichRange = 0;//на какой диапазон мы попали
               for( let index in arr )
                   {
                       if( lastIndex )
                           {
                               let additionalPercent = ((x-arr[ lastIndex ])/(arr[ index ]-arr[ lastIndex ]))*step;
                               let percent = (whichRange*step)+additionalPercent;

                               if( x >= arr[ lastIndex ] && x < arr[ index ] )
                                   {
                                       //теперь узнаем в какой части полоски мы находимся
                                       return {
                                           min : arr[ lastIndex ],
                                           max : arr[ index ],
                                           percent:percent,
                                           id : lastIndex
                                       };
                                   }
                               whichRange++;
                           }
                       lastIndex=index;
                   }
           }
       else if( arr.length === 1 )
           {
               return arr[ 0 ];
           }
       else
           {
               return false;
           }
	}
}


;(function(){
	let mainPopupSlider,
		childPopupSlider = [],
		baseSlideTime = 4000,
		currentActiveVideo,
		curImgTimeout;

	document.addEventListener("DOMContentLoaded", function(){
		initialPopupSlider()

		$(".stories__popup-close").click(function(){
			$(".stories__popup").removeClass("js__visible")
			$("body").removeClass("js__fixed")
		})

		window.addEventListener("keydown", function(e){
			if (e.keyCode == 27) {
				$(".stories__popup-close").trigger("click")
			}
		}, true);
	})

	const initialPopupSlider = () => {
		$(".popup-slider").each(function(){

			const slider = this;

			childPopupSlider.push(new Swiper(slider, {
				effect: "fade",
				// loop: true,
				followFinger: false,
				allowTouchMove: false,
				simulateTouch: false,
				lazy: {
					loadPrevNext: true,
				},
				navigation: {
					prevEl: slider.querySelector(".swiper-button-prev"),
					nextEl: slider.querySelector(".swiper-button-next")
				},
				a11y: {
					enabled: false
				},
				pagination: {
					el: slider.querySelector('.popup-slider__dots .swiper-pagination'),
					type: 'bullets',
					clickable: true,
					progressbarOpposite: true,
					renderBullet(index, className){
						return `<div class="${className}">\
							<div class="swiper-pagination-bullet-progress"></div>\
							</div>`;
					}
				},
				on: {
					reachEnd(){
						console.log("Конец")
						slider.querySelector(".popup-slider__arrows .swiper-button-next").addEventListener("click", function(){
							// console.log("mainPopupSlider.el.swiper.slideNext()", mainPopupSlider.el.swiper.slideNext());
							setTimeout(function(){
								mainPopupSlider.el.swiper.slideNext()
							}, 100)
						}, {
							once: true
						})
						
						// setTimeout(function(){
						// 	mainPopupSlider.el.swiper.slideNext()
						// }, 1500)
					},
					reachBeginning(){
						console.log("Начало")
						slider.querySelector(".popup-slider__arrows .swiper-button-prev").addEventListener("click", function(){
							// console.log("mainPopupSlider.el.swiper.slidePrev()", mainPopupSlider.el.swiper.slidePrev());
							setTimeout(function(){
								mainPopupSlider.el.swiper.slidePrev()
							}, 100)
						}, {
							once: true
						})
						
						// setTimeout(function(){
						// 	mainPopupSlider.el.swiper.slidePrev()
						// }, 1500)
					}
				}
			}))

			const swSlider = slider.swiper;

			swSlider.on("slideChangeTransitionEnd", function(){
				loadVideo(slider
					.querySelector(`.swiper-slide:nth-child(${swSlider.activeIndex + 1}) .popup-slider__content`), swSlider)

				const popupGoods = this.el.querySelectorAll(`.current-googs`)

				writePopupGoods(popupGoods[swSlider.activeIndex] ? popupGoods[swSlider.activeIndex].value : [])
			})
		})

		$(".stories__goods-title span").click(function(){
			const $this = $(this);

			if ($this.hasClass("js__active")){
				$this.text("Используемые товары")
				if (currentActiveVideo)
					currentActiveVideo.play()
				$(".stories__goods").removeClass("js__visible")
			}else{
				$this.text("Скрыть товары")
				if (currentActiveVideo){
					currentActiveVideo.pause()
					clearTimeout(curImgTimeout)
				}
				$(".stories__goods").addClass("js__visible")
			}

			$this.toggleClass("js__active")
		})

		mainPopupSlider = new Swiper(".stories-popup__slider", {
			slidesPerView: 3,
			spaceBetween: 150,
			centeredSlides: true,
			simulateTouch: false,
			keyboard: {
				enabled: true,
			},
			a11y: {
				enabled: false
			},
			on: {
				init(){
					
				},
				slideChangeTransitionEnd(){
					loadVideo(document.querySelector(".stories-popup__slider .swiper-slide-active .swiper-slide-active .popup-slider__content"), document.querySelector(".stories-popup__slider .swiper-slide-active .popup-slider").swiper)

					const popupGoods = document.querySelector(`.stories-popup__slider .swiper-slide-active .swiper-slide-active .current-googs`);

					writePopupGoods(popupGoods ? popupGoods.value : [])
				}
			},
			breakpoints: {
				1600: {
					spaceBetween: 80
				},
				1300: {
					spaceBetween: 30
				},
				1000: {
					spaceBetween: 10,
					slidesPerView: 1
				}
			}
		})

		$(".stories-list .story").click(function(){
			const $this = $(this),
				id = $this.attr("data-id");

			$(".stories__popup").addClass("js__visible")

			mainPopupSlider.slideTo(id)

			$("body").addClass("js__fixed")

			loadVideo(document.querySelector(".stories-popup__slider .swiper-slide-active .swiper-slide-active .popup-slider__content"), document.querySelector(".stories-popup__slider .swiper-slide-active .popup-slider").swiper)

			const popupGoods = document.querySelector(`.stories-popup__slider .swiper-slide-active .swiper-slide-active .current-googs`);

			writePopupGoods(popupGoods ? popupGoods.value : [])
		})

		$(".stories-popup__slider > .swiper-wrapper > .swiper-slide").click(function(){
			const $this = $(this),
				index = $this.index();

			if ($this.hasClass(".swiper-slide-active"))
				return

			mainPopupSlider.slideTo(index)
		})
	};

	const loadVideo = (slideContent, slider) => {
		if (currentActiveVideo)
			currentActiveVideo.pause()

		clearTimeout(curImgTimeout)

		const $activeBullet = $(slider.el).find(".swiper-pagination-bullet-active .swiper-pagination-bullet-progress");

		$(slider.el).find(".swiper-pagination .swiper-pagination-bullet-progress").removeAttr("style")

		if (slideContent instanceof HTMLVideoElement){
			slideContent.addEventListener("ended", function(){
				slider.slideNext()
			}, {once: true})

			slideContent.addEventListener("timeupdate", function(){
				console.log((this.currentTime / this.duration).toFixed(2))
				$activeBullet.css({
					transform: `scaleX(${(this.currentTime / this.duration).toFixed(2)})`
				})
			})

			currentActiveVideo = slideContent

			currentActiveVideo.play()
		}
		else{
			currentActiveVideo = undefined

			$activeBullet.css({
				transform: "scaleX(1)",
				transitionProperty: "transform",
				transitionDuration: `${baseSlideTime}ms`,
				transitionTimingFunction: "ease"
			})

			curImgTimeout = setTimeout(function(){
				slider.slideNext()
			}, baseSlideTime)
		}
	}
})()

const writePopupGoods = (goodsList = []) => {
	$(".story-goods").html("")
	// console.log(goodsList)
	if (!goodsList.length){
		$(".stories__goods, .stories__goods-title").fadeOut()
		return
	}
	// console.log("1231231221321")
	// console.log(goodsList)
// 
	$(".stories__goods, .stories__goods-title").fadeIn()

	let goodsHTML = ""

	for (let i = 0; i < eval(goodsList).length; i++){
		let currentGoods = eval(goodsList)[i];

		// console.log(currentGoods)		

		goodsHTML += `<div class="story-goods__item">
			<div class="story-good">
				<a href="${currentGoods.link}" class="story-good__img">
					<img src="${currentGoods.img}"/>
				</a>
				<div class="story-good__desc">
					<div class="story-good__desc-category">${currentGoods.category}</div>
					<a href="${currentGoods.link}" class="story-good__desc-title">${currentGoods.title}</a>
					<div class="story-good__desc-price">${currentGoods.price}</div>
				</div>
			</div>
		</div>`
	}

	$(".story-goods").html(goodsHTML)
}