const loader = document.querySelector('.load')

let load = 0;
let int = setInterval(loading, 10);

function loading() {
  load++;
  loader.innerText = `${load}k`;
  if (load > 999) {
    clearInterval(int);
    if (load === 1000) {
      clearInterval(int);
      loader.innerText = `${2.3}M`;
    }
  }
}
