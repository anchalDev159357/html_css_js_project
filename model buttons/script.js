const htmlContent = document.getElementById("html");
const cssContent = document.getElementById("css");
const jsContent = document.getElementById("js");
const htmlCloseBtn = document.getElementById("html-close-btn");
const cssCloseBtn = document.getElementById("css-close-btn");
const jsCloseBtn = document.getElementById("js-close-btn");
const closeBtn = document.getElementsByClassName("close-btn");
const Container = document.getElementsByClassName("container");
const htmlBtn = document.getElementById("msg1");
const cssBtn = document.getElementById("msg2");
const jsBtn = document.getElementById("msg3");
const welcome = document.querySelector('h1')

htmlBtn.addEventListener("click", () => {
  welcome.style.opacity = 0
  htmlContent.classList.remove("hidden");
  cssContent.classList.add("hidden");
  jsContent.classList.add("hidden");
});
cssBtn.addEventListener("click", () => {
  welcome.style.opacity = 0
  htmlContent.classList.add("hidden");
  cssContent.classList.remove("hidden");
  jsContent.classList.add("hidden");
});
jsBtn.addEventListener("click", () => {
  welcome.style.opacity = 0
  htmlContent.classList.add("hidden");
  cssContent.classList.add("hidden");
  jsContent.classList.remove("hidden");
});

htmlCloseBtn.addEventListener("click", () => {
  welcome.style.opacity = 1
  htmlContent.classList.add("hidden");
  cssContent.classList.add("hidden");
  jsContent.classList.add("hidden");
});
cssCloseBtn.addEventListener("click", () => {
  welcome.style.opacity = 1
  htmlContent.classList.add("hidden");
  cssContent.classList.add("hidden");
  jsContent.classList.add("hidden");
});
jsCloseBtn.addEventListener("click", () => {
  welcome.style.opacity = 1
  htmlContent.classList.add("hidden");
  cssContent.classList.add("hidden");
  jsContent.classList.add("hidden");
});
