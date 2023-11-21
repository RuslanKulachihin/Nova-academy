$(document).ready(function () {
  $('.reviews-slider').slick({
    arrows: true,
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    adaptiveHeight: true,
    adaptiveWidth: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          arrows: false,
          dots: true
        }
      }
    ]
  });
});

$(document).ready(function () {
  $('.cases-right__cards').slick({
    arrows: true,
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    adaptiveHeight: true,
    adaptiveWidth: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          arrows: false,
          dots: true
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
    ]
  });
});
