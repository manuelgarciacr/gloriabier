// import productsAll from './data.json' assert { type: "json" };
import { productsAll } from './custom.js';

const search = document.getElementById('search-id');
const searchItems = document.getElementById('search-items');

productsAll.forEach(prod => {
    const opt = document.createElement('option');
    opt.value = prod.name;
    opt.dataset.id = prod.id;
    searchItems.appendChild(opt)
});

search.addEventListener("change", ev => {
    ev.preventDefault();

    const val = ev.target.value;
    const opt = searchItems.querySelector('option[value="' + val + '"]');

    if (!val || !opt)
        return;

    const link = document.createElement('a');
    ev.target.value = "";
    link.setAttribute("href", "shop-single.html?id=" + opt.dataset.id + "&sub=all");
    link.click();
}, true);

// const search = document.querySelector("input#search");
// function getProductsFromName(name) {
//     const filterName = name.toUpperCase();
//     const productesByName = products.filter(prod => {
//         const prodName = prod.name.toUpperCase();
//         return prodName.includes(filterName)
//     });
//     console.table(productesByName);
//     return productesByName;
// }

// search.addEventListener("onKeyUp", ev => {
//     ev.preventDefault();
//     console.log(ev);
// }, true);


