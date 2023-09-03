let movies = [];

function addMovie() {
  const name = document.getElementById('movieName').value;
  const year = document.getElementById('movieYear').value;
  const mainActor = document.getElementById('mainActor').value;
  const genre = document.getElementById('genre').value;
  const image = document.getElementById('movieImage').value;
  const movie = { name, year, mainActor, genre, image };
  movies.push(movie);

  renderMovies();
}

function deleteMovie(index) {
  movies.splice(index, 1);

  renderMovies();
}


function filterMovies() {
  const searchValue = document.getElementById('searchMovie').value.toLowerCase();
  const filterYear = document.getElementById('filterYear').value;

  const filteredMovies = movies.filter(movie => {
    const nameMatch = movie.name.toLowerCase().includes(searchValue);
    const yearMatch = !filterYear || movie.year == filterYear;
    
    return nameMatch && yearMatch;
  });

  renderMovies(filteredMovies);
}

function renderMovies(moviesToRender = movies) {
  const tableBody = document.getElementById('moviesTableBody');
  tableBody.innerHTML = '';

  moviesToRender.forEach((movie, index) => {
    const row = document.createElement('tr');
    
    const cell1 = document.createElement('td');
    cell1.innerHTML = `<span onmouseover="showImage('${movie.image}')" onmouseout="hideImage()">${movie.name}</span>`;
    
    const cell2 = document.createElement('td');
    cell2.textContent = movie.year;

    const cell3 = document.createElement('td');
    cell3.textContent = movie.mainActor;

    const cell4 = document.createElement('td');
    cell4.textContent = movie.genre;

    const cell5 = document.createElement('td');
    if (movie.image) {
      const img = document.createElement('img');
      img.src = movie.image;
      img.style.width = '100px';
      img.style.height = 'auto';
      cell5.appendChild(img);
    }
    
    const cell6 = document.createElement('td');
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'מחק';
    deleteButton.onclick = () => deleteMovie(index);
    cell6.appendChild(deleteButton);

    row.appendChild(cell1);
    row.appendChild(cell2);
    row.appendChild(cell3);
    row.appendChild(cell4);
    row.appendChild(cell6);
    row.appendChild(cell5);

    tableBody.appendChild(row);
  });
}

function showImage(imageUrl) {
  const imageElement = document.getElementById('movieImagePreview');
  imageElement.src = imageUrl;
  imageElement.style.display = 'block';
}

function hideImage() {
  const imageElement = document.getElementById('movieImagePreview');
  imageElement.style.display = 'none';
}
