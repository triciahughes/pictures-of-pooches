////////// URLS //////////
const BASE_URL = "https://dog.ceo/api/breeds/image/random";
const commentsUrl = "http://localhost:3000/comments";
const LIKES_URL = "http://localhost:3000/likes";

////////// Variables //////////
const comments = document.getElementById("comments-container");
const dogImage = document.getElementById("dog-image");
const form = document.getElementById("comments");
const likeBtn = document.getElementById("like-button");
const div = document.getElementById("button-container");
const likeParagraph = document.createElement("p");
const pic = document.getElementById("dog-image");
const container = document.getElementById("image-container");

likeParagraph.id = "like-count";
div.append(likeParagraph);

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////

////////// Mouseover Event //////////

function renderMouseover() {
  pic.addEventListener("mouseover", (e) => {
    if (!document.getElementById("txt")) {
      const pets = document.createElement("div");
      pets.textContent = "Click on the picture!";
      pets.setAttribute("id", "txt");
      container.append(pets);
    }
  });
}
renderMouseover();

////////// Render InitalComments //////////
function renderInitialComments(oneComment) {
  const newP = document.createElement("p");
  newP.textContent = oneComment.content;
  comments.append(newP);
}
////////// Fetch Comments //////////

fetch(commentsUrl)
  .then((response) => response.json())
  .then((commentData) => {
    commentData.forEach(renderInitialComments);
  });

////////// Render Likes & POST //////////
function renderLikes() {
  fetch(LIKES_URL)
    .then((response) => response.json())
    .then((data) => {
      data.forEach((like) => {
        let likeAmount = like.amount;
        likeParagraph.textContent = `${likeAmount} Likes`;
        likeBtn.addEventListener("click", (event) => {
          likeAmount = likeAmount + 1;
          likeParagraph.textContent = likeAmount;
          if (likeAmount === 1) {
            likeParagraph.textContent = `${likeAmount} Like`;
          } else {
            likeParagraph.textContent = `${likeAmount} Likes`;
          }

          const likesObj = {
            amount: likeAmount,
            dogURL: dogImgUrl,
          };

          fetch(LIKES_URL, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify(likesObj),
          });
        });
      });
    });
}
renderLikes();

/////// Comments & Fetch Event //////
function renderComments() {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const newComment = event.target["new-comment-description"].value;
    const newP = document.createElement("p");
    newP.textContent = newComment;
    comments.append(newP);
    const commentObject = {
      content: newComment,
      dogImgUrl: dogImgUrl,
    };

    event.target.reset();

    fetch(commentsUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(commentObject),
    });
  });
}
renderComments();

////////// Render Img Function //////////
function renderImg(img) {
  dogImgUrl = img.message;
  dogImage.src = dogImgUrl;
}

fetch(BASE_URL)
  .then((response) => response.json())
  .then((imgData) => {
    renderImg(imgData);
  });
