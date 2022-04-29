import { buy, cart, cartQ } from "./custom.js";

// Función para finalizar compra
const checkout = () => {
    const llista = document.getElementById("items");
    const cartBadge = document.querySelector("span.cart.badge");
     
    // Vacío el carrito
    cart.splice(0);
    cartQ.splice(0);
    localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.setItem("cartQ", JSON.stringify(cartQ));
    cartBadge.innerText = '';
    
    // Vacío la lista
    llista.innerHTML = "";

    llista.innerHTML = "<h1>¡¡ Compra finalitzada !!</h1>"
}

// Función para imprimir la lista
const printList = () => {
    const llista = document.getElementById("items");

    // Vacío la lista
    llista.innerHTML = "";

    // Si el carrito está vacío no imprimo nada
    if (cart.length === 0)
        return;

    // Añado las cantidades a los productos del carrito en un nuevo array 
    //   y lo ordeno por categoría
    const sortedCart = cart.map((prod, idx) => ({...prod, 'q': cartQ[idx]}))
    .sort((a, b) => {
            if (a.type > b.type)
                return 1;
            else if (a.type < b.type)
                return -1;
            else
                return 0;
    });
    
    // Función para imprimir total
    const printTotal = (description, total, llista) => {
        const row = document.createElement("tr");
        row.innerHTML = `<td colspan="6">Total ${description}</td><td>${total}</td>`;  
        llista.appendChild(row) ;
    }
     // Variables para acumular subtotales
    let category = sortedCart[0].type;
    let subtotal = 0;
    let total = 0;
    
    sortedCart.forEach(item => {
        // Si cambiamos de categoría imprimimos el subtotal de la categoría anterior
        // acumulamos en el total e inicializamos subtotal
        if (item.type !== category) {
            printTotal(category, subtotal, llista);
            total += subtotal;
            category = item.type;
            subtotal = 0; 
        }
    
        //creem la fila i les cel·les
        const row = document.createElement("tr");
        const id = `<td>${item.id}</td>`;
        const name = `<td>${item.name}</td>`;
        const price = `<td>${item.price}</td>`;
        const q = `<td>${item.q}</td>`;
        const up =  `<td><button class="up" value="${item.id}">+</button></td>`
        const down =  `<td><button class="down" value="${item.id}">-</button></td>`
        const amount = `<td>${item.q * item.price}</td>`;
        // Botó per eliminar producte
        const remove = `<button class="remove" value="${item.id}">Eliminar</button>`
    
        // Muntem el detall i l'imprimim
        row.setAttribute("id", "row-" + item.id);
        row.innerHTML = id + name + price + q + up + down + amount + remove;
        // Si la cantidad es cero tacho el producto
        if (item.q <= 0)
            row.style.textDecoration = "line-through";
        llista.appendChild(row);
    
        // Acumulem al subtotal
        subtotal += item.q * item.price;
    });
    
    // Imprimo el último subtotal
    printTotal(category, subtotal, llista);
    total += subtotal;
    
    // Imprimo el total
    printTotal("compra", total, llista);
    
    // Añado eventos a los botones para eliminar productos
    const removeButtons = llista.querySelectorAll("button.remove");
    
    removeButtons.forEach( btn => btn.addEventListener("click", ev => {
        ev.preventDefault();

        const cartBadge = document.querySelector("span.cart.badge");
        const id = ev.target.value;
        // Busco el índice del producto en el carrito
        const idx = cart.findIndex(prod => prod.id === parseInt(id));

        if (idx >=0) {
            // Elimino el producto del carrito
            cart.splice(idx, 1);
            cartQ.splice(idx, 1);
            localStorage.setItem("cart", JSON.stringify(cart));
            localStorage.setItem("cartQ", JSON.stringify(cartQ));
            cartBadge.innerText = cart.length ? cart.length : '';
            printList();
        }
    }))

    // Añado eventos a los botones para incrementar cantidades
    const upButtons = llista.querySelectorAll("button.up");
    
    upButtons.forEach( btn => btn.addEventListener("click", ev => {
        ev.preventDefault();

        const id = ev.target.value;
        // Busco el índice del producto en el carrito
        const idx = cart.findIndex(prod => prod.id === parseInt(id));
        
        if (idx >=0) {
            // Aumento la cantidad del producto
            cartQ[idx]++;
            localStorage.setItem("cartQ", JSON.stringify(cartQ));
            printList();
        }
    }))

    // Añado eventos a los botones para decrementar cantidades
    const downButtons = llista.querySelectorAll("button.down");
    
    downButtons.forEach( btn => btn.addEventListener("click", ev => {
        ev.preventDefault();

        const id = ev.target.value;
        // Busco el índice del producto en el carrito
        const idx = cart.findIndex(prod => prod.id === parseInt(id));

        if (idx >=0 & cartQ[idx] > 0) {
            // Decremento la cantidad del producto
            cartQ[idx]--;
            localStorage.setItem("cartQ", JSON.stringify(cartQ));
            printList();
        }
    }))

    // Añado botón para finaliar compra
    llista.insertAdjacentHTML('beforeend', '<button id="checkout">FINALITZAR COMPRA</button>');
    const btn = llista.querySelector("button#checkout");

    btn.addEventListener("click", ev => {
        ev.preventDefault();
        checkout()
    })
}

printList();
