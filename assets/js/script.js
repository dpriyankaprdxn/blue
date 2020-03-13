var hamburger = document.querySelector('.hamburger');
hamburger.addEventListener('click',hamburgerToggle);

function hamburgerToggle() {
  document.querySelector('nav').classList.toggle('showhide');
  document.querySelector('.hamburger').classList.toggle('open');
}

$(window).on('load', function() {

	$('.review-slider').slick({
	  dots: true,
	  arrows: false,
	  infinite: true,
	  autoplay: true,
	  speed: 300,
	  slidesToShow: 1
	});
});