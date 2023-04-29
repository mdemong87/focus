const swiper = new Swiper('.letestSwiper', {
    loop: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    // If we need pagination
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        400: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    },
});


// const swiper = new Swiper('.cliectFee', {
//     loop: true,
//     autoplay: {
//         delay: 2000,
//         disableOnInteraction: false,
//     },
//     // If we need pagination
//     pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//     },
// });