// Swiper
var swiper = new Swiper(".home", {
  spaceBetween: 30,
  centeredSlides: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("bx-x");
  navbar.classList.remove("active");
};

const filterButton = document.querySelectorAll(".categories-container i");
const filterablecard = document.querySelectorAll(".products-container .box");

const filterCards = (e) => {
  //console.log(e.target);

  filterablecard.forEach((box) => {
    box.classList.add("hide");
    if (
      box.dataset.name === e.target.dataset.name ||
      e.target.dataset.name === "all"
    ) {
      box.classList.remove("hide");
    }
  });
};

filterButton.forEach((i) => i.addEventListener("click", filterCards));
