const header = document.getElementById("header");
const title = document.getElementById("title");
const excerpt = document.getElementById("excerpt");
const profile_img = document.getElementById("profile-img");
const name = document.getElementById("name");
const date = document.getElementById("date");
const animated_bgs = document.querySelectorAll(".animated-bg");
const animated_bgs_text = document.querySelectorAll(".animated-bg-text");

setTimeout(getData, 2500);
function getData() {
  header.innerHTML = ` <img
    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"alt=""/>`;
  title.innerHTML = `Lorem ipsum dolor sit amet`;
  excerpt.innerHTML = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos,
    eveniet!`;
  profile_img.innerHTML = ` <img src="profilepicture.jpg" alt="" />`;
  name.innerHTML = `Anchal singh`;
  date.innerHTML = `Oct 08,2023`;
  animated_bgs.forEach((bg) => {
    bg.classList.remove("animated-bg");
  });
  animated_bgs_text.forEach((bg) => {
    bg.classList.remove("animated-bg-text");
  });
}
