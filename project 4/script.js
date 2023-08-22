const models = document.querySelectorAll(".btn");
const contents = document.querySelectorAll(".content");
const closeBtn = document.getElementsByClassName(".close-btn");
const Container = document.getElementsByClassName(".container");

for (let i = 0; i < models.length; i++) {
  models[i].addEventListener("click", function () {
    console.log('button clicked')
    
  });
}
