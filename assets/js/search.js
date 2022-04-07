const search = document.querySelector("input#search");
console.log("SS", search)
function getProductsFromName(name) {
  const filterName = name.toUpperCase();
  const productesByName = products.filter(prod => {
    const prodName = prod.name.toUpperCase();
    return prodName.includes(filterName)
  });
  console.table(productesByName);
  return productesByName;
}

search.addEventListener("onKeyUp", ev => {
  ev.preventDefault();
  console.log(ev);
}, true);
