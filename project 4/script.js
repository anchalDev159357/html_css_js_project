const buttons = document.querySelectorAll(".btn");
const contents = document.getElementsByClassName("content");
const closeBtn = document.getElementsByClassName("close-btn");
const Container = document.getElementsByClassName("container");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", () => {
    console.log("button clicked");
    if (contents) {
      contents[i].classList.remove("hidden");
      for (let j = 0; j < contents.length; j++) {
        if (j !== i) {
          contents[j].classList.add("hidden");
        }
      }
    } else {
      console.log("there is nothing");
    }
  });
}
