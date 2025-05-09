//Movie pages logic with JSON
document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const movieId = Number(urlParams.get("id"));

fetch('movies.json')
  .then(response => response.json())
  .then(data => {

    const movie = data.find(movie => movie.id === movieId);
    if(movie){
      document.getElementById("movie-title").textContent = movie.title;
      document.getElementById("movie-description").textContent = movie.description;
      document.getElementById("movie-runtime").textContent = movie.runtime;
      document.getElementById("movie-cast").textContent = movie.main_cast;
      document.getElementById("movie-genre").textContent = movie.genre;
      document.getElementById("movie-rating").textContent = movie.rating;
      document.getElementById("movie-year").textContent = movie.release_year;
      document.getElementById("movie-image").src = movie.detail_image;
    } else {
      document.getElementById("movie-container").innerHTML = "<p>Movie not found!</p>"
    }
  })
});
