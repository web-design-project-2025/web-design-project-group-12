// const reviews = JSON.parse(localStorage.getItem("reviews")) || [];
// const display = document.getElementById("review-display");

// if (reviews.length === 0) {
//   display.innerHTML =
//     "<p>There are no reviews yet. Add one to your collection.</p>";
// } else {
//   reviews.forEach((r) => {
//     const reviewBox = document.createElement("div");
//     reviewBox.classList.add("review-box");

//     const title = document.createElement("h3");
//     title.textContent = r.title;

//     const stars = document.createElement("div");
//     stars.classList.add("stars");

//     for (let i = 0; i < r.stars; i++) {
//       stars.innerHTML += '<i class="fa-solid fa-star clicked"></i>';
//     }
//     for (let i = r.stars; i < 5; i++) {
//       stars.innerHTML += '<i class="fa-solid fa-star"></i>';
//     }

//     const text = document.createElement("p");
//     text.textContent = r.text;

//     // Lägg till allt i reviewBox
//     reviewBox.appendChild(title);
//     reviewBox.appendChild(stars);
//     reviewBox.appendChild(text);

//     // Lägg till reviewBox i display-elementet
//     display.appendChild(reviewBox);
//   });
// }

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
        </div>
      `;
    })
    .join("");
}
