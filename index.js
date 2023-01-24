const BASE_URL = "https://dog.ceo/api/breeds/image/random";

const dogImage = document.getElementById("dog-image");
fetch(BASE_URL)
  .then((response) => response.json())
  .then((img) => {
    dogImage.src = img.message;
  });
