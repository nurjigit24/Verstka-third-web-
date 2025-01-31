


const swiperOne = new Swiper('.swiperOne', {
  slidesPerView: 3,
  spaceBetween: 24,
  simulateTouch: false,
  speed: 700,

  pagination: {
    el: '.swiper-pagin',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-next',
    prevEl: '.swiper-prev',
  },
})
