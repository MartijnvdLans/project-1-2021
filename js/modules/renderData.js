export function renderData(data) {
    const main = document.querySelector('main');
    const results = data.results;
    console.dir(results);
    results.forEach((item, i) => {
    const html = `
            <article>
                <section>
                <h2>${item.titles[0]}</h2>
                <p>${item.summaries ? item.summaries[0] : 'Geen samenvatting'}</p>
                </section>
                <img src="${
                item.coverimages ? item.coverimages[1] : 'Geen samenvatting'
                }">
            </article>
            `;
    main.insertAdjacentHTML('beforeend', html);
    });
}