document.addEventListener("DOMContentLoaded", function () {
  var projectsSliders = Array.prototype.slice.call(
    document.querySelectorAll(".js-projects-slider")
  );

  projectsSliders.forEach(function (element) {
    var container = element.querySelector(".swiper-container");

    new Swiper(container, {
      slidesPerView: "auto",
      watchOverflow: true,
      spaceBetween: 20,
      navigation: {
        nextEl: element.querySelector(".slider-universal-arrow--next"),
        prevEl: element.querySelector(".slider-universal-arrow--prev"),
      },
      breakpoints: {
        969: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      },
    });
  });

  var behindServiceSliders = Array.prototype.slice.call(
    document.querySelectorAll(".js-behind-service-slide")
  );

  behindServiceSliders.forEach(function (element) {
    var container = element.querySelector(".swiper-container");

    new Swiper(container, {
      slidesPerView: "auto",
      watchOverflow: true,
      spaceBetween: 20,
      navigation: {
        nextEl: element.querySelector(".slider-universal-arrow--next"),
        prevEl: element.querySelector(".slider-universal-arrow--prev"),
      },
      breakpoints: {
        969: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      },
    });
  });
  var brandsSliders = Array.prototype.slice.call(
    document.querySelectorAll(".js-brands-slider")
  );

  if (window.matchMedia("(max-width: 968px)").matches) {
    brandsSliders.forEach(function (element) {
      var container = element.querySelector(".swiper-container");

      new Swiper(container, {
        slidesPerView: 2,
        watchOverflow: true,
        slidesPerColumnFill: 'row',
        slidesPerColumn: 2,
        spaceBetween: 0,
        breakpoints: {
          501: {
            slidesPerView: 4,
            spaceBetween: 0,
            slidesPerColumn: 1,
          },
        },
      });
    });
  }

  var companyNewsSliders = Array.prototype.slice.call(
    document.querySelectorAll(".js-company-news-slider")
  );

  companyNewsSliders.forEach(function (element) {
    var container = element.querySelector(".swiper-container");

    new Swiper(container, {
      slidesPerView: 1,
      watchOverflow: true,
      spaceBetween: 20,
      navigation: {
        nextEl: element.querySelector(".slider-universal-arrow--next"),
        prevEl: element.querySelector(".slider-universal-arrow--prev"),
      },
      breakpoints: {
        501: {
        

          slidesPerView: 2,
          spaceBetween: 30,
        },
        969: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      },
    });
  });
});
