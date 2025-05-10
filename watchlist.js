function addToWatchlist() {
  const movieTitle = document.getElementById("movie-title").innerText;
  const movieImage = document.getElementById("movie-image").src;

  console.log("Saving movie:", movieTitle, movieImage);

  const movie = {
    title: movieTitle,
    image: movieImage,
  };

  let watchlist = JSON.parse(localStorage.getItem("watchlist")) || [];

  watchlist.push(movie);

  localStorage.setItem("watchlist", JSON.stringify(watchlist));

  alert("Your movie have been added to watchlist");
}

window.onload = function () {
  const watchlistContainer = document.getElementById("watchlist-container");

  let watchlist = JSON.parse(localStorage.getItem("watchlist")) || [];

  watchlist.forEach((movie) => {
    const imgElement = document.createElement("img");
    imgElement.src = movie.image;
    imgElement.alt = movie.title;
    watchlistContainer.appendChild(imgElement);
  });
};
