import { products as productsAll } from "./data.js";
import { cart, cartQ, buy } from "./custom.js";

const cartBadge = document.querySelector("span.cart.badge");

const url_string = window.location.href;
const prodOk = url_string.indexOf('shop-single.html') >= 0;
const packOk = url_string.indexOf('promocions-single-1.html') >= 0 ||
    url_string.indexOf('promocions-single-2.html') >= 0;
// Si estoy en la página detalle de producto
if (prodOk || packOk) {
    // Obtengo el id del producto de la url de la página
    const url = new URL(url_string);
    const id = parseInt(url.searchParams.get("id"));
    // Busco el producto
    const prod = productsAll.filter(p => p.id === id)[0];
    // Busco la imagen en la página
    const img = document.querySelector("section.content div>img");
    // La actualizo
    img.setAttribute('src', (typeof prod.img === 'string') ? prod.img : prod.img[0]);
    img.setAttribute('alt', prod.name);
    img.setAttribute('title', prod.name);
    // Busco el nombre y lo actualizo
    const name = document.querySelector("div.card-body>h1.h2");
    name.innerText = prod.name;
    // Busco el precio y lo actualizo
    const precio = document.querySelector("div.card-body>p.h3");
    // Lo actualizo
    precio.innerText = prod.price + '€';
    // Actualizo las miniaturas
    const thumbs = document.querySelector("div.row.thumbs");
    const carr = document.querySelectorAll("#multi-item-example div.carousel-item")

    if (!Array.isArray(prod.img) || prod.img.length <= 1)
        // Si no hay imágenes, o solo hay una no muestro miniaturas
        thumbs.style.display = "none";
    else {
        // Si hay más de una imágenes cargo el primer carrusel
        const divs = carr[0].querySelectorAll("div.row>div");
        divs.forEach((div, idx) => {
            if (prod.img[idx]) {
                const img = div.querySelector("img")
                img.setAttribute('src', prod.img[idx]);
                img.setAttribute('alt', prod.name);
                img.setAttribute('title', prod.name);
            } else {
                div.style.display = "none";
            }
        })
        if (carr[1])
            carr[1].remove();
        if (carr[2])
            carr[2].remove()
    }
    // Añado eventos click al carrito
    const divButtons = document.querySelector("div.cart-buttons");
    divButtons.addEventListener("click", ev => {
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
                localStorage.setItem("cart", JSON.stringify(cart));
                localStorage.setItem("cartQ", JSON.stringify(cartQ));
                cartBadge.innerText = cart.length;
            } else {
                cartQ[idx] = cartQ[idx] + q;
                localStorage.setItem("cartQ", JSON.stringify(cartQ))
            }
            inputQ.value = "1";
            spanQ.innerText = "1";
        }
        if (btn.value === "buy") {
            console.table(cart);
            console.table(cartQ);
            cart.splice(0);
            cartQ.splice(0);
            localStorage.setItem("cart", JSON.stringify(cart));
            localStorage.setItem("cartQ", JSON.stringify(cartQ))
            inputQ.value = "1";
            spanQ.innerText = "1";
            cartBadge.innerText = "";
        }
    }, true);
}

