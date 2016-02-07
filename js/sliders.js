/*==============================
=            Slider            =
==============================*/

/* Initialize Intro */
function updateDescription(event){
  var items          = $("#performance-videos .item-video");
  var index          = event.item.index;
  var description    = $(items[index]).data("description");
  var descriptionBox = $("#performer-video-description");

  descriptionBox.fadeOut('slow', function(){
    descriptionBox.html(description);
    descriptionBox.fadeIn('slow');
  })
}

$(document).ready(function() {
  $('.owl-carousel').owlCarousel({
    items: 1,
    merge: true,
    loop: true,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    dots: true,
    nav:  false,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    animateOut: false,
    video: true,
    center: true,
    lazyLoad: true,
  }).on('changed.owl.carousel', updateDescription);
});

/*-----  End of Slider  ------*/
