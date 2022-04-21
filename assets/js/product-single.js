// import { products as productsAll } from "./data.js";
import productsAll from './data.json' assert { type: "json" };
import { cart, cartQ, buy } from "./custom.js";
import { filterProducts } from "./custom.js";

// Proceso la url
const url = new URL(window.location.href);
const id = parseInt(url.searchParams.get("id")); // id del producto
const prod = productsAll.find(p => p.id === id); // Producto (Object)
const subtype = url.searchParams.get("sub"); // Subtype para filtrar los productos relacionados

// Obtengo los elementos del DOM que deben ser tratados
const cartBadge = document.querySelector("span.cart.badge");
const img = document.querySelector("section.content div>img");
const name = document.querySelector("div.card-body>h1.h2");
const precio = document.querySelector("div.card-body>p.h3");
const thumbs = document.querySelector("div.row.thumbs");
const thumbsControls = thumbs.querySelectorAll("div.ctrl");
const car = document.querySelectorAll("#multi-item-example div.carousel-item")
const thumbsImgs = thumbs.querySelectorAll("div.carousel-item>div.row>div img");
const relatedContainer = document.getElementById('carousel-related-product');
const relatedSection = document.getElementById('section-related-product');
const relatedTemplate = document.getElementById('related-template');
const cartButtons = document.querySelector("div.cart-buttons");

// Actualizar miniatura
const setThumb = (img, idx) => {
    if (prod.img[idx]) {
        img.setAttribute('src', prod.img[idx]);
        img.setAttribute('alt', prod.name);
        img.setAttribute('title', prod.name);
    } else {
        img.style.display = "none";
    }
}

// Añadir producto relacionado en pantalla
const addProduct = (prod) => {
    const card = relatedTemplate.content;
    const img = card.querySelector("img.card-img");
    const a = card.querySelectorAll("a");
    const aName = card.querySelector("div.card-body>a");
    const p = card.querySelector("div.card-body>p");

    //card.querySelector('div.card').dataset.id = prod.id;
    img.setAttribute('src', (typeof prod.img === 'string') ? prod.img : prod.img[0]);
    img.setAttribute('alt', prod.name);
    img.setAttribute('title', prod.name);
    if (prod.url)
        a.forEach(el => el.setAttribute("href", prod.url + '&sub=' + subtype));
    else
        a.forEach(el => el.setAttribute("href", 'shop-single.html?id=' + prod.id + '&sub=' + subtype));

    aName.textContent = prod.name;
    p.textContent = prod.price + "€"

    // Copy template node and insert into DOM
    const node = document.importNode(card, true)
    relatedContainer.appendChild(node);
}

// Añadir todos los productos en pantalla
const loadProducts = () => {
    const products = filterProducts(productsAll, prod.type, subtype).filter(p => p.id !== prod.id);

    relatedContainer.innerHTML = "";
    if (products.length)
        products.forEach(prod => addProduct(prod));
    else
        relatedSection.style.display = "none";
}

// Actualizo el DOM
img.setAttribute('src', (typeof prod.img === 'string') ? prod.img : prod.img[0]);
img.setAttribute('alt', prod.name);
img.setAttribute('title', prod.name);
name.innerText = prod.name;
precio.innerText = prod.price + '€';

// Actualizo las miniaturas (DOM)
if (!Array.isArray(prod.img) || prod.img.length <= 1) {
    // Si no hay imágenes, o solo hay una no muestro miniaturas
    thumbs.style.display = "none";
} else {
    thumbsImgs.forEach((img, idx) => setThumb(img, idx));

    if (prod.img.length <= 6 && car[2])
        car[2].remove();

    if (prod.img.length <= 3) {
        if (car[1])
            car[1].remove();
        thumbsControls.forEach(ctrl => ctrl.style.display = "none");
    }
}

// Cargo en pantalla los productos relacionados (DOM)
loadProducts();

// Añado eventos click al carrito
cartButtons.addEventListener("click", ev => {
    ev.preventDefault();
    const btn = ev.target.closest("button");
    const inputQ = document.querySelector("#product-quantity");
    const spanQ = document.querySelector("#var-value");
    const q = parseInt(inputQ.value);

    if (btn.value === "addtocart") {
        const idx = cart.findIndex(prod => prod.id === parseInt(id));
        if (idx < 0) {
            buy(productsAll, id);
            cartQ.push(q)
            pintarCarrito() //afegit 
        } else {
            cartQ[idx] = cartQ[idx] + q;
        }
    }

    if (btn.value === "buy") {
        console.table(cart);
        console.table(cartQ);
        cart.splice(0);
        cartQ.splice(0);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.setItem("cartQ", JSON.stringify(cartQ));
    cartBadge.innerText = cart.length ? cart.length : '';
    inputQ.value = "1";
    spanQ.innerText = "1";
}, true);


