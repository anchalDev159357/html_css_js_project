const followersLoader = document.querySelector(".followers-loader");
const postLoader = document.querySelector(".post-loader");
const followingLoader = document.querySelector(".following-loader");
let followersLoad = 0;
let followersint = setInterval(loading, 10);

function loading() {
  followersLoad++;
  followersLoader.innerText = `${followersLoad}k`;
  if (followersLoad > 999) {
    clearInterval(followersint);
    if (followersLoad === 1000) {
      clearInterval(followersint);
      followersLoader.innerText = `${1.8}M`;
    }
  }
}

let followingLoad = 0;
let followingint = setInterval(followingLoading, 400);

function followingLoading() {
  followingLoad++;
  followingLoader.innerText = `${followingLoad}`;
  if (followingLoad > 28) {
    clearInterval(followingint);
  }
}

let postLoad = 0;
let postint = setInterval(postLoading, 100);

function postLoading() {
  postLoad++;
  postLoader.innerText = `${postLoad}`;
  if (postLoad > 68) {
    clearInterval(postint);
  }
}
