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
        1200: {
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
        1200: {
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
          768: {
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
        768: {
        

          slidesPerView: 2,
          spaceBetween: 30,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      },
    });
  });


  var companyRatingsSliders = Array.prototype.slice.call(document.querySelectorAll('.js-company-ratings-slider'));


  companyRatingsSliders.forEach(function(element) {
    var container = element.querySelector(".swiper-container");

    new Swiper(container, {
      slidesPerView: 'auto',
      watchOverflow: true,
      spaceBetween: 20,
      centerInsufficientSlides: true,
      navigation: {
        nextEl: element.querySelector(".slider-universal-arrow--next"),
        prevEl: element.querySelector(".slider-universal-arrow--prev"),
      },
      breakpoints: {
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      },
    });
  })


  var ratingsTabs = Array.prototype.slice.call(document.querySelectorAll('.js-ratings-tabs'));

  ratingsTabs.forEach(function(element) {
    var links = Array.prototype.slice.call(element.querySelectorAll('.company-ratings__tabs-nav-link'));
    var items = Array.prototype.slice.call(element.querySelectorAll('.company-ratings__tabs-item'));

    if (links.length !== items.length) {
      console.error('Not equal amount of elements');
      return;
    }

    function setActiveTab(index) {
      links.forEach(function(link) {
        link.classList.remove('active');
      })
      items.forEach(function(item) {
        item.classList.remove('active');
      })

      links[index].classList.add('active');
      items[index].classList.add('active');
    }

    links.forEach(function(link, linkIndex) {
      link.addEventListener('click', function(event) {
        event.preventDefault();
        setActiveTab(linkIndex)
      })
    })

    setActiveTab(0);
  })
});
