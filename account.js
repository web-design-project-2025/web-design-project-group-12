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

//renderReviews();

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
