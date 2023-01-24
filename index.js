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
likeParagraph.textContent = `${count} Likes`

const div = document.getElementById("button-container");
div.append(likeParagraph);

likeButton.addEventListener("click", (event) => {
  console.log("yay");
  const likes = ++count;
  if (count === 1) {
    likeParagraph.textContent = "1 Like";
  } 
   else {
    likeParagraph.textContent = `${likes} Likes`;
  }
});

const form = document.getElementById("comments");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const newComment = event.target["new-comment-description"].value;
  const newP = document.createElement("p");
  newP.textContent = newComment;
  comments.append(newP);
  form.reset();
});

//moved Tricia's const comments variable into global scope so I could snag it for renderComments

const comments = document.getElementById("comments-container");

//fetch comments from db.json
//render initial comments from db.json file in new p in 'comments-container' div


const commentsUrl = "http://localhost:3000/comments"

function renderComments(oneComment) {
  const newP = document.createElement('p');
  newP.textContent = oneComment.content;
  comments.append(newP);
};

fetch(commentsUrl)
  .then((response) => response.json())
  .then((commentData) => {
    commentData.forEach(renderComments);
  })

  