export function errorState() {
    const ulLoader = document.querySelector('ul:nth-of-type(1)');
    const errState = document.querySelector('section');
    ulLoader.classList.add('displayNone');
    errState.classList.remove('displayNone');
    
    routie(`error`);
}