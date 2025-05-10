// function addToWatchlist() {
//   const movieTitle = document.getElementById("movie-title").innerText;
//   const movieImage = document.getElementById("movie-image").src;

//   const movie = {
//     title: movieTitle,
//     image: movieImage,
//   };

//   let watchlist = JSON.parse(localStorage.getItem("watchlist")) || [];

//   watchlist.push(movie);

//   localStorage.setItem("watchlist", JSON.stringify(watchlist));

//   const snackbar = document.getElementById("alert-snackbar");
//   snackbar.classList.add("show");
// }

// window.onload = function () {
//   const watchlistContainer = document.getElementById("watchlist-container");

//   let watchlist = JSON.parse(localStorage.getItem("watchlist")) || [];

//   watchlist.forEach((movie) => {
//     const imgElement = document.createElement("img");
//     imgElement.src = movie.image;
//     imgElement.alt = movie.title;
//     watchlistContainer.appendChild(imgElement);
//   });
// };

function addToWatchlist() {
  const movieTitle = document.getElementById("movie-title").innerText;
  const movieImage = document.getElementById("movie-image").src;

  const movie = {
    title: movieTitle,
    image: movieImage,
  };

  let watchlist = JSON.parse(localStorage.getItem("watchlist")) || [];

  if (!watchlist.some((m) => m.title === movie.title)) {
    watchlist.push(movie);
    localStorage.setItem("watchlist", JSON.stringify(watchlist));
  }

  const snackbar = document.getElementById("alert-snackbar");
  if (snackbar) {
    snackbar.classList.add("show");
    setTimeout(() => snackbar.classList.remove("show"), 3000);
  }
}

window.onload = function () {
  const watchlistContainer = document.getElementById("watchlist-container");

  if (watchlistContainer) {
    let watchlist = JSON.parse(localStorage.getItem("watchlist")) || [];

    watchlist.forEach((movie) => {
      const card = document.createElement("div");
      card.classList.add("movie-card");

      const img = document.createElement("img");
      img.src = movie.image;
      img.alt = movie.title;

      card.appendChild(img);
      watchlistContainer.appendChild(card);
    });
  }

  const heartButton = document.getElementById("heart-button");
  if (heartButton) {
    heartButton.addEventListener("click", addToWatchlist);
  }
};
