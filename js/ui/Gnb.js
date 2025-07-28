export const initGnb = () => {

  //for gnb border-bottom
  document.querySelectorAll('.gnb > ul > li').forEach((menuItem) => {
    menuItem.addEventListener('mouseenter', () => {
      menuItem.classList.add('on');
    });

    menuItem.addEventListener('focusin', () => {
      menuItem.classList.add('on');
    });

    menuItem.addEventListener('mouseleave', () => {
      menuItem.classList.remove('on');
    });

    menuItem.addEventListener('focusout', () => {
      menuItem.classList.remove('on');
    });
  });

  //for gnb slide
  const forGnb = document.querySelectorAll('.gnb > ul > li');

  forGnb.forEach((menuItem) => {
    menuItem.addEventListener('mouseenter', () => {
      forGnb.forEach((li) => li.classList.add('gnbon'));
    });

    menuItem.addEventListener('mouseleave', () => {
      forGnb.forEach((li) => li.classList.remove('gnbon'));
    });

    menuItem.addEventListener('focusin', () => {
      forGnb.forEach((li) => li.classList.add('gnbon'));
    });

    menuItem.addEventListener('focusout', () => {
      forGnb.forEach((li) => li.classList.remove('gnbon'));
    });
  });

  //for gnb height

  const depth = Array.from(document.querySelectorAll(".gnb .depth"));
  const height = document.querySelector(".gnb .depth li").offsetHeight;
  const header = document.querySelector(".header");


  const gnbHeight = depth.map((item) => {
    return item.querySelectorAll("li").length;
  });
  const maxCount = Math.max(...gnbHeight);
  const heightRem = (maxCount * height + 20) / 10;
  header.style.setProperty("--height", heightRem + 'rem');
};



