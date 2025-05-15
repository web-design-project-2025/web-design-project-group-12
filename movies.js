let movies = [];

//Movie pages logic with JSON
document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const movieId = Number(urlParams.get("id"));

  fetch("data/movies.json")
    .then((response) => response.json())
    .then((data) => {
      const movie = data.find((movie) => movie.id === movieId);
      if (movie) {
        document.getElementById("movie-title").textContent = movie.title;
        document.getElementById("movie-description").textContent =
          movie.description;
        document.getElementById("movie-runtime").textContent = movie.runtime;
        document.getElementById("movie-cast").textContent = movie.main_cast.join(", ");
        document.getElementById("movie-genre").textContent = movie.genre.join(", ");
        // document.getElementById("movie-rating").textContent = movie.rating;
        document.getElementById("movie-rating").innerHTML =
          '<i class="fa-solid fa-star star-icon"></i> ' + movie.rating + "/5";
        // document.getElementById("movie-rating").className = "fa-solid fa-star";
        document.getElementById("movie-year").textContent = movie.release_year;
        document.getElementById("movie-image").src = movie.detail_image;
        //Recived help through Chat GPT, Accessed: 14/05/25 Link: https://chatgpt.com/share/6824ed04-0af0-8000-873e-3e62728c2720
        //First review
        if (movie.reviews.length > 0) {
          document.getElementById("user-1").textContent =
            movie.reviews[0].writer;
          // document.getElementById(
          //   "rating-1"
          // ).textContent = `Rating: ${movie.reviews[0].rating}/5`;
          document.getElementById("rating-1").innerHTML =
            'Rating: <i class="fa-solid fa-star star-icon"></i> ' +
            movie.reviews[0].rating +
            "/5";
          document.getElementById("review-1").textContent =
            movie.reviews[0].text;
        }
        //Second review
        if (movie.reviews.length > 1) {
          document.getElementById("user-2").textContent =
            movie.reviews[1].writer;
          document.getElementById("rating-2").innerHTML =
            'Rating: <i class="fa-solid fa-star star-icon"></i> ' +
            movie.reviews[1].rating +
            "/5";
          document.getElementById("review-2").textContent =
            movie.reviews[1].text;
        }

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
    });
});

// document.addEventListener("DOMContentLoaded", function () {
//  fetch("data/movies.json")
//   .then((response) => response.json())
//   .then((data) => {
//    const container = document.getElementById("movie-thumbnails");

//    data.forEach((movie) => {
//     const li = document.createElement("li");

//     const link = document.createElement("a");
//     link.href = `movies.html?id=${movie.id}`;
//     link.title = movie.title;

//     const img = document.createElement("img");
//     img.src = movie.thumbnail;
//     img.alt = movie.title;

//     const title = document.createElement("p");
//     title.textContent = movie.title;

//     link.appendChild(img);
//     link.appendChild(title);
//     li.appendChild(link);
//     container.appendChild(li);
//    });
//    movies = data;
//    displayMovies(movies);
//   });
// });

//Movies for homepage

document.addEventListener("DOMContentLoaded", function () {
  fetch("data/movies.json")
    .then((response) => response.json())
    .then((movies) => {
      const container = document.getElementById("best-reviewed-container");

      const bestRatedTitles = [
        "The Holiday",
        "How to Lose a Guy in 10 Days",
        "Paper Towns",
        "Five Feet Apart",
        "Anyone but You",
        "Dune",
        "M3gan",
      ];

      const bestMovies = movies.filter((movie) =>
        bestRatedTitles.includes(movie.title)
      );

      bestMovies.forEach((movie) => {
        const card = document.createElement("div");
        card.className = "movie-card";

        const link = document.createElement("a");
        link.href = `movies.html?id=${movie.id}`;
        link.title = movie.title;

        const img = document.createElement("img");
        img.src = movie.thumbnail;
        img.alt = movie.title;

        const stars = document.createElement("div");
        stars.className = "stars1";

        for (let i = 0; i < 5; i++) {
          const star = document.createElement("i");
          star.className = "fa-solid fa-star";
          stars.appendChild(star);
        }

        link.appendChild(img);
        link.appendChild(stars);
        card.appendChild(link);
        container.appendChild(card);
      });
    })
    .catch((error) => {
      console.error("Error loading best reviewed movies:", error);
    });
});

