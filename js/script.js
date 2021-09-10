// PRELOADER
const preloader = document.querySelector(".preloader");

window.addEventListener("load", function () {
  preloader.classList.add("hide-preloader");
});

//owl carousel

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    nav: true,
    margin: 10,
    dots: false,
    lazyLoad: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      600: {
        items: 3,
        nav: false,
      },
      1000: {
        items: 4,
        nav: true,
        loop: false,
      },
    },
  });
});

// Aos
AOS.init({
  duration: 1000,
});
