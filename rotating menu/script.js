const home = document.querySelector(".home");
const about = document.querySelector(".about");
const contact = document.querySelector(".contact");
const feedback = document.querySelector(".feedback");
const settings = document.querySelector(".settings");
const menu = document.querySelector(".menu");
const closeTag = document.querySelector(".close-tag");

menu.addEventListener("click", () => {
  home.classList.remove("home");
  about.classList.remove("about");
  contact.classList.remove("contact");
  feedback.classList.remove("feedback");
  settings.classList.remove("settings");
  menu.classList.remove("menu");
  menu.classList.add("hidden");
  closeTag.classList.remove("hidden");
});
closeTag.addEventListener("click", () => {
  home.classList.add("home");
  about.classList.add("about");
  contact.classList.add("contact");
  feedback.classList.add("feedback");
  settings.classList.add("settings");
  menu.classList.add("menu");
  menu.classList.remove("hidden");
  closeTag.classList.add("hidden");
});
