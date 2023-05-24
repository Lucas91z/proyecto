  const input = document.getElementById('titulo-libro');
  const button = document.getElementById('buscar-libro');
  const resultados = document.getElementById('resultados');

    button.addEventListener('click', buscarLibro);

  // Función para buscar el libro
  function buscarLibro() {
        const titulo = input.value;

    // Realiza la solicitud a la API de Google Libros
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${titulo}&key=AIzaSyBg3jYXFSHKQ7WjTM8me8ciIDB3RCjFCG0`)
      .then(response => response.json())
      .then(data => mostrarResultados(data.items))
      .catch(error => console.error(error));
  }

  // Función para mostrar los resultados de la búsqueda
  function mostrarResultados(libros) {
    
    resultados.innerHTML = '';

     // Verifica si hay libros disponibles
  if (libros && libros.length > 0) {
    
    libros.forEach(libro => {
         });
  } else {
    resultados.textContent = 'No se encontraron resultados.';
  }    

    
    libros.forEach(libro => {
      const titulo = libro.volumeInfo.title;
      const autor = libro.volumeInfo.authors ? libro.volumeInfo.authors.join(', ') : 'Autor desconocido';
      const imagen = libro.volumeInfo.imageLinks ? libro.volumeInfo.imageLinks.thumbnail : '';

      
      const resultado = document.createElement('div');
      resultado.classList.add('resultado');

      
      const tituloElemento = document.createElement('h3');
      tituloElemento.textContent = titulo;

      const autorElemento = document.createElement('p');
      autorElemento.textContent = autor;

      const imagenElemento = document.createElement('img');
      imagenElemento.src = imagen;

      // Agrega los elementos al resultado
      resultado.appendChild(tituloElemento);
      resultado.appendChild(autorElemento);
      resultado.appendChild(imagenElemento);

      // Agrega el resultado a la lista de resultados
      resultados.appendChild(resultado);
    });
  }

