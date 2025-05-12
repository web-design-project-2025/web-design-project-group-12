/*The star rating*/
document.addEventListener("DOMContentLoaded", function () {
  const stars = document.querySelectorAll(".stars i");
  let clicked = JSON.parse(localStorage.getItem("clickedStars")) || [
    false,
    false,
    false,
    false,
    false,
  ];

  function updateStars() {
    stars.forEach((star, index) => {
      let rating = parseInt(localStorage.getItem("rating"));
      star.classList.remove("clicked");
      if (4 - index <= rating) {
        star.classList.add("clicked");
      }
    });
  }

  stars.forEach((star, index) => {
    star.addEventListener("click", () => {
      localStorage.setItem("rating", 4 - index);
      updateStars();
    });
  });
});

/*Posting the review*/
document.getElementById("button").addEventListener("click", function (e) {
  e.preventDefault();

  const title = document.getElementById("title").value.trim();
  const text = document.getElementById("review-text").value.trim();
  const starsCount = document.querySelectorAll(".stars i.clicked").length;

  if (!title || !text || starsCount === 0) {
    /*Inspiration through W3schools Accesed: 07/05/25. https://www.w3schools.com/howto/howto_js_snackbar.asp */
    const snackbar = document.getElementById("alert-snackbar");
    snackbar.classList.add("show");

    setTimeout(() => {
      snackbar.classList.remove("show");
    }, 4000);

    return;
  }

  const review = { title, text, stars: starsCount };
  let allReviews = JSON.parse(localStorage.getItem("reviews")) || [];
  allReviews.push(review);
  localStorage.setItem("reviews", JSON.stringify(allReviews));

  window.location.href = "account.html";
});

/*Inspiration through W3schools Accesed: 07/05/25. https://www.w3schools.com/howto/howto_js_snackbar.asp */
/*Snackbar - for a posted review*/
document.addEventListener("DOMContentLoaded", function () {
  const postButton = document.getElementById("button");

  postButton.addEventListener("click", () => {
    localStorage.setItem("reviewAdded", "true");
  });
});
