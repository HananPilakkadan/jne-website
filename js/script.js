var loader = document.getElementById("loader");
window.addEventListener("load", function () {
  loader.style.display = "none";
  this.document.body.style.overflow = "visible";
});

// smooth-scrolling
function scrollTopBtn() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
$(document).ready(function () {
  var swiper = new Swiper(".swiper", {
    effect: "coverflow",
    grabCursor: false,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 15,
      stretch: 0,
      depth: 150,
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

  // text-box-slider
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
  //   mobile-menu
  function MobileMenu() {
    let menuIcon = document.querySelector(".hamburger");
    let body = document.querySelector("body");
    let overlay = document.querySelector(".overlay");
    menuIcon.addEventListener("click", function () {
      body.classList.toggle("active");
    });
    overlay.addEventListener("click", function () {
      body.classList.remove("active");
    });
    $(".mobile-menu ul li").click(() => {
      body.classList.remove("active");
    });
  }
  MobileMenu();

  //   activating-main-header-elements
  $("header .menu li").click(function () {
    $("header .menu li.active").removeClass("active");
    $(this).addClass("active");
  });

  //   activating-elements-mobile-menu
  $(".mobile-menu ul li").click(function () {
    $("header .mobile-menu li.active").removeClass("active");
    $(this).addClass("active");
  });

  // latest-things-slider
  $(".latest").slick({
    lazyLoad: "ondemand",
    dots: true,
    arrows: true,
    prevArrow:
      '<button class="slide-arrow prev-arrow"><i class="fas fa-chevron-left"></i></button>',
    nextArrow:
      '<button class="slide-arrow next-arrow"><i class="fas fa-chevron-right"></i></button>',
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 481,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
  $("#button-submit").click(function () {
    swal({
      title: "Thank You",
      text: "Your Message Is Received",
      icon: "success",
      button: "Ok",
    });
  });
});
AOS.init();
