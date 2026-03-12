function initSlider(sliderId) {
  const slider = document.getElementById(sliderId);
  if (!slider) return;
  slider.dataset.index = "0";
}

function showSlide(sliderId, index) {
  const slider = document.getElementById(sliderId);
  if (!slider) return;

  const slides = slider.querySelectorAll(".slide");
  const dots = slider.querySelectorAll(".dot");

  const total = slides.length;
  const newIndex = ((index % total) + total) % total;

  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === newIndex);
  });

  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === newIndex);
  });

  slider.dataset.index = String(newIndex);
}

function changeSlide(sliderId, step) {
  const slider = document.getElementById(sliderId);
  if (!slider) return;
  const current = parseInt(slider.dataset.index || "0", 10);
  showSlide(sliderId, current + step);
}

function goToSlide(sliderId, index) {
  showSlide(sliderId, index);
}

document.addEventListener("DOMContentLoaded", function () {
  initSlider("slider-moire");
});