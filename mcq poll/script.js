const body = document.querySelector("body");
const firstOption = document.getElementById("rajasthan");
const secondOption = document.getElementById("gujrat");
const thirdOption = document.getElementById("maharashtra");
const forthOption = document.getElementById("punjab");
const greet = document.querySelector('.greet')

secondOption.addEventListener("click", () => {
  body.style.backgroundColor = "green";
  greet.classList.remove('hidden')

});
firstOption.addEventListener("click", () => {
  body.style.backgroundColor = "red";
  greet.classList.add('hidden')

});
thirdOption.addEventListener("click", () => {
  body.style.backgroundColor = "red";
  greet.classList.add('hidden')

});
forthOption.addEventListener("click", () => {
  body.style.backgroundColor = "red";
  greet.classList.add('hidden')

});
