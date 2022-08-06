var loader = document.getElementById("loader");
window.addEventListener("load", function () {
  loader.style.display = "none";
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
});
AOS.init();

function formHandle() {

  let fullName = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let id = document.getElementById("id").value;
  let course = document.getElementById("course").value;
  let dob = document.getElementById("dob").value;
  let gender = document.getElementById("gender").value;
  let sNumber = document.getElementById("snumber").value;
  let nameFather = document.getElementById("name-father").value;
  let nameMother = document.getElementById("name-mother").value;
  let pNumber = document.getElementById("number-parent").value;
  let institution = document.getElementById("institution").value;
  let passOut = document.getElementById("passout").value;
  let plus = document.getElementById("mark").value;
  let percentage = document.getElementById("percentage").value;

  if ((fullName && email && id && course && dob && gender && sNumber && nameFather && nameMother && pNumber && institution && passOut && plus && percentage) === "") {
    Swal.fire({
      icon: "error",
      text: "All field is required",
      title: "Try again",
      timer: 2500,
    })
    return false;
  }
}


const params = new URLSearchParams(window.location.search);
let course = params.get("course");
let fullName = params.get("fullname");
let id = params.get("id");
let dob = params.get("dob");
let gender = params.get("gender");
let email = params.get("email");
let number = params.get("snumber");
let father = params.get("name-father");
let mother = params.get("name-mother");
let parent = params.get("number-parent");
let institution = params.get("institution");
let passout = params.get("passout");
let percentage = params.get("percentage");

let courseTr = document.getElementById("info-course");
let fullNameTr = document.getElementById("info-name");
let idTr = document.getElementById("info-id");
let dobTr = document.getElementById("info-dob");
let genderTr = document.getElementById("info-gender");
let emailTr = document.getElementById("info-email");
let sNumberTr = document.getElementById("info-snumber");
let fatherTr = document.getElementById("info-father");
let motherTr = document.getElementById("info-mother");
let numberTr = document.getElementById("info-pnumber");
let institutionTr = document.getElementById("info-institution");
let passTr = document.getElementById("info-pass");
let percentageTr = document.getElementById("info-percentage");

courseTr.value = course;
fullNameTr.innerHTML = fullName;
idTr.innerHTML = id;
dobTr.innerHTML = dob;
genderTr.innerHTML = gender;
emailTr.innerHTML = email;
sNumberTr.innerHTML = number;
fatherTr.innerHTML = father;
motherTr.innerHTML = mother;
numberTr.innerHTML = parent;
institutionTr.innerHTML = institution;
passTr.innerHTML = passout;
percentageTr.innerHTML = percentage;


