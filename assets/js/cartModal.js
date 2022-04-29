function printCartModal(){
  const printModal = document.getElementById('itemsModal');
  printModal.innerHTML = '';
  
  cart.forEach(itemsModal =>{
      templateCarrito.querySelector('th').textContent = itemsModal.id
      templateCarrito.querySelectorAll('td')[0].textContent = itemsModal.name
      templateCarrito.querySelectorAll('td')[1].textContent = itemsModal.price
      templateCarrito.querySelectorAll('td')[2].textContent = itemsModal.quatity
      templateCarrito.querySelector('span').textContent = itemsModal.subtotal
      const clone = templateCarrito.cloneNode(true)
      fragment.appendChild(clone) 
  })
  printModal.appendChild(fragment)

  const footer = document.querySelector('#totalCarrito');
  footer.textContent = '$' + calculateTotal();
  /* footer.appendChild(); */
}
