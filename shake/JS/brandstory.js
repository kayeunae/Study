var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  freeMode: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    // 호출(pager) 여부
    el: ".swiper-pagination", //버튼을 담을 태그 설정
    clickable: true, // 버튼 클릭 여부
  },
  loop: true, // 슬라이드 반복 여부
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
