const blackBg = document.querySelector(".black-bg");
const redBg = document.querySelector(".red-bg");
const whiteBg = document.querySelector(".white-bg");
const menuBtn = document.querySelector(".menu");
const closeTag = document.querySelector(".close-tag");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.add("hidden");
  blackBg.classList.add("show-black-bg");
  redBg.classList.add("show-red-bg");
  whiteBg.classList.add("show-white-bg");
});
closeTag.addEventListener("click", () => {
  menuBtn.classList.remove("hidden");
  blackBg.classList.remove("show-black-bg");
  redBg.classList.remove("show-red-bg");
  whiteBg.classList.remove("show-white-bg");
});
