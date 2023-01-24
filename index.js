const BASE_URL = "https://dog.ceo/api/breeds/image/random";

const dogImage = document.getElementById("dog-image");
fetch(BASE_URL)
  .then((response) => response.json())
  .then((img) => {
    dogImage.src = img.message;
  });

const likeButton = document.getElementById("like-button");

const likeParagraph = document.createElement("p");
likeParagraph.id = "like-count";
let count = 0;

const div = document.getElementById("button-container");
div.append(likeParagraph);

likeButton.addEventListener("click", (event) => {
  console.log("yay");
  const likes = ++count;
  if (count === 0) {
    likeParagraph.textContent = "0 Likes";
  } else if (count === 1) {
    likeParagraph.textContent = `1 Like`;
  } else {
    likeParagraph.textContent = `${likes} Likes`;
  }
});

const form = document.getElementById("comments");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const comments = document.getElementById("comments-container");
  const newComment = event.target["new-comment-description"].value;
  const newP = document.createElement("p");
  newP.textContent = newComment;
  comments.append(newP);
  form.reset();
});
