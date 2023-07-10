const open_btn = document.querySelector(".header__label");
const slider = document.querySelector(".slider");
const slider__shadow = document.querySelector(".slider-shadow");

open_btn.addEventListener("click", function () {
  slider.classList.toggle("slider--active");
  slider__shadow.classList.toggle("slider-shadow--active");
  document.body.classList.toggle("lock-scroll");
});
