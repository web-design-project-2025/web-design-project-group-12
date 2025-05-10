const API_KEY = 'c5c5065952be7abfd457228f2c4678ed';
const URL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`;

fetch(URL)
  .then(response => response.json())
  .then(data => {
    const movies = data.results;
    const movieList = document.getElementById('movies');

    movies.forEach(movie => {
      const listItem = document.createElement('li');
      listItem.textContent = `${movie.title} (Rating: ${movie.vote_average})`;
      movieList.appendChild(listItem);
    });
  })
  .catch(error => {
    console.error('Error fetching movies:', error);
  });