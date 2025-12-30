const swiper = new Swiper(".swiper", {
    slidesPerView: 3.5 /* Show 3.5 slides at a time to reveal part of the next slide */,
    centeredSlides: true,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".right",
      prevEl: ".left",
    },
    breakpoints: {
      1024: {
        slidesPerView: 3.5,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 2.5,
        spaceBetween: 20,
      },
      480: {
        slidesPerView: 1.5,
        spaceBetween: 10,
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
    },
  });