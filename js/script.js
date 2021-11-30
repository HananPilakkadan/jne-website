$(document).ready(function () {
  new WOW().init();

  var swiper = new Swiper(".swiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 5,
      stretch: 0,
      depth: 100,
      modifier: 2,
      slideShadows: true,
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    loop: true,
    pagination: {
      el: ".swiper-pagination",
    },
  });

  $(".owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplaySpeed: 1000,
    autoplayTimeout: 10000,
    dots: false,
    touchDrag: false,
    mouseDrag: false,
    smartSpeed: 500,
    animateIn: "slideInRight",
    animateOut: "fadeOut",
  });

  function std() {
    let students = document.querySelector(".boxes li .students");
    let counter = 0;
    setInterval(() => {
      if (counter == 500) {
        clearInterval();
      } else {
        counter += 2;
        students.textContent = counter + "+";
      }
    }, 8);
  }
  std();

  function teach() {
    let teachers = document.querySelector(".boxes li .teachers");
    let counter = 0;
    setInterval(() => {
      if (counter == 40) {
        clearInterval();
      } else {
        counter += 2;
        teachers.textContent = counter + "+";
      }
    }, 150);
  }
  teach();

  function course() {
    let courses = document.querySelector(".boxes li .courses");
    let counter = 0;
    setInterval(() => {
      if (counter == 8) {
        clearInterval();
      } else {
        counter += 1;
        courses.textContent = counter + "+";
      }
    }, 300);
  }
  course();

  function expe() {
    let experience = document.querySelector(".boxes li .experience");
    let counter = 0;
    setInterval(() => {
      if (counter == 50) {
        clearInterval();
      } else {
        counter += 1;
        experience.textContent = counter + "+";
      }
    }, 80);
  }
  expe();

  // sticky-header
  window.onscroll = function () {
    headerFunction();
  };

  var body = document.body;
  var sticky = body.offsetTop;

  function headerFunction() {
    if (window.pageYOffset > 150) {
      body.classList.add("sticky");
    } else {
      body.classList.remove("sticky");
    }
  }

  // latest-things-slider
  $(".latest").slick({
    dots: false,
    arrows: true,
    prevArrow:
      '<button class="slide-arrow prev-arrow"><i class="fas fa-chevron-left"></i></button>',
    nextArrow:
      '<button class="slide-arrow next-arrow"><i class="fas fa-chevron-right"></i></button>',
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
