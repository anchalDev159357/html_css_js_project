const header = document.querySelector(".header");
const homeContainer = document.querySelector(".home-container");
const aboutContainer = document.querySelector(".about-container");
const contactContainer = document.querySelector(".contact-container");
const darkModeBtn = document.querySelector(".darkmode");
const html = document.querySelector(".dark-html");
const css = document.querySelector(".dark-css");
const js = document.querySelector(".dark-js");
const about = document.querySelector(".about");
const contact = document.querySelector(".contact");
const circle = document.querySelector(".circle");
const circle2 = document.querySelector(".circle2");
const sendBtn = document.querySelector(".btn");
const notification = document.querySelector(".notifi");

darkModeBtn.addEventListener("click", () => {
  circle.classList.add("dark");
  circle.classList.add("hidden");
  circle2.classList.remove('hidden')
  header.classList.add("dark-header");
  homeContainer.classList.add("dark-home");
  html.classList.add("dark-card-small");
  css.classList.add("dark-card-small");
  js.classList.add("dark-card-small");
  aboutContainer.classList.add("dark-about");
  about.classList.add("dark-about-content");
  contactContainer.classList.add("dark-contact");
  contact.classList.add("dark-contact-content");
});

