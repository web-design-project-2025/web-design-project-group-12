let movies = [];

//Movie pages logic with JSON
document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const movieId = Number(urlParams.get("id"));

fetch('data/movies.json')
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
      document.getElementById("movie-rating").className = "far-solid fa star";
      document.getElementById("movie-year").textContent = movie.release_year;
      document.getElementById("movie-image").src = movie.detail_image;
    // } else {
    //   const movieContainer = document.getElementById("movie-container");
    //   if (movieContainer) {
    //   movieContainer.innerHTML = "<p>Movie not found!</p>";
    //   }
      // Watchlist logic after data is loaded
      const heartButton = document.getElementById("heart-button");

        // Check if movie is already in watchlist
      let watchlist = JSON.parse(localStorage.getItem("watchlist")) || [];
      const isInWatchlist = watchlist.some((m) => m.title === movie.title);

      if (isInWatchlist) {
        heartButton.classList.add("added");
      }
    } else {
      const movieContainer = document.getElementById("movie-container");
      if (movieContainer) {
      movieContainer.innerHTML = "<p>Movie not found!</p>";
      }
    }
  })
});

document.addEventListener("DOMContentLoaded", function () {
  fetch("data/movies.json")
    .then((response) => response.json())
    .then((data) => {
      movies = data;
      displayMovies(movies);
    });
});

//Javascript inspiration helping with displaying movies on movie page site https://chatgpt.com/share/68228176-34f0-8003-83c3-7248dcc15dfb
function displayMovies(movies) {
  const container = document.getElementById("movie-thumbnails");
  container.innerHTML = "";


  movies.forEach((movie) => {
    const li = document.createElement("li");


    const link = document.createElement("a");
    link.href = `movies.html?id=${movie.id}`;
    link.title = movie.title;


    const img = document.createElement("img");
    img.src = movie.thumbnail;
    img.alt = movie.title;


    const title = document.createElement("p");
    title.textContent = movie.title;


    link.appendChild(img);
    link.appendChild(title);
    li.appendChild(link);
    container.appendChild(li);
  });
}

function filterMovies(genre) {
  if (genre === "All") {
    displayMovies(movies);
  } else {
    const filtered = movies.filter((movie) =>
      movie.genre.includes(genre)
    );
    displayMovies(filtered);
  }
}

//Add to watchlist
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

  // const heartButton = document.getElementById("heart-button");
  // if (heartButton) {
  //   heartButton.classList.add("added");
  // }

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

    watchlist.forEach((movie, index) => {
      const card = document.createElement("div");
      card.classList.add("movie-card");

      const img = document.createElement("img");
      img.src = movie.image;
      img.alt = movie.title;

      const title = document.createElement("p");
      title.innerText = movie.title;

      const trashIcon = document.createElement("i");
      trashIcon.classList.add("fa-solid", "fa-trash-can");
      trashIcon.style.cursor = "pointer";

      //Delete handler
      trashIcon.addEventListener("click", function () {
        watchlist.splice(index, 1);
        localStorage.setItem("watchlist", JSON.stringify(watchlist));
        window.location.reload();
      });

      card.appendChild(img);
      card.appendChild(title);
      card.appendChild(trashIcon);
      watchlistContainer.appendChild(card);
    });
  }

// window.onload = function () {
//   const watchlistContainer = document.getElementById("watchlist-container");

//   if (watchlistContainer) {
//     let watchlist = JSON.parse(localStorage.getItem("watchlist")) || [];

//     watchlist.forEach((movie) => {
//       const card = document.createElement("div");
//       card.classList.add("movie-card");

//       const img = document.createElement("img");
//       img.src = movie.image;
//       img.alt = movie.title;

//       card.appendChild(img);
//       watchlistContainer.appendChild(card);
//     });
//   }

  const heartButton = document.getElementById("heart-button");
  if (heartButton) {
    heartButton.addEventListener("click", addToWatchlist);
    
    // const movieTitle = document.getElementById("movie-title")?.innerText;
    // const watchlist = JSON.parse(localStorage.getItem("watchlist")) || [];

    // const isInWatchlist = watchlist.some((m) => m.title === movieTitle);
    // if (isInWatchlist) {
    //   heartButton.classList.add("added");
    // }
  }
};