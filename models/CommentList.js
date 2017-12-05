/* global $ */

function CommentList() {
    this.models = [];
}

// CommentList.prototype.getComments = function() {
//     const _this = this;
//     return $.ajax('https://jsonplaceholder.typicode.com/comments?postId=1', {
//         method: 'GET',
//         success: function(response) {
//             for (let i = 0; i < response.length; i++) {
//                 const commentData = response[i];
//                 const commentModel = new Comment();
//                 commentModel.id = commentData.id;
//                 commentModel.email = commentData.email;
//                 commentModel.postId = commentData.postId;
//                 commentModel.name = commentData.name;
//                 commentModel.body = commentData.body;
                
//                 _this.models.push(commentModel);
//                 }  
//             },
//         error: function(err) {
//             alert("Something went wrong... " + err);
//         }
//     });
// }

const commentsURL = 'https://jsonplaceholder.typicode.com/comments?postId=';

function getComments(id) {
    return $.ajax(commentsURL + id, {
        method: 'GET',
        success: response => {
            return response;
        },
        error: err => {
            alert('Something happened: ' + err);
        }
    });
}