export function errorState(err) {
    const ulLoader = document.querySelector('ul:nth-of-type(1)');
    const errState = document.querySelector('section:nth-of-type(2)');
    ulLoader.classList.add('displayNone');
    errState.classList.remove('displayNone');
    routie(`error`);
}