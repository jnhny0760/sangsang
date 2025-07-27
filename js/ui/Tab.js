export const Tab = (target) => {
    const tabWrap = document.querySelector(target);
    const tabButtons = tabWrap.querySelectorAll('button');

    tabButtons.forEach((button) => {
        button.addEventListener('click', () => {
            tabButtons.forEach((btn) => {
                btn.classList.remove('active');
            });

            button.classList.add('active');
        });
    });
};