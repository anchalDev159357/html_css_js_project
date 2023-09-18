const loader = document.querySelector(".load");
let load = 0;
let int = setInterval(loading, 30);

function loading() {
  load++;
  loader.innerText = `${load}`;
  if (load > 1065) {
    clearInterval(int);
  }
}

