import { noticeData } from "../../data/noticeData.js";

export const Notice = () => {
    const noticeList = document.querySelector("#notice");

    if (!noticeList) return;
    
    noticeList.innerHTML = noticeData.map(({category, titlle, date, url}) => {
        return`
        <li>
            <a href="/customer/notice/detail/${url}">
                <div class="category">${category}</div>
                <div class="titlle">${titlle}</div>
                <div class="date">${date}</div>
            </a>
        </li>
        `
    }).join('');
};
