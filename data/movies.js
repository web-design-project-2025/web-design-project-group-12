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

//Fetching API for Top Rated movies
// fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=your_api_key_here&language=en-US&page=1")

// AsyncHttpClient client = new DefaultAsyncHttpClient();
// client.prepare("GET", "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1")
//   .setHeader("accept", "application/json")
//   .setHeader("Authorization", "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNWM1MDY1OTUyYmU3YWJmZDQ1NzIyOGYyYzQ2NzhlZCIsIm5iZiI6MTc0NjcxMDQwNy4yNjgsInN1YiI6IjY4MWNhZjg3ZDQ0MzU3ODdhNTNlYzhiYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.g9WS-FrhDk2wXZIdh0FiAO051sIA6dwGXdrlkmFWRqw")
//   .execute()
//   .toCompletableFuture()
//   .thenAccept(System.out::println)
//   .join();

// client.close();