/*==============================
=            Slider            =
==============================*/

/* Initialize Intro */
function updateDescription(){
  var description    = $("#performance-videos").find(".active .item-video").first().data("description")
  var descriptionBox = $("#performer-video-description");

  descriptionBox.fadeOut('slow', function(){
    descriptionBox.html(description);
    descriptionBox.fadeIn('slow')
  })
}

$('.owl-carousel').owlCarousel({
  items: 1,
  loop: true,
  autoplay: true,
  autoplayTimeout: 4000,
  dots: true,
  nav:  false,
  navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
  responsive: true,
  animateOut: false,
  video: true,
  center: true,
  lazyLoad: true,
}).on('changed.owl.carousel', updateDescription);

/*-----  End of Slider  ------*/
