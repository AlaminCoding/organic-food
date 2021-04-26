const menuBar = document.querySelector(".menu-bar");
const nav = document.querySelector(".nav");
const bar = document.querySelectorAll(".bar");
const header = document.getElementById("header");
let menuOpen = false;
menuBar.addEventListener("click", function () {
  if (menuOpen === false) {
    nav.style.left = 0;

    menuBar.children[0].classList.add("bar1-animate");
    menuBar.children[1].classList.add("bar2-animate");
    menuBar.children[2].classList.add("bar3-animate");
    menuOpen = true;
  } else {
    nav.style.left = "-180px";
    menuBar.children[0].classList.remove("bar1-animate");
    menuBar.children[1].classList.remove("bar2-animate");
    menuBar.children[2].classList.remove("bar3-animate");
    menuOpen = false;
  }
});

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    header.classList.add("header-shadow");
  } else {
    header.classList.remove("header-shadow");
  }
});
