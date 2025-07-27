import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'

export const Slide = () => {
    const slideSize = () => {
        const webCenter = document.querySelector(".header_wrap").offsetWidth;
        const playnowEl = document.querySelector(".playnow");
        const paddingHalf = (innerWidth - webCenter) / 2;
        playnowEl.style.width = `${innerWidth - paddingHalf}px`;
        playnowEl.style.marginLeft = `${paddingHalf}px`;
    }
    
    slideSize();
    window.addEventListener("resize", slideSize);
    
    const playnow = new Swiper('.playnow-slider', {
        slidesPerView: 3.5,
        spaceBetween: 20,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        scrollbar: {
            el: '.swiper-scrollbar',
        },
        });
};