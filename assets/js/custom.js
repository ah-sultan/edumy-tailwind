// Header Sticky Nav
const header = document.getElementById("header");

window.addEventListener("scroll", () => {
  if (window.pageYOffset >= 300) {
    header.classList.add("sticky-nav");
  } else {
    header.classList.remove("sticky-nav");
  }
});

// Mobile Nav Toggle

const mobileNav = document.getElementById("mobile-nav");
const mobileShowBtn = document.getElementById("show-mobile-nav-btn");
const mobileHideBtn = document.getElementById("hide-mobile-nav-btn");
const overlay = document.getElementById("overlay");

mobileShowBtn.addEventListener("click", () => {
  mobileNav.style.transform = "translateX(0)";
  overlay.style.display = "block";
  document.body.style.overflowY = "hidden";
});

mobileHideBtn.addEventListener("click", () => {
  mobileNav.style.transform = "translateX(-100%)";
  overlay.style.display = "none";
  document.body.style.overflowY = "unset";
});

// Courses Card Slider Section
const handleCoursesCardSlider = ({
  wrapperClass,
  nextElClass,
  prevElClass,
}) => {
  const swiperUiUxDesign = new Swiper(wrapperClass, {
    slidesPerView: 1,
    spaceBetween: 30,
    speed: 600,

    // Navigation arrows
    navigation: {
      nextEl: nextElClass,
      prevEl: prevElClass,
    },

    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 24,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 24,
      },

      1200: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });
};

handleCoursesCardSlider({
  wrapperClass: ".ui-ux-swiper",
  nextElClass: ".ux-ui-swiper-next",
  prevElClass: ".ux-ui-swiper-prev",
});

// Testimonial Card Slider Section
const swiperTestimonial = new Swiper(".testimonial-swiper", {
  speed: 600,
  spaceBetween: 48,
  slidesPerView: 1,
  slidePerGroup: 1,

  pagination: {
    el: ".testimonial-swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    1024: {
      slidesPerView: 2,
      spaceBetween: 120,
    },
  },
});

// FAQ Accordion Section
const edumyFaqAccordion = document.querySelectorAll("._edumy_faq_accordion");

edumyFaqAccordion.forEach((accordion) => {
  // Get Accordion Header & Body
  const faqAccordionHeader = accordion.firstElementChild;
  const faqAccordionBody = accordion.lastElementChild;

  // Get Accordion Client Height
  const faqAccordionHeaderHeight = faqAccordionHeader.clientHeight;
  const faqAccordionBodyHeight = faqAccordionBody.clientHeight;

  // Get Accordion Padding Bottom
  const faqAccordionPaddingBottom =
    window.getComputedStyle(accordion).paddingBottom;

  // Style Accordion
  accordion.style.transition = "all .4s ease-in-out";
  accordion.style.overflow = "hidden";

  // Defined Accordion Active Class
  const accordionActiveClass = "active-accordion";

  // If Has Active Class On Accordion Initially Then It Will Active
  if (accordion.classList.contains(accordionActiveClass)) {
    accordion.style.height = `calc(${
      faqAccordionHeaderHeight + faqAccordionBodyHeight
    }px + ${faqAccordionPaddingBottom})`;
    accordion.classList.add(accordionActiveClass);
  } else {
    accordion.style.height = `calc(${faqAccordionHeaderHeight}px + ${faqAccordionPaddingBottom})`;
    accordion.classList.remove(accordionActiveClass);
  }

  // Accordion Activation Toggler
  faqAccordionHeader.addEventListener("click", () => {
    if (accordion.classList.contains(accordionActiveClass)) {
      // If Accordion Active it will be Deactivate
      accordion.style.height = `calc(${faqAccordionHeaderHeight}px + ${faqAccordionPaddingBottom})`;
      accordion.classList.remove(accordionActiveClass);
    } else {
      // If Accordion Deactivate  it will be Active
      accordion.style.height = `calc(${
        faqAccordionHeaderHeight + faqAccordionBodyHeight
      }px + ${faqAccordionPaddingBottom})`;
      accordion.classList.add(accordionActiveClass);
    }
  });
});

// Scroll Top Btn

const scrollTopBtn = document.getElementById("scroll-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset >= 300) {
    scrollTopBtn.style.opacity = "1";
    scrollTopBtn.style.rotate = "0deg";
  } else {
    scrollTopBtn.style.opacity = "0";
    scrollTopBtn.style.rotate = "180deg";
  }
});

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
