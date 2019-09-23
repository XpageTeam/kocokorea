import $ from "jquery"

document.addEventListener("DOMContentLoaded", function(){

	$('.contacts-address__top-cont').click(function() {
		var $this = $(this);

		$this.closest('.contacts-address__item').toggleClass('js__open');
		$this.closest('.contacts-address__item').find('.contacts-address__bot-cont').slideToggle();


	})

})