jQuery(document).ready(function ($) {
  $("#banner-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 8000,
    // margin: 30,
    // nav: false,
    items: 1,
    // itemElement: "section",
    // navElement: "span",
    // dots: true,
  });

  $("#partners").owlCarousel({
    loop: true,
    autoplay: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 2,
        margin: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
        margin: 20,
        stagePadding: 20,
      },
    },
  });

  $("#highlight").owlCarousel({
    loop: true,
    autoplay: true,
    margin: 30,
    nav: false,
  })
   
});
