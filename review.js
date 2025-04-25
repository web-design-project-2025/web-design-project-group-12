/*The star rating*/
document.addEventListener("DOMContentLoaded", function () {
  const stars = document.querySelectorAll(".stars i");
  let selected = [false, false, false, false, false];

  stars.forEach((star, index) => {
    // Click event to toggle a specific star
    star.addEventListener("click", () => {
      selected[index] = !selected[index]; // Toggle the clicked star
      updateStars();
    });

    //Hover effect
    star.addEventListener("mouseover", () => {
      highlightStars(index);
    });

    star.addEventListener("mouseout", () => {
      updateStars();
    });
  });

  function updateStars() {
    stars.forEach((star, index) => {
      if (selected[index]) {
        star.classList.add("checked");
      } else {
        star.classList.remove("checked");
      }
      star.classList.remove("hovered");
    });
  }

  function highlightStars(hoverIndex) {
    stars.forEach((star, index) => {
      if (!selected[index] && index <= hoverIndex) {
        star.classList.add("hovered");
      } else {
        star.classList.remove("hovered");
      }
    });
  }
});

/*Posting the review*/
document.getElementById("postbutton").addEventListener("click", function (e) {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const text = document.getElementById("review-text").value;
  const stars = document.querySelectorAll(".stars i.checked").length;

  if (!title || !text || stars === 0) {
    alert("Fill in all fields and select stars");
    return;
  }

  const review = { title, text, stars };
  let allReviews = JSON.parse(localStorage.getItem("reviews")) || [];
  allReviews.push(review);
  localStorage.setItem("reviews", JSON.stringify(allReviews));

  window.location.href = "account.html";
});
