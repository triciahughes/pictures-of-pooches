const likeButton = document.getElementById('like-button');

const likeParagraph = document.createElement('p')
likeParagraph.id = 'like-count'
let count = 0

const div = document.getElementById('button-container')
div.append(likeParagraph)
// likeParagraph.textContent = `${dog.likes} Likes`


likeButton.addEventListener('click', (event) => {
    const likes = ++count
    if (count === 0) {
        likeParagraph.textContent = '0 Likes'
    } else if (count === 1) {
        likeParagraph.textContent = `1 Like`
    }
    else {
        likeParagraph.textContent = `${likes} Likes`
    }
})