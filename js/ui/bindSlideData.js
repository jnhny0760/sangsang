export const bindSlideData = (array) => {
    const slideWrap = document.querySelector(".playnow-slider .swiper-wrapper")

    const slideArray = array.map((item) => {
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
        `;
    });
    slideWrap.innerHTML = slideArray.join("");
};