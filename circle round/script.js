const roundCircle = document.querySelector(".circleround");
const transCircle = document.querySelector(".circletrans");

transCircle.addEventListener("click", () => {
  roundCircle.classList.add("round");
  setTimeout(() => {
    roundCircle.classList.remove("round");
  }, 3000);

});