document.addEventListener("DOMContentLoaded", function () {
  fetch("data/movies.json")
    .then((response) => response.json())
    .then((movies) => {
      const container = document.getElementById("most-reviewed-container");

      const mostReviewedTitles = [
        "Us",
        "The Conjuring",
        "Kill Bill: Vol 1",
        "The Dark Knight",
        "San Andreas",
        "It",
        "Smile 2",
      ];

      const mostReviewedMovies = movies.filter((movie) =>
        mostReviewedTitles.includes(movie.title)
      );

      mostReviewedMovies.forEach((movie) => {
        const card = document.createElement("div");
        card.className = "movie-card";

        const link = document.createElement("a");
        link.href = `movies.html?id=${movie.id}`;
        link.title = movie.title;

        const img = document.createElement("img");
        img.src = movie.thumbnail;
        img.alt = movie.title;

        const stars = document.createElement("div");
        stars.className = "stars1";

        for (let i = 0; i < 5; i++) {
          const star = document.createElement("i");
          star.className = "fa-solid fa-star";
          stars.appendChild(star);
        }
        link.appendChild(img);
        link.appendChild(stars);
        card.appendChild(link);
        container.appendChild(card);
      });
    })
    .catch((error) => {
      console.error("Error loading most reviewed movies:", error);
    });
});

//end movies homepage

//Movie List
document.addEventListener("DOMContentLoaded", function () {
  fetch("data/movies.json")
    .then((response) => response.json())
    .then((data) => {
      movies = data;
      displayMovies(movies);
    });
});

//Javascript inspiration helping with displaying movies on Movie List https://chatgpt.com/share/68228176-34f0-8003-83c3-7248dcc15dfb
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

    // const title = document.createElement("p");
    // title.textContent = movie.title;

    link.appendChild(img);
    // link.appendChild(title);
    li.appendChild(link);
    container.appendChild(li);
  });
}

function filterMovies(genre) {
  if (genre === "All") {
    displayMovies(movies);
  } else {
    const filtered = movies.filter((movie) => movie.genre.includes(genre));
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

  const heartButton = document.getElementById("heart-button");
  if (heartButton) {
    heartButton.addEventListener("click", () => {
      heartButton.classList.add("added");
      addToWatchlist();
    });
  }
};

/*The star rating*/
// document.addEventListener("DOMContentLoaded", function () {
//   const stars = document.querySelectorAll(".stars i");
//   let clicked = JSON.parse(localStorage.getItem("clickedStars")) || [
//     false,
//     false,
//     false,
//     false,
//     false,
//   ];

//   function updateStars() {
//     stars.forEach((star, index) => {
//       let rating = parseInt(localStorage.getItem("rating"));
//       star.classList.remove("clicked");
//       if (4 - index <= rating) {
//         star.classList.add("clicked");
//       }
//     });
//   }

//   stars.forEach((star, index) => {
//     star.addEventListener("click", () => {
//       localStorage.setItem("rating", 4 - index);
//       updateStars();
//     });
//   });
// });

// /*Posting the review*/
// document.getElementById("button").addEventListener("click", function (e) {
//   e.preventDefault();

//   const title = document.getElementById("title").value.trim();
//   const text = document.getElementById("review-text").value.trim();
//   const starsCount = document.querySelectorAll(".stars i.clicked").length;

//   if (!title || !text || starsCount === 0) {
//     /*Inspiration through W3schools Accesed: 07/05/25. https://www.w3schools.com/howto/howto_js_snackbar.asp */
//     const snackbar = document.getElementById("alert-snackbar");
//     snackbar.classList.add("show");

//     setTimeout(() => {
//       snackbar.classList.remove("show");
//     }, 4000);

//     return;
//   }

//   const review = { title, text, stars: starsCount };
//   let allReviews = JSON.parse(localStorage.getItem("reviews")) || [];
//   allReviews.push(review);
//   localStorage.setItem("reviews", JSON.stringify(allReviews));

//   window.location.href = "account.html";
// });

// /*Inspiration through W3schools Accesed: 07/05/25. https://www.w3schools.com/howto/howto_js_snackbar.asp */
// /*Snackbar - for a posted review*/
// document.addEventListener("DOMContentLoaded", function () {
//   const postButton = document.getElementById("button");

//   postButton.addEventListener("click", () => {
//     localStorage.setItem("reviewAdded", "true");
//   });
// });
// };
