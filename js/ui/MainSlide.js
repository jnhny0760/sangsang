import { mainSlideData } from "../../data/mainSlideData.js";
import { bindSlideData } from "./bindSlideData.js";


const filterData = (keyward) => {
    const result = mainSlideData.filter((item) => {
        return item.tabId === keyward;
    });
    bindSlideData(result);
};


export const MainSlide = () => {
    const buttons = document.querySelectorAll('.tab-list button');
    const title = document.querySelector('.playnow_title span');
    const info = document.querySelector('.slide-wrap');

    buttons.forEach((button) => {
        button.addEventListener('click', (e) => {
            const isText = e.target.textContent;
            title.textContent = isText;

            info.classList.remove('all','hongdae','nonsan','chuncheon','daechi','busan');

            switch (isText) {
                case '전체':
                    info.classList.add('all');
                    bindSlideData(mainSlideData);
                    break;
                case '홍대':
                    info.classList.add('hongdae');
                    filterData('hongdae');
                    break;
                case '논산':
                    info.classList.add('nonsan');
                    filterData('nonsan');
                    break;
                case '춘천':
                    info.classList.add('chuncheon');
                    filterData('chuncheon');
                    break;
                case '대치':
                    info.classList.add('daechi');
                    filterData('daechi');
                    break;
                case '부산':
                    info.classList.add('busan');
                    filterData('busan');
                    break;
            
                default:
                    break;
            }
        });
    });

};