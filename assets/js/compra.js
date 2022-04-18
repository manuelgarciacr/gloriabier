import { cart,cartQ } from "./custom.js";

//const pintarCarrito = () => {
const llista = document.getElementById("items");
console.log(llista);
console.log(cart);
console.log(cartQ);

cart.forEach(item => {
    templateCarrito.querySelector('th').textContent = item.id
    templateCarrito.querySelectorAll('td')[0].textContent = item.name
    templateCarrito.querySelectorAll('td')[1].textContent = item.price
    templateCarrito.querySelectorAll('td')[2].textContent = item.quantity
    // templateCarrito.querySelector('span').textContent = item.subtotal
    const clone = templateCarrito.cloneNode(true)
    fragment.appendChild(clone)},
    llista.appendChild(fragment))
