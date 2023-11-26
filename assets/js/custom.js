// Courses Card Slider Section
const handleCoursesCardSlider = ({
  wrapperClass,
  nextElClass,
  prevElClass,
}) => {
  const swiperUiUxDesign = new Swiper(wrapperClass, {
    slidesPerView: 3,
    spaceBetween: 30,

    // Navigation arrows
    navigation: {
      nextEl: nextElClass,
      prevEl: prevElClass,
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
  spaceBetween: 120,
  slidesPerView: 2,
  slidePerGroup: 1,

  pagination: {
    el: ".testimonial-swiper-pagination",
    clickable: true,
  },
});

// FAQ Accordion Section
const edumyFaqAccordion = document.querySelectorAll("._edumy_faq_accordion");

edumyFaqAccordion.forEach((accordion) => {
  const faqAccordionHeader = accordion.firstElementChild;
  const faqAccordionBody = accordion.lastElementChild;
  const faqAccordionHeaderHeight = faqAccordionHeader.clientHeight;
  const faqAccordionBodyHeight = faqAccordionBody.clientHeight;
const accP = parseInt(faqAccordionBody.style.paddingBottom)

console.log(accP)
  const accordionActiveClass = "_edumy_faq_accordion_active";

  accordion.style.transition = "all .4s ease-in-out";
  accordion.style.overflow = "hidden";

  if (accordion.classList.contains(accordionActiveClass)) {
    accordion.style.height = `${
      faqAccordionHeaderHeight + faqAccordionBodyHeight
    }px`;
    accordion.classList.add(accordionActiveClass);
  } else {
    accordion.style.height = `${faqAccordionHeaderHeight}px`;
    accordion.classList.remove(accordionActiveClass);
  }

  faqAccordionHeader.addEventListener("click", () => {
    if (accordion.classList.contains(accordionActiveClass)) {
      accordion.style.height = `${faqAccordionHeaderHeight}px`;
      accordion.classList.remove(accordionActiveClass);
    } else {
      accordion.style.height = `${
        faqAccordionHeaderHeight + faqAccordionBodyHeight
      }px`;
      accordion.classList.add(accordionActiveClass);
    }
  });
});
