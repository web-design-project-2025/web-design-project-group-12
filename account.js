const reviews = JSON.parse(localStorage.getItem("reviews")) || [];
const display = document.getElementById("review-display");

if (reviews.length === 0) {
  display.innerHTML =
    "<p>There are no reviews yet. Add one to your collection.</p>";
} else {
  display.innerHTML = [...reviews]
    .reverse()
    .map((r) => {
      const filledStars = '<i class="fa-solid fa-star clicked"></i>'.repeat(
        r.stars
      );
      const emptyStars = '<i class="fa-solid fa-star"></i>'.repeat(5 - r.stars);

      return `
        <div class="review-box">
          <h3>${r.title}</h3>
          <div class="stars">${filledStars}${emptyStars}</div>
          <p>${r.text}</p>
          <i class="fa-solid fa-trash-can"></i>
        </div>
      `;
    })
    .join("");
}

// const trashIcons = document.querySelectorAll(".fa-trash-can");
// trashIcons.forEach((trashIcon) => {
//   trashIcon.addEventListener("click", function () {
//     // for (let review of reviews) {
//     //   // trashIcon.getAttribute('data-id') = reviews.indexOf(review);
//     //   reviews.splice(reviews.indexOf(review), 1);
//     //   console.log(reviews.indexOf(review) + " " + review.title);
//     //   localStorage.setItem("reviews", JSON.stringify(reviews));
//     //   renderReviews();
//     // }
//     console.log(trashIcons);
//     let review = reviews[trashIcons.indexOf(trashIcon)];
//     reviews.splice(review, 1);
//     localStorage.setItem("reviews", JSON.stringify(reviews));
//   });
// });

const trashIcons = document.querySelectorAll(".fa-trash-can");
console.log(reviews);
console.log(trashIcons);
for (let i = 0; i < trashIcons.length; i++) {
  trashIcons[i].addEventListener("click", function () {
    reviews.splice(trashIcons.length - 1 - i, 1);
    console.log(reviews);
    localStorage.setItem("reviews", JSON.stringify(reviews));
    window.location.reload();
  });
}
// for (let review of reviews) {
//   // trashIcon.getAttribute('data-id') = reviews.indexOf(review);
//   reviews.splice(reviews.indexOf(review), 1);
//   console.log(reviews.indexOf(review) + " " + review.title);
//   localStorage.setItem("reviews", JSON.stringify(reviews));
//   renderReviews();
//

// // Function to attach delete (trash icon) event listeners
// function attachTrashEvents() {
//   const trashIcons = document.querySelectorAll(".fa-trash-can");
//   trashIcons.forEach((trashIcon) => {
//     trashIcon.addEventListener("click", function () {
//       const displayIndex = Number(this.dataset.);

//       // Since we reversed the array for display, we reverse the index to match the original
//       const actualIndex = reviews.length - 1 - displayIndex;

//       // Remove the review and update localStorage
//       reviews.splice(actualIndex, 1);
//       localStorage.setItem("reviews", JSON.stringify(reviews));

//       // Re-render the reviews
//       renderReviews();
//     });
//   });
// }

renderReviews();

// renderReviews();
/*Snackbar - message for a posted review*/
document.addEventListener("DOMContentLoaded", function () {
  if (localStorage.getItem("reviewAdded") === "true") {
    showSnackbar();
    localStorage.removeItem("reviewAdded");
  }
});

function showSnackbar() {
  const snackbar = document.getElementById("snackbar");
  snackbar.className = "show";
  setTimeout(() => {
    snackbar.className = snackbar.className.replace("show", "");
  }, 3000);
}
