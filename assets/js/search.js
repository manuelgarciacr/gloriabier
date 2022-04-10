const search = document.querySelector('#search');
const todos = document.querySelectorAll('ul li');
const notFound = document.querySelector('#notFound');

search.addEventListener('keyup', filterFunctionality);

function filterFunctionality(e) {
    let searching = e.target.value.toLowerCase();
  

    [...todos].forEach(todo => {
      let todoContent = todo.textContent;
      if (todoContent.toLowerCase().includes(searching)) {
        todo.style.display = 'block';
      } else {
        todo.style.display = 'none';
      }
    });
  
    // Mostrar que no s'ha trobat
    let result = [...todos].every(todo => {
      return todo.style.display === 'none';
    });
  
    result === true
      ? (notFound.style.display = 'block')
      : (notFound.style.display = 'none');
  
  }

    // Filtre tot
    [...todos].forEach(todo => {
        let todoContent = todo.textContent;
        if (todoContent.toLowerCase().includes(searching)) {
          todo.style.display = 'block';
        } else {
          todo.style.display = 'none';
        }
      });