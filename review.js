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
  updateStars();
});

/*Posting the review*/
document.getElementById("button").addEventListener("click", function (e) {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const text = document.getElementById("review-text").value;
  const starsCount = document.querySelectorAll(".stars i.clicked").length;

  if (!title || !text || starsCount === 0) {
    alert("Please fill in all fields.");
    return;
  }

  const review = { title, text, stars: starsCount };
  let allReviews = JSON.parse(localStorage.getItem("reviews")) || [];
  allReviews.push(review);
  localStorage.setItem("reviews", JSON.stringify(allReviews));

  window.location.href = "account.html";
});
