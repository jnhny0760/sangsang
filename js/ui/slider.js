import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'
import { mainSlideData } from "../../data/mainSlideData.js"

export const Slide = () => {
    const slideWrap = document.querySelector(".playnow-slider .swiper-wrapper")
    const slideArray = mainSlideData.map((item) => {
    const {image, categopry, title, place, date} = item;
        return`
        <div class="swiper-slide">
            <a href="">
                <img src="${image}">
                <div class="playnow_information">
                    <div class="playnow_information_category">${categopry}</div>
                    <div class="playnow_information_title">${title}</div>
                    <div class="playnow_information_place">${place}</div>
                    <div class="playnow_information_date">${date}</div>
                </div>
            </a>
        </div>
        `
    });
    slideWrap.innerHTML = slideArray.join('');
    
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
        slidesPerView: 'auto',
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