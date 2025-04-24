// function openCategoryMenu() {
//   document.getElementById("categoryMenu").style.display = "block";
// }

// function closeCategoryMenu() {
//   document.getElementById("categoryMenu").style.display = "none";
// }

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
