const headerPart = document.querySelector(".header");
const home = document.querySelector(".home");
const content = document.querySelector(".content");

window.addEventListener("scroll", () => {
  if (window.scrollY > headerPart.offsetHeight + 150) {
    headerPart.classList.add("changebg");
    home.classList.add("changes");
  }else{
    headerPart.classList.remove("changebg");
    home.classList.remove("changes");
  }
});
