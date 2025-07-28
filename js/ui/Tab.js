export const Tab = (target, options = {}) => {
    const config = {
        className : "--active",
        buttonEl : "button",
        ...options,
    };
 
    const {className, buttonEl} = config;

    const tabWrap = document.querySelector(target);

    if (!tabWrap) return;

    const tabButtons = tabWrap.querySelectorAll(buttonEl);

    const bindEvent = (el) => {
        el.addEventListener("click", () => {
            removeClass();
            addClass(el);
        });
    };

    const removeClass = () => {
        tabButtons.forEach((button) => {
            button.classList.remove(className);
        });
    };

    const addClass = (button) => {
        button.classList.add(className);
    };

    tabButtons.forEach((button) => {
        bindEvent(button);
    });
};