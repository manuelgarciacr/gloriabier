import { cart, cartQ } from "./custom.js";
import productsAll from "./data.json" assert { type: "json" };
import { buy } from "./custom.js";

const fragment = document.createDocumentFragment()
const pintarCarrito = () => {
const llista = document.getElementById("items");
cart.forEach((item) => {
  templateCarrito.querySelector("th").textContent = item.id;
  templateCarrito.querySelectorAll("td")[0].textContent = item.name;
  templateCarrito.querySelectorAll("td")[1].textContent = item.price;
  templateCarrito.querySelectorAll("td")[2].textContent = item.quantity;
  // templateCarrito.querySelector('span').textContent = item.subtotal
  const clone = templateCarrito.cloneNode(true);
  fragment.appendChild(clone);
}, llista.appendChild(fragment))}
