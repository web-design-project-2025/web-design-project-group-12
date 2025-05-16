function openHamburgerNav() {
  const menu = document.getElementById("menubar");
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}
