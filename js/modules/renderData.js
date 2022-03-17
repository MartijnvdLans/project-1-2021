export function renderData(data) {
    const ul = document.querySelector('ul:nth-of-type(2)');
    const ulLoader = document.querySelector('ul:nth-of-type(1)');
    const errState = document.querySelector('section:nth-of-type(2)');
    const results = data.results;
    console.dir(results);
    results.forEach((item, i) => {
    const html = `
            <li>
                <div>
                <h2>${item.titles[0]}</h2>
                <p>${item.summaries ? item.summaries[0] : 'Geen samenvatting'}</p>
                <a href="#details/${item.id}">
                </div>
                <img src="${
                item.coverimages ? item.coverimages[1] : 'Geen samenvatting'
                }">
            </li>
            `;
    ul.insertAdjacentHTML('beforeend', html);
    ulLoader.classList.add('displayNone');
    errState.classList.add('displayNone');
    });
}