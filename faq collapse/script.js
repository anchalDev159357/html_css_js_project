const firstArrowSvg = document.querySelector(".first-arrow-svg");
const secArrowSvg = document.querySelector(".sec-arrow-svg");
const thirdArrowSvg = document.querySelector(".third-arrow-svg");
const forthArrowSvg = document.querySelector(".forth-arrow-svg");
const fifthArrowSvg = document.querySelector(".fifth-arrow-svg");

// for closing icons---------
const firstCloseSvg = document.querySelector(".first-close");
const secCloseSvg = document.querySelector(".sec-close");
const thirdCloseSvg = document.querySelector(".third-close");
const forthCloseSvg = document.querySelector(".forth-close");
const fifthCloseSvg = document.querySelector(".fifth-close");
// for answer-------------
const firstAns = document.querySelector(".first-ans");
const secAns = document.querySelector(".sec-ans");
const thirdAns = document.querySelector(".third-ans");
const forthAns = document.querySelector(".forth-ans");
const fifthAns = document.querySelector(".fifth-ans");

// First icons----------
firstArrowSvg.addEventListener("click", () => {
  firstCloseSvg.classList.remove("hidden");
  firstArrowSvg.classList.add("hidden");
  firstAns.classList.remove("hidden");
});
firstCloseSvg.addEventListener("click", () => {
  firstCloseSvg.classList.add("hidden");
  firstArrowSvg.classList.remove("hidden");
  firstAns.classList.add("hidden");
});

// Second icons-------------
secArrowSvg.addEventListener("click", () => {
  secCloseSvg.classList.remove("hidden");
  secArrowSvg.classList.add("hidden");
  secAns.classList.remove("hidden");
});
secCloseSvg.addEventListener("click", () => {
  secCloseSvg.classList.add("hidden");
  secArrowSvg.classList.remove("hidden");
  secAns.classList.add("hidden");
});

// third icons-------------
thirdArrowSvg.addEventListener("click", () => {
  thirdCloseSvg.classList.remove("hidden");
  thirdArrowSvg.classList.add("hidden");
  thirdAns.classList.remove("hidden");
});
thirdCloseSvg.addEventListener("click", () => {
  thirdCloseSvg.classList.add("hidden");
  thirdArrowSvg.classList.remove("hidden");
  thirdAns.classList.add("hidden");
});

// forth icons--------------
forthArrowSvg.addEventListener("click", () => {
  forthCloseSvg.classList.remove("hidden");
  forthArrowSvg.classList.add("hidden");
  forthAns.classList.remove("hidden");
});
forthCloseSvg.addEventListener("click", () => {
  forthCloseSvg.classList.add("hidden");
  forthArrowSvg.classList.remove("hidden");
  forthAns.classList.add("hidden");
});

// fifth icons---------------
fifthArrowSvg.addEventListener("click", () => {
  fifthCloseSvg.classList.remove("hidden");
  fifthArrowSvg.classList.add("hidden");
  fifthAns.classList.remove("hidden");
});
fifthCloseSvg.addEventListener("click", () => {
  fifthCloseSvg.classList.add("hidden");
  fifthArrowSvg.classList.remove("hidden");
  fifthAns.classList.add("hidden");
});
