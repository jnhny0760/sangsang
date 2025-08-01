export const Search = (keyward) => {

    const openSearch = document.querySelector('.header .btn-search');
    const closeSearch = document.querySelector('.search .btn-close');
    const SearchDialog = document.querySelector('.search');
    const input = document.querySelector("input");
    const SearchBtn = SearchDialog.querySelector('.btn-search');

    openSearch.addEventListener('click', () => {
        SearchDialog.show();
    });

    closeSearch.addEventListener("click", () => {
        SearchDialog.close();
    });

    SearchBtn.addEventListener("click", (e) => {
        e.preventDefault();

        const isValue = input.value;
        
        location.href = `/${keyward}?searchKeyWord=${isValue}`;
        return isValue;
    });
};
