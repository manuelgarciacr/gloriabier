<<<<<<< HEAD
/*Search*/

function searchFilter() {
    // Declaro variables
    var input, filter, name, type, a, i, data;
    input = document.getElementById('searchInput');
    filter = input.value.toUpperCase();
    name = document.getElementsByClassName("name")[0];
    type = ul.getElementsByTagName('type');
    

    // Cerca i rebuig dels que no coincideixin
    for (i = 0; i < li.length; i++) {            
        if (name[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
            name[i].style.display = "";
        } else {
            [i].style.display = "none";
        }
    }
}
=======
import productsAll from './data.json' assert { type: "json" };

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

    if (!ev.target.value)
        return;
    const val = ev.target.value;
    const opt = searchItems.querySelector('option[value="' + val + '"]');
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

>>>>>>> b650cf81aac6f7691db034b257cd3024b1f90ff6

