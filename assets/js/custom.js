//buy
function buy(id) {
   products.forEach(element => element.id === id ? cart.push(element): null)}


//filtrar per categories
function getProductsFromCategory(category) {
   const productsCategory = products.filter(element => element.type === category);
   return productsCategory
};

//filtrar per subtypes
function getProductsFromSubtype(category) {
   const productsSubtype = products.filter(element => element.subtype === category);
   return productsSubtype
}

