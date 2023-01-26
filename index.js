const BASE_URL = "https://dog.ceo/api/breeds/image/random";

const dogImage = document.getElementById("dog-image");
fetch(BASE_URL)
  .then((response) => response.json())
  .then((img) => {
    dogImgUrl = img.message;
    dogImage.src = dogImgUrl;

    /////// Comments Fetch & Event //////

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const newComment = event.target["new-comment-description"].value;
      const commentObject = {
        content: newComment,
        dogImgUrl: dogImgUrl,
      };
      comments.append(newComment);
      form.reset();

      fetch(commentsUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(commentObject),
      });
    });

    /////// Likes Fetch & Event ///////
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

<<<<<<< HEAD
//moved Tricia's const comments variable into global scope so I could snag it for renderComments

const comments = document.getElementById("comments-container");

//fetch comments from db.json
//render initial comments from db.json file in new p in 'comments-container' div

const commentsUrl = "http://localhost:3000/comments";

function renderComments(oneComment) {
  const newP = document.createElement("p");
  newP.textContent = oneComment.content;
  comments.append(newP);
}

fetch(commentsUrl)
  .then((response) => response.json())
  .then((commentData) => {
    commentData.forEach(renderComments);
  });

const LIKES_URL = "http://localhost:3000/likes";
const likeBtn = document.getElementById("like-button");
const div = document.getElementById("button-container");
const likeParagraph = document.createElement("p");
likeParagraph.id = "like-count";
div.append(likeParagraph);
=======

>>>>>>> 8c6d4ae (no changes)
