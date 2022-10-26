var swiper = new Swiper(".mySwiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
    autoplay: {
        delay: 3000,
    },
    speed: 800
});

//slidechange:이벤트명, function: 콜백함수(이벤트 내용...)
swiper.on('slideChange', function () {
    console.log('slide changed');
});