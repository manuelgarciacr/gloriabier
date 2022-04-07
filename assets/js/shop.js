// import { products as productsAll } from "./data.js";
import productsAll from './data.json' assert { type: "json" };
import { filterProducts } from "./custom.js";

const filtersDiv = document.querySelector("div.shop-filters");
const container = document.querySelector("div.shop-products");
const template = document.getElementsByTagName('template')[0];
let products = [];
// Persistence
//
let type = localStorage.getItem("type") || "Cerveses";
let subtype = localStorage.getItem("subtype") || "all";
localStorage.setItem("type", type);
localStorage.setItem("subtype", subtype);
//
// End Persistence

// Añadir producto en pantalla
const addProduct = (prod) => {
    const card = template.content;
    const img = card.querySelector("img");
    const a = card.querySelectorAll("a");
    const aName = card.querySelector("div.card-body>a");
    const p = card.querySelector("div.card-body>p");

    //card.querySelector('div.card').dataset.id = prod.id;
    img.setAttribute('src', (typeof prod.img === 'string') ? prod.img : prod.img[0]);
    img.setAttribute('alt', prod.name);
    img.setAttribute('title', prod.name);
    if (prod.url)
        a.forEach(el => el.setAttribute("href", prod.url + '&sub=all'));
    else
        a.forEach(el => el.setAttribute("href", 'shop-single.html?id=' + prod.id + '&sub=' + subtype));

    aName.textContent = prod.name;
    p.textContent = prod.price + "€"

    // Copy template node and insert into DOM
    const node = document.importNode(card, true)
    container.appendChild(node);
}
// Añadir todos los productos en pantalla
const loadProducts = () => {
    products = filterProducts(productsAll, type, subtype);
    container.innerHTML = "";
    products.forEach(prod => addProduct(prod));
}

// Si estoy en la página de la tienda
// if (filtersDiv && container && template) {
    // Añado eventos click a los selectores de productos
    filtersDiv.addEventListener("click", ev => {
        ev.preventDefault();
        const select = ev.target.closest("li.select");
        if (!select)
            return;
        const typeLink = select.querySelector(":scope > a");
        if (!typeLink)
            return;
        const subtypeLink = ev.target.closest("li.select>ul>li>a");
        if (!subtypeLink)
            return;
        const typeText = typeLink.innerText;
        const subtypeText = subtypeLink.innerText;
        const all = subtypeText === "Totes" ||
            subtypeText === "Tots" ||
            subtypeText === "Tot";

        type = typeText.charAt(0).toUpperCase() + typeText.slice(1).toLowerCase();
        subtype = all ? "all" : subtypeText;
        localStorage.setItem("type", type);
        localStorage.setItem("subtype", subtype);

        loadProducts()
    }, true);
    // Carga inicial de productos en pantalla
    loadProducts();
// }
