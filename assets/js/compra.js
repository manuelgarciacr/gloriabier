import { cart, cartQ } from "./custom.js";
import productsAll from "./data.json" assert { type: "json" };
import { buy } from "./custom.js";
const templateCarrito=document.getElementById("carrito")
const fragment = document.createDocumentFragment()
const pintarCarrito = () => {
const llista = document.getElementById("items");
cart.forEach((item, idx) => {
  //creem la cela i la fila
  // let row = document.createElement("tr");
  // let cell = document.createElement("td");
  // //preu per item i quantitat
  // cell.innerHTML(item.price * cartQ[idx]),
  // row.appendChild(cell),
  // llista.appendChild(row),
  // //l'id del producte
  // cell.innerHTML(item.id),
  // row.appendChild(cell),
  // llista.appendChild(row),
  // //preu de l'item
  // cell.innerHTML(item.price),
  // row.appendChild(cell),
  // llista.appendChild(row),
  // //quantitat
  // cell.innerHTML(item.quantity),
  // row.appendChild(cell),
  // llista.appendChild(row),
  
  templateCarrito.querySelector("th").textContent = item.id;
  templateCarrito.querySelectorAll("td")[0].textContent = item.name;
  templateCarrito.querySelectorAll("td")[1].textContent = item.price;
  templateCarrito.querySelectorAll("td")[2].textContent = item.quantity;
  templateCarrito.querySelector('span').textContent = (item.price * cartQ[idx])
  const clone = templateCarrito.cloneNode(true);
  fragment.appendChild(clone);
}, llista.appendChild(fragment))}
