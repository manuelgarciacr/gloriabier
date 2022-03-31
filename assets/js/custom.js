// Persistence
//
const cartJSON = localStorage.getItem("cart") || "[]";
export const cart = JSON.parse(cartJSON);
const cartQJSON = localStorage.getItem("cartQ") || "[]";
export const cartQ = JSON.parse(cartQJSON);
const cartBadge = document.querySelector("span.cart.badge");
cartBadge.innerText = cart.length || "";
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


