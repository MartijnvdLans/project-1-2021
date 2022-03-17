export function loadingState() {
    const ul = document.querySelector('ul:nth-of-type(2)');
    const placeholder = document.querySelector('section:nth-of-type(1)');
    const errMessage = document.querySelector('section:nth-of-type(2)');
    let h2 = document.querySelector(".results");
    h2.innerHTML = "";
    ul.innerHTML = "";

    const ulLoader = document.querySelector("ul:nth-of-type(1)");
    ulLoader.classList.remove('displayNone');
    errMessage.classList.add('displayNone');
    placeholder.classList.add('displayNone');
}