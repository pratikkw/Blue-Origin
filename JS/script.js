const open_btn = document.querySelector(".header__label");
const slider = document.querySelector(".slider");

open_btn.addEventListener("click", function () {
  slider.classList.toggle("slider--active");
});
