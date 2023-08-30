const jokeText = document.getElementById("joke");
const JokeBtn = document.getElementById("new-joke");

JokeBtn.addEventListener("click",generateJokes)
generateJokes();

function generateJokes() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  fetch("https://icanhazdadjoke.com", config)
    .then((res) => res.json())
    .then((data) => {
      jokeText.innerHTML = data.joke;
    });
}
