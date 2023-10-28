const open_btn = document.querySelector(".header__label");
const slider = document.querySelector(".slider");
const slider__shadow = document.querySelector(".slider-shadow");
const loader = document.querySelector(".loader");

document.body.classList.toggle("lock-scroll");
window.addEventListener("load", function () {
  loader.style.display = "none";
  document.querySelector("body").classList.toggle("lock-scroll");
});

open_btn.addEventListener("click", function () {
  slider.classList.toggle("slider--active");
  slider__shadow.classList.toggle("slider-shadow--active");
  document.body.classList.toggle("lock-scroll");
});
