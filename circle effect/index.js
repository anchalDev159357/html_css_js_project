const containerBox = document.querySelector(".container");
const circle1 = document.querySelector(".circle1");
const circle2 = document.querySelector(".circle2");
containerBox.addEventListener("click", () => {
  transforming();
  function transforming() {
    if (circle1 && circle2) {
      circle1.classList.add("transform1");
      circle2.classList.add("transform2");
    }
  }
});
circle2.addEventListener("click", () => {
  reverseTransforming();
  function reverseTransforming() {
    if (circle1 && circle2) {
      circle1.classList.add("transform1reverse");
      circle2.classList.add("transform2reverse");
    }
  }
});