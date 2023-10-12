const loader = document.querySelector(".load");
let load = 0;
let int = setInterval(loading, 5);

function loading() {
  load++;
  loader.innerText = `${load}`;
  if (load > 1145) {
    clearInterval(int);
  }
}

