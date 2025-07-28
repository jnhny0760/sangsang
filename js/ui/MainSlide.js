import { mainSlideData } from "../../data/mainSlideData.js";
import { bindSlideData } from "./bindSlideData.js";


const filterDate = (keyward) => {
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
                    filterDate('hongdae');
                    break;
                case '논산':
                    info.classList.add('nonsan');
                    filterDate('nonsan');
                    break;
                case '춘천':
                    info.classList.add('chuncheon');
                    filterDate('chuncheon');
                    break;
                case '대치':
                    info.classList.add('daechi');
                    filterDate('daechi');
                    break;
                case '부산':
                    info.classList.add('busan');
                    filterDate('busan');
                    break;
            
                default:
                    break;
            }
        });
    });

};