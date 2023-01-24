///////// Like Button Functionality ////////

const BASE_URL = "https://dog.ceo/api/breeds/image/random";
const img = document.querySelector("#dog-image");

document.addEventListener("DOMContentLoaded", () => {
  fetch(BASE_URL)
    .then((response) => response.json())
    .then((dogImg) => {
      img.src = dogImg.message;
    });
});
