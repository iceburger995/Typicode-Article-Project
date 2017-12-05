/* global $*/
/* global CommentList */

$(document).ready(onHtmlLoaded);

function onHtmlLoaded() {
    // const commentList = new CommentList();
    // commentList.getComments()
    //     .then(displayComment);

    //     function displayComment(){
    //         const commentEl = document.getElementById('comments-section');
    //         for (let i = 0; i < commentList.models.length; i++) {
    //         const userName = document.createElement('h3');
    //         const userEmail = document.createElement('h4');
    //         const userComment = document.createElement('p');

    //         userName.innerHTML = commentList.models[i].name;
    //         userEmail.innerHTML = commentList.models[i].email;
    //         userComment.innerHTML = commentList.models[i].body;

    //         commentEl.appendChild(userName);
    //         commentEl.appendChild(userEmail);
    //         commentEl.appendChild(userComment);
    //         }
    //     }

    function getID(location) {
        return location.slice(location.indexOf('=') + 1);
    }
    console.log(getID(window.location.search));

    getComments(getID(window.location.search))
        .then(elements => { displayComments(elements) });

    const commentTemplate = document.getElementById('comment-template');

    function displayComments(comments) {
        const commentsSection = document.getElementById('comments-section');
        for (let i = 0; i < comments.length; i++) {
            const currentComment = commentTemplate.cloneNode(true);
            currentComment.id = comments[i].id;
            const commentUser = currentComment.querySelector('.comment-user');
            commentUser.innerHTML = comments[i].name;
            const userEmail = currentComment.querySelector('.user-email');
            userEmail.innerHTML = comments[i].email;
            const commentBody = currentComment.querySelector('.comment-body');
            commentBody.innerHTML = comments[i].body;
            commentsSection.appendChild(currentComment);
        }
        commentTemplate.style.display = 'none';
    }
}