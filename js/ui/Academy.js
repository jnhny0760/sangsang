import { ACADEMYList } from "../../data/academyData.js";
import { Tab } from "./Tab.js";

const handleHash = (selector) => {
    const buttons = selector.querySelectorAll('button');
    buttons.forEach((button) => {
        button.addEventListener("click", (e) => {
            const text = e.target.textContent.replace("#", "");
            const result = ACADEMYList.filter((item) => {
                return item.category === text;
            });
            console.log(result);
            Academy(result);
            
        });
    });
};

export const Academy = (arry = ACADEMYList) => {
    const list = document.querySelector("#academy");
    if (!list) return;

    list.innerHTML = arry
    .slice(0, 12)
    .map(({title, image, area, category, applyDate, startDate}) => {
    return `
        <li>
        <a href="/">
            <div class="title">${title}</div>
            <div class="thumbnail"><img src="${image}" alt=""></div>
            <span class="badge ${area.toLowerCase()}">${area}</span>
            <div class="category">${category}</div>
            <div class="date"><span>접수</span><span>${applyDate}</span></div>
            <div class="date"><span>강의</span><span>${startDate}</span></div>
        </a>
        </li>
    `;
    }).join("")
};

export const AcademyHash = () => {
    const hashList = document.querySelector("#academyHash");
    if (!hashList) return;

    const arry = ACADEMYList.map(({ category }) => { return category; });
    
    const newArry = [...new Set(arry)];
    
    hashList.innerHTML = newArry
        .map((category) => {
            return`
                <li><button type="button">#${category}</button></li>
            `
        })
        .join("");

    Tab("#academyHash");
    handleHash(hashList);
};