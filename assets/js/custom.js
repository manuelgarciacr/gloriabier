// Persistence
//
const cartJSON = localStorage.getItem("cart") || "[]";
export const cart = JSON.parse(cartJSON);
const cartQJSON = localStorage.getItem("cartQ") || "[]";
export const cartQ = JSON.parse(cartQJSON);
const cartBadge = document.querySelector("span.cart.badge");
cartBadge.innerText = cart.length || "";
export const productsAll = [];

await fetch('http://localhost:3000/products', {
    method: 'get'
}).then(res => 
    res.json()
).then(res => 
    productsAll.splice(0, ...res)
).catch(err => 
    console.log(err)
);
//
// End Persistence

//buy
export function buy(products, id) {
    products.forEach(element => element.id === id ? cart.push(element) : null)
}

//filtrar per categories
export function getProductsFromCategory(products, category) {
    const productsCategory = products.filter(element => element.type === category);
    return productsCategory
};

//filtrar per subtypes
export function getProductsFromSubtype(products, category) {
    const productsSubtype = products.filter(element => element.subtype === category);
    return productsSubtype
}

// Filtrar productos por type y subtype
export const filterProducts = (products, type, subtype) => {
    let filteredProducts = getProductsFromCategory(products, type);
    if (subtype !== "all")
        filteredProducts = getProductsFromSubtype(filteredProducts, subtype);
    return filteredProducts
}

export const setFilter = (type, subtype) => {
    localStorage.setItem("type", type);
    localStorage.setItem("subtype", subtype)
}

export const getFilter = () => {
    const type = localStorage.getItem("type") || "Cerveses";
    const subtype = localStorage.getItem("subtype") || "all";
    return { 'type': type, 'subtype': subtype }
}
