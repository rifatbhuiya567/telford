/* 
----------------
Table Of Content
----------------
1. Sticky Navbar JS Start
2. Mobile DropdownMenu JS Start
3. Banner Slide JS Start
4. Testimonial Slide JS Start
*/

window.onscroll = () => {
  let mainHeader = document.querySelector(".main-header");
  let mobileHeader = document.querySelector(".mobile-header");

  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    mainHeader.classList.add("stick-nav");
    mobileHeader.classList.add("stick-nav");
  } else {
    mainHeader.classList.remove("stick-nav");
    mobileHeader.classList.remove("stick-nav");
  }
};
// Sticky Navbar JS End

const mobileDropdown = () => {
  let dropdown = document.querySelector(".mobile-header .dropdown a"),
    dropdownMenu = document.querySelector(".mobile-header .nav-item-dropdown");

  dropdownMenu.style.display = "none";
  $(dropdown).click(function () {
    $(dropdownMenu).toggle(500);
    $(dropdown).toggleClass("active-dropdown");
  });
};
mobileDropdown();
// Mobile DropdownMenu JS End

const mainSlider = () => {
  var myBannerSlider = $(".banner-slider");
  myBannerSlider.on("init", function (e, slick) {
    var $firstAnimatingElements = $(".banner-content:first-child").find(
      "[data-animation]"
    );
    doAnimations($firstAnimatingElements);
  });

  myBannerSlider.on(
    "beforeChange",
    function (e, slick, currentSlide, nextSlide) {
      var $animatingElements = $(
        '.banner-content[data-slick-index="' + nextSlide + '"]'
      ).find("[data-animation]");
      doAnimations($animatingElements);
    }
  );

  myBannerSlider.slick({
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 500,
    dots: true,
    fade: true,
    prevArrow: ".prev",
    nextArrow: ".next",
  });

  function doAnimations(elements) {
    var animationEndEvents =
      "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";
    elements.each(function () {
      var $this = $(this);
      var $animationDelay = $this.data("delay");
      var $animationType = "animated " + $this.data("animation");
      $this.css({
        "animation-delay": $animationDelay,
        "-webkit-animation-delay": $animationDelay,
      });
      $this.addClass($animationType).one(animationEndEvents, function () {
        $this.removeClass($animationType);
      });
    });
  }
};
mainSlider();
// Banner Slide JS End

const testimonialSlider = () => {
  var slider = $(".testimonial-slider");

  slider.slick({
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 500,
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
};
testimonialSlider();
// Testimonial Slide JS End
